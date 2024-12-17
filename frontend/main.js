// Global object to store response clones
window.responseClones = {};

// Initialize Datadog RUM
window.DD_RUM && window.DD_RUM.init({
    clientToken: 'pub067eb57994325a05bf401b11a686e8e3',
    applicationId: '4a79b017-ea18-4839-9153-ce2b058b4db6',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'datadoghq.com',
    service: 'datadog-demo-app',
    env: 'local',
    // Specify a version number to identify the deployed version of your application in Datadog
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
    allowedTracingUrls: [
        (url) => url.includes('localhost')
    ],
    beforeSend: async (event, context) => {
        if (event.type === 'resource' && event.resource.type === 'fetch') {
            try {
                // Retrieve the saved response clone
                const url = event.resource.url.replace(window.location.origin, '');
                const responseClone = window.responseClones[url];

                if (responseClone) {
                    // Parse response headers and body
                    event.context.responseHeaders = Object.fromEntries(responseClone.headers);
                    event.context.responseBody = await responseClone.json();
                } else {
                    console.warn(`No response clone found for: ${url}`);
                }
            } catch (error) {
                console.warn("Error parsing response in beforeSend:", error);
            }
            console.log({ event });
        }
        return true;
    },
});

const parseResponseBody = async (response) => {
    console.log(response);

    if (!response) {
        throw new Error("Invalid response");
    }

    try {
        // Check if the response body is already used
        if (response.bodyUsed) {
            console.warn("Response body is already used. Cannot parse again.");
            return null; // Prevent further processing
        }

        // Clone the response to ensure its body can be read
        const clonedResponse = response.clone();

        // Parse JSON from the cloned Response
        const json = await clonedResponse.json();
        return json;
    } catch (error) {
        console.error("Error parsing response body:", error);
        return null;
    }
};

// Fetch data from the backend API

const fetchAndClone = async (url, options) => {
    const response = await fetch(url, options);
    const clone = response.clone(); // Clone the response early
    return { response, clone };
};

const fetchData = (endpoint) => {
    fetch(`http://localhost:3000${endpoint}`)
        .then(response => {
            // Save a clone of the response to the global map
            window.responseClones[endpoint] = response.clone();

            // Process the original response
            return response.json();
        })
        .then(data => {
            document.getElementById('response').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error(`Error calling ${endpoint}:`, error));
};



document.getElementById('fetchData').addEventListener('click', () => fetchData('/api/data'));
document.getElementById('fetchUsers').addEventListener('click', () => fetchData('/api/users'));
document.getElementById('fetchStatus').addEventListener('click', () => fetchData('/api/status'));