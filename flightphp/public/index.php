<?php

/**
 * public/index.php
 *
 * Entry point for the FlightPHP application. Sets up routes for home, dynamic pages,
 * and API endpoints.
 */

require __DIR__ . '/../vendor/autoload.php';

use Faker\Factory as Faker;
use Bezhanov\Faker\Provider\Commerce;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Initialize Faker
$faker = Faker::create();
$faker->addProvider(new Commerce($faker));

// Initialize SQLite
// Define the database path
$dbPath = __DIR__ . '/../data/database.sqlite';

// Ensure the data directory exists
if (!file_exists(__DIR__ . '/../data')) {
    mkdir(__DIR__ . '/../data', 0777, true);
}

// Create the database file if it doesn't exist
if (!file_exists($dbPath)) {
    touch($dbPath);
}

// Open or create SQLite database
$db = new SQLite3($dbPath);
$db->exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, session_token TEXT, data TEXT)");
$db->exec("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, category TEXT, price REAL, description TEXT, promotion_code TEXT)");

// Set the directory where Flight will look for view files.
Flight::set('flight.views.path', __DIR__ . '/../views');

// Enable CORS for API requests.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// -------------------------------------
// Error Handling
// -------------------------------------
Flight::map('error', function (Throwable $ex) {
    Flight::json([
        'error'   => true,
        'message' => $ex->getMessage()
    ], 500);
});

// -------------------------------------
// Page Routes (Serving HTML)
// -------------------------------------

/**
 * Home page route.
 *
 * Renders the "home.php" view. The layout.php file is used as the main layout,
 * which includes bootstrap, Datadog scripts, etc.
 */
Flight::route('/', function () {
    Flight::render('react.php');
});

Flight::route('/default', function () {
    $content = Flight::view()->fetch('home.php', [
        'heading' => 'Datadog RUM and APM Test',
        'subtitle' => 'Home Page'
    ]);

    Flight::render('layout.php', [
        'pageTitle'   => 'Datadog RUM Demo - Home',
        'pageContent' => $content
    ]);
});

/**
 * Dynamic page route.
 *
 * Captures any single segment (e.g., /page-2, /about, /contact) as $slug.
 * Uses it to dynamically set the title and heading.
 */
Flight::route('/@slug', function ($slug) {
    $content = Flight::view()->fetch('page.php', [
        'heading' => 'Welcome to ' . ucfirst($slug),
        'slug'    => $slug
    ]);

    Flight::render('layout.php', [
        'pageTitle'   => 'Datadog RUM Demo - ' . ucfirst($slug),
        'pageContent' => $content
    ]);
});


// -------------------------------------
// API Endpoints
// -------------------------------------

// Root endpoint
Flight::route('GET /api/data', function () {
    Flight::json(['message' => 'Welcome to the API!', 'timestamp' => date('c')]);
});

// Auth endpoint (POST)
Flight::route('POST /api/token', function () {
    $faker = Faker::create();

    $accessToken = $faker->uuid;
    $expiresIn = $faker->numberBetween(3600, 7200);

    Flight::json([
        'accessToken' => $accessToken,
        'expiresIn' => $expiresIn
    ]);
});

// Users endpoint
Flight::route('GET /api/users', function () {
    $faker = Faker::create();
    $users = [];

    $numUsers = $faker->numberBetween(1, 6);
    for ($i = 0; $i < $numUsers; $i++) {
        $users[] = [
            'name' => $faker->name,
            'email' => $faker->email
        ];
    }

    Flight::json($users);
});

