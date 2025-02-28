<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?php echo isset($pageTitle)
                ? $pageTitle
                : "Datadog RUM Demo"; ?></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Datadog Scripts -->
    <script src="https://www.unpkg.com/@kyletaylored/datadog-rum-interceptor@latest/dist/umd/index.js"></script>
    <!-- <script src="dri.js"></script> -->
    <script src="https://www.datadoghq-browser-agent.com/us1/v6/datadog-rum.js"></script>
    <script src="https://www.datadoghq-browser-agent.com/us1/v6/datadog-logs.js"></script>

    <!-- Your custom JS file -->
    <script src="dd.js"></script>
    <script src="client.js" defer></script>

</head>

<body class="">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">DD Demo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/page-1">Page 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/page-2">Page 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="container py-3">
            <!-- Main Content from child templates -->
            <?php // $pageContent should contain the HTML rendered by home.php or page.php
            echo isset($pageContent) ? $pageContent : ""; ?>
    </main>
    </div>
</body>

</html>