// client.js

document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:8080';
    const responseElement = document.getElementById('response');

    // Initialize Bootstrap modals
    const tokenModal = new bootstrap.Modal(document.getElementById('tokenModal'));
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    const soapModal = new bootstrap.Modal(document.getElementById('soapModal'));

    // Utility function to display responses
    const displayResponse = (data, status) => {
        // If data is an object, stringify it; otherwise, display as is (for XML)
        let formattedData;
        if (typeof data === 'object') {
            formattedData = JSON.stringify(data, null, 2);
        } else {
            formattedData = data;
        }
        responseElement.innerText = `Status: ${status}\n\n${formattedData}`;
    };

    // Utility function to handle fetch requests
    const handleFetch = async (endpoint, method, options = {}) => {
        try {
            const response = await fetch(`${endpoint}`, options);
            let data;

            const contentType = response.headers.get('Content-Type');

            if (contentType && contentType.includes('application/json')) {
                data = await response.json().catch(() => ({ message: 'No JSON body returned' }));
            } else if (contentType && contentType.includes('text/xml')) {
                data = await response.text();
            } else {
                data = await response.text();
            }

            displayResponse(data, response.status);

            if (!response.ok) {
                console.warn(`Error calling ${endpoint}:`, data);
            }
        } catch (error) {
            console.error(`Network error calling ${endpoint}:`, error);
            responseElement.innerText = `Network error: ${error.message}`;
        }
    };

    // Utility function to handle XMLHttpRequest
    const handleXMLHttpRequest = (endpoint, method, options = {}) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${endpoint}`, true);

        // Set headers if provided
        if (options.headers) {
            for (const key in options.headers) {
                xhr.setRequestHeader(key, options.headers[key]);
            }
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const status = xhr.status;
                let response = '';

                const contentType = xhr.getResponseHeader('Content-Type');

                if (contentType && contentType.includes('application/json')) {
                    try {
                        response = JSON.parse(xhr.responseText);
                    } catch (e) {
                        response = { message: 'No JSON body returned' };
                    }
                } else if (contentType && contentType.includes('text/xml')) {
                    response = xhr.responseText;
                } else {
                    response = xhr.responseText;
                }

                displayResponse(response, status);

                if (status < 200 || status >= 300) {
                    console.warn(`Error calling ${endpoint}:`, response);
                }
            }
        };

        xhr.onerror = function () {
            console.error(`Network error calling ${endpoint}`);
            responseElement.innerText = `Network error occurred while calling ${endpoint}`;
        };

        if (method === 'POST' && options.body) {
            if (options.headers && options.headers['Content-Type'] === 'application/json') {
                xhr.send(JSON.stringify(options.body));
            } else if (options.headers && options.headers['Content-Type'] === 'text/xml') {
                xhr.send(options.body); // Send XML as string
            } else {
                xhr.send(options.body);
            }
        } else {
            xhr.send();
        }
    };

    // Event delegation for Fetch buttons
    document.querySelectorAll('.fetch-btn').forEach(button => {
        button.addEventListener('click', () => {
            const endpoint = button.getAttribute('data-endpoint');
            const method = button.getAttribute('data-method');
            const hasPayload = button.getAttribute('data-has-payload') === 'true';
            const hasParams = button.getAttribute('data-has-params') === 'true';
            const isSOAP = button.getAttribute('data-is-soap') === 'true';

            if (hasPayload) {
                // Open Token Modal for POST /api/token
                tokenModal.show();
                // Store the request type
                tokenModal.requestInfo = { endpoint, method, isXHR: false };
            } else if (hasParams) {
                // Open Error Modal for GET /api/error
                errorModal.show();
                // Store the request type
                errorModal.requestInfo = { endpoint, method, isXHR: false };
            } else if (isSOAP) {
                // Open SOAP Modal for POST /api/soap
                soapModal.show();
                // Store the request type
                soapModal.requestInfo = { endpoint, method, isXHR: false };
            } else {
                // Simple GET request
                handleFetch(endpoint, method);
            }
        });
    });

    // Event delegation for XMLHttpRequest buttons
    document.querySelectorAll('.xhr-btn').forEach(button => {
        button.addEventListener('click', () => {
            const endpoint = button.getAttribute('data-endpoint');
            const method = button.getAttribute('data-method');
            const hasPayload = button.getAttribute('data-has-payload') === 'true';
            const hasParams = button.getAttribute('data-has-params') === 'true';
            const isSOAP = button.getAttribute('data-is-soap') === 'true';

            if (hasPayload) {
                // Open Token Modal for POST /api/token
                tokenModal.show();
                // Store the request type
                tokenModal.requestInfo = { endpoint, method, isXHR: true };
            } else if (hasParams) {
                // Open Error Modal for GET /api/error
                errorModal.show();
                // Store the request type
                errorModal.requestInfo = { endpoint, method, isXHR: true };
            } else if (isSOAP) {
                // Open SOAP Modal for POST /api/soap
                soapModal.show();
                // Store the request type
                soapModal.requestInfo = { endpoint, method, isXHR: true };
            } else {
                // Simple GET request
                handleXMLHttpRequest(endpoint, method);
            }
        });
    });

    // Handle Token Form Submission
    document.getElementById('tokenForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('token-username').value.trim();
        const password = document.getElementById('token-password').value.trim();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        const { endpoint, method, isXHR } = tokenModal.requestInfo;

        const payload = { username, password };

        if (isXHR) {
            handleXMLHttpRequest(endpoint, method, {
                headers: { 'Content-Type': 'application/json' },
                body: payload
            });
        } else {
            handleFetch(endpoint, method, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: payload
            });
        }

        // Reset and hide the form
        document.getElementById('tokenForm').reset();
        tokenModal.hide();
    });

    // Handle Error Form Submission
    document.getElementById('errorForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const status = document.getElementById('error-status').value.trim();
        const message = document.getElementById('error-message').value.trim();

        if (!status || !message) {
            alert('Please enter both status code and error message.');
            return;
        }

        const { endpoint, method, isXHR } = errorModal.requestInfo;

        // Construct query parameters
        const params = new URLSearchParams({ status, message });

        const fullEndpoint = `${endpoint}?${params.toString()}`;

        if (isXHR) {
            handleXMLHttpRequest(fullEndpoint, method);
        } else {
            handleFetch(fullEndpoint, method);
        }

        // Reset and hide the form
        document.getElementById('errorForm').reset();
        errorModal.hide();
    });

    // Handle SOAP Form Submission
    document.getElementById('soapForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const soapAction = document.getElementById('soap-action').value;

        if (!soapAction) {
            alert('Please select a SOAP Action.');
            return;
        }

        const { endpoint, method, isXHR } = soapModal.requestInfo;

        // Construct SOAP XML based on the selected action
        let soapBody = '';

        switch (soapAction) {
            case 'GetData':
                soapBody = `
                    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                            <GetDataRequest xmlns="http://example.com/soap">
                                <!-- Optional parameters can be added here -->
                            </GetDataRequest>
                        </soap:Body>
                    </soap:Envelope>
                `;
                break;
            case 'GetUser':
                soapBody = `
                    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                            <GetUserRequest xmlns="http://example.com/soap">
                                <!-- Optional parameters can be added here -->
                            </GetUserRequest>
                        </soap:Body>
                    </soap:Envelope>
                `;
                break;
            default:
                alert('Unsupported SOAP Action.');
                return;
        }

        const headers = {
            'Content-Type': 'text/xml',
            'SOAPAction': soapAction
        };

        if (isXHR) {
            handleXMLHttpRequest(endpoint, method, {
                headers: headers,
                body: soapBody
            });
        } else {
            handleFetch(endpoint, method, {
                method: method,
                headers: headers,
                body: soapBody
            });
        }

        // Reset and hide the form
        document.getElementById('soapForm').reset();
        soapModal.hide();
    });
});
