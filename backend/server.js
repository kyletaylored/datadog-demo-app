// This line must come before importing the logger.
const tracer = require('dd-trace').init({
    logInjection: true
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Add Datadog config
var dd_options = {
    'response_code': true,
    'tags': ['app:datadog-demo-app-be']
}

var connect_datadog = require('connect-datadog')(dd_options);

// Add the datadog-middleware before your router
app.use(connect_datadog);

// Enable CORS with custom headers
app.use(cors());

// Root endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Welcome to the API!', timestamp: new Date() });
});

// Users endpoint
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Sam Smith' }
    ]);
});

// Status endpoint
app.get('/api/status', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});

// Serve static pages for testing navigation
app.use('/pages', express.static('pages'));

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