// Status endpoint
Flight::route('GET /api/status', function () {
    Flight::json(['status' => 'OK', 'uptime' => microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']]);
});

// Error Simulation Endpoint
Flight::route('GET /api/error', function () {
    $statusCode = Flight::request()->query['status'] ?? 400;
    $message = Flight::request()->query['message'] ?? 'An error occurred';
    $delay = Flight::request()->query['delay'] ?? 0;

    $allowedStatusCodes = [400, 401, 403, 404, 500, 502, 503, 504];
    if (!in_array($statusCode, $allowedStatusCodes)) {
        $statusCode = 400;
        $message = 'Invalid status code requested';
    }

    usleep($delay * 1000);

    Flight::halt($statusCode, json_encode([
        'error' => ['code' => $statusCode, 'message' => $message]
    ]));
});


// -------------------------------------
// Authentication Endpoints
// -------------------------------------

/**
 * User Login: POST /api/login
 * Accepts email/password and creates a session.
 */
Flight::route('POST /api/login', function () use ($db, $faker) {
    $data = Flight::request()->data;
    $email = $data->email;
    $password = $data->password; // In real life, never store plaintext passwords.

    if (empty($email) || empty($password)) {
        Flight::json(['error' => true, 'message' => 'Email and password required'], 400);
        return;
    }

    // Generate a session token
    $sessionToken = bin2hex(random_bytes(16));

    // Generate fake user details
    $userData = [
        'name'       => $faker->name,
        'avatar'     => $faker->imageUrl(100, 100, 'people'),
        'email'      => $email,
        'address'    => $faker->address,
        'phone'      => $faker->phoneNumber,
        'dob'        => $faker->date,
        'session'    => $sessionToken,
    ];

    // Store in SQLite
    $stmt = $db->prepare("INSERT INTO users (email, session_token, data) VALUES (:email, :session_token, :data) ON CONFLICT(email) DO UPDATE SET session_token=:session_token, data=:data");
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    $stmt->bindValue(':session_token', $sessionToken, SQLITE3_TEXT);
    $stmt->bindValue(':data', json_encode($userData), SQLITE3_TEXT);
    $stmt->execute();

    Flight::json(['success' => true, 'user' => $userData]);
});

/**
 * Fetch Authenticated User: GET /api/user
 */
Flight::route('GET /api/user', function () use ($db) {
    $sessionToken = Flight::request()->query['session'] ?? '';

    if (empty($sessionToken)) {
        Flight::json(['error' => true, 'message' => 'Unauthorized'], 401);
        return;
    }

    $stmt = $db->prepare("SELECT data FROM users WHERE session_token = :session_token");
    $stmt->bindValue(':session_token', $sessionToken, SQLITE3_TEXT);
    $result = $stmt->execute()->fetchArray(SQLITE3_ASSOC);

    if (!$result) {
        Flight::json(['error' => true, 'message' => 'Invalid session'], 401);
        return;
    }

    Flight::json(json_decode($result['data'], true));
});

/**
 * Generate JWT: GET /api/jwt
 */
Flight::route('GET /api/jwt', callback: function () use ($faker) {

    // Use HS256 to generate and parse JWTs
    $key = $faker->slug;
    $payload = ['id' => $faker->randomDigit, 'is-admin' => true];

    // Generate a JWT
    $jwt = JWT::encode($payload, $key, 'HS256');

    // Pass a stdClass in as the third parameter to get the decoded header values
    $headers = new stdClass();
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'), $headers);
    foreach ($headers as $k => $v) {
        Flight::response()->setHeader($k, $v);
    }

    Flight::json($decoded);
});

// -------------------------------------
// Product Endpoints
// -------------------------------------

/**
 * Generate Fake Products if Empty
 */
function seedProducts($db, $faker)
{
    $count = $db->querySingle("SELECT COUNT(*) FROM products");
    if ($count > 0) return;

    for ($i = 0; $i < 100; $i++) {
        $stmt = $db->prepare("INSERT INTO products (name, category, price, description, promotion_code) VALUES (:name, :category, :price, :description, :promotion_code)");
        $stmt->bindValue(':name', $faker->productName, SQLITE3_TEXT);
        $stmt->bindValue(':category', $faker->category, SQLITE3_TEXT);
        $stmt->bindValue(':price', $faker->randomFloat(2, 10, 200), SQLITE3_FLOAT);
        $stmt->bindValue(':description', $faker->sentence, SQLITE3_TEXT);
        $stmt->bindValue(':promotion_code', $faker->promotionCode, SQLITE3_TEXT);
        $stmt->execute();
    }
}
seedProducts($db, $faker);

/**
 * Fetch Product List: GET /api/products
 */
Flight::route('GET /api/products', function () use ($db) {
    $result = $db->query("SELECT * FROM products");
    $products = [];

    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $products[] = $row;
    }

    Flight::json($products);
});

/**
 * Fetch Product Details: GET /api/products/@id
 */
Flight::route('GET /api/products/@id', function ($id) use ($db) {
    $stmt = $db->prepare("SELECT * FROM products WHERE id = :id");
    $stmt->bindValue(':id', (int)$id, SQLITE3_INTEGER);
    $result = $stmt->execute()->fetchArray(SQLITE3_ASSOC);

    if (!$result) {
        Flight::json(['error' => true, 'message' => 'Product not found'], 404);
        return;
    }

    Flight::json($result);
});

/**
 * Search Products: GET /api/search?q=keyword
 */
Flight::route('GET /api/search', function () use ($db) {
    $query = Flight::request()->query['q'] ?? '';

    if (empty($query)) {
        Flight::json(['error' => true, 'message' => 'Search query required'], 400);
        return;
    }

    $stmt = $db->prepare("SELECT * FROM products WHERE name LIKE :query OR category LIKE :query");
    $stmt->bindValue(':query', "%$query%", SQLITE3_TEXT);
    $result = $stmt->execute();

    $products = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $products[] = $row;
    }

    Flight::json($products);
});

// -------------------------------------
// Start the FlightPHP engine
// -------------------------------------
Flight::start();
