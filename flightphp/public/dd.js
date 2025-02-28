// Init Datadog RUM Interceptor
const DRI = window.DD_RUM_INTERCEPTOR.init({
    debug: true
});

// Init Datadog Logs
window.DD_LOGS && window.DD_LOGS.init({
    clientToken: 'pub067eb57994325a05bf401b11a686e8e3',
    site: 'datadoghq.com',
    service: 'datadog-demo-app',
    env: 'local',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
});

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

    beforeSend: (event, context) => {
        // collect a RUM resource's response headers
        if (event.type === 'resource' && ['xhr', 'fetch'].includes(event.resource.type)) {
            console.log("beforeSend", { event, context });
            const data = DRI.getPayload({ event, context });
            if (data) {
                // Add to event context
                event.context.payload = data;

                // Optionally add to logs.
                window.DD_LOGS.logger.log(data);
            }
        }
        return true;
    },
});