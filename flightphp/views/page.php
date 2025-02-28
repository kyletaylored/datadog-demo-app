<!-- views/page.php -->

<h1><?php echo $heading; ?></h1>
<p>This page was accessed via slug: <strong><?php echo $slug; ?></strong></p>

<button id="fetchData">Fetch API Data</button>
<button id="fetchUsers">Fetch Users</button>
<button id="fetchStatus">Fetch Status</button>
<button id="fetchAuth">Fetch Auth</button>

<pre id="response"></pre>