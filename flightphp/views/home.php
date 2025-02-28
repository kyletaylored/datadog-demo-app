<!-- views/home.php -->

<!-- 
  This is the content for the homepage. The actual HTML structure 
  (head, body, scripts) is in layout.php to avoid duplication.
-->

<div class="container my-5">
    <h1><?php echo $heading; ?></h1>

    <!-- API Endpoints Table -->
    <div class="table-responsive">
        <table class="table table-bordered align-middle">
            <thead class="table-light">
                <tr>
                    <th scope="col">Request Path</th>
                    <th scope="col">Fetch</th>
                    <th scope="col">XMLHttpRequest</th>
                </tr>
            </thead>
            <tbody>
                <!-- GET /api/data -->
                <tr>
                    <td>/api/data</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/data" data-method="GET">Fetch (Data)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/data" data-method="GET">XMLHttpRequest (Data)</button>
                    </td>
                </tr>
                <!-- GET /api/users -->
                <tr>
                    <td>/api/users</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/users" data-method="GET">Fetch (Users)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/users" data-method="GET">XMLHttpRequest (Users)</button>
                    </td>
                </tr>
                <!-- GET /api/status -->
                <tr>
                    <td>/api/status</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/status" data-method="GET">Fetch (Status)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/status" data-method="GET">XMLHttpRequest (Status)</button>
                    </td>
                </tr>
                <!-- POST /api/token -->
                <tr>
                    <td>/api/token</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/token" data-method="POST" data-has-payload="true">Fetch (Token)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/token" data-method="POST" data-has-payload="true">XMLHttpRequest (Token)</button>
                    </td>
                </tr>
                <!-- GET /api/error -->
                <tr>
                    <td>/api/error</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/error" data-method="GET" data-has-params="true">Fetch (Error)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/error" data-method="GET" data-has-params="true">XMLHttpRequest (Error)</button>
                    </td>
                </tr>
                <!-- POST /api/soap -->
                <tr>
                    <td>/api/soap</td>
                    <td>
                        <button class="btn btn-primary btn-sm fetch-btn" data-endpoint="/api/soap" data-method="POST" data-is-soap="true">Fetch (SOAP)</button>
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-sm xhr-btn" data-endpoint="/api/soap" data-method="POST" data-is-soap="true">XMLHttpRequest (SOAP)</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Response Display Area -->
    <div class="mt-4">
        <h3>API Response</h3>
        <pre id="response" class="bg-light p-3 border rounded">Click a button to see the response here...</pre>
    </div>
</div>

<!-- Modal for POST /api/token -->
<div class="modal fade" id="tokenModal" tabindex="-1" aria-labelledby="tokenModalLabel">
    <div class="modal-dialog">
        <form id="tokenForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="tokenModalLabel">Get Access Token</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="token-username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="token-username" name="username" required>
                </div>
                <div class="mb-3">
                    <label for="token-password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="token-password" name="password" required>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Get Token</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal for GET /api/error -->
<div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel">
    <div class="modal-dialog">
        <form id="errorForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="errorModalLabel">Trigger Error</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="error-status" class="form-label">HTTP Status Code</label>
                    <input type="number" class="form-control" id="error-status" name="status" placeholder="e.g., 400" required>
                </div>
                <div class="mb-3">
                    <label for="error-message" class="form-label">Error Message</label>
                    <input type="text" class="form-control" id="error-message" name="message" placeholder="Enter error message" required>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Trigger</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal for SOAP Requests -->
<div class="modal fade" id="soapModal" tabindex="-1" aria-labelledby="soapModalLabel">
    <div class="modal-dialog">
        <form id="soapForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="soapModalLabel">Send SOAP Request</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="soap-action" class="form-label">SOAP Action</label>
                    <select class="form-select" id="soap-action" name="soapAction" required>
                        <option value="" disabled selected>Select an action</option>
                        <option value="GetData">GetData</option>
                        <option value="GetUser">GetUser</option>
                    </select>
                </div>
                <!-- Optional: Add more fields if needed for different SOAP actions -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Send SOAP Request</button>
            </div>
        </form>
    </div>
</div>