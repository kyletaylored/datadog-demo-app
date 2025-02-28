// server.js

// Initialize datadog tracer before importing other modules
const tracer = require('dd-trace').init({
    logInjection: true,
    hostname: 'datadog-agent',
    port: 8126
});

const express = require('express');
const cors = require('cors');
const http = require('http');
const axios = require('axios');
const { faker } = require('@faker-js/faker');
const xmlparser = require('express-xml-bodyparser');
const { promisify } = require('util');

// Constants
const port = process.env.PORT || 3000;
const FASTAPI_BASE_URL = 'http://demo-fastapi:8001';
const ALLOWED_ERROR_CODES = [400, 401, 403, 404, 500, 502, 503, 504];

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(xmlparser());
app.use('/pages', express.static('pages'));

// ===== API Clients =====
const apiClients = {
    // Axios client
    axios: async (sleep) => {
        try {
            const response = await axios.get(`${FASTAPI_BASE_URL}/?sleep=${sleep}`);
            return { data: response.data, error: null };
        } catch (error) {
            return { data: null, error: error.message };
        }
    },

    // Native HTTP client
    http: (sleep) => {
        return new Promise((resolve) => {
            const options = {
                hostname: 'demo-fastapi',
                port: 8001,
                path: `/?sleep=${sleep}`,
                method: 'GET'
            };

            const request = http.request(options, (response) => {
                let data = '';

                response.on('data', (chunk) => data += chunk);

                response.on('end', () => {
                    try {
                        const parsedData = JSON.parse(data);
                        resolve({ data: parsedData, error: null });
                    } catch (error) {
                        resolve({ data: null, error: 'Failed to parse response' });
                    }
                });
            });

            request.on('error', (error) => {
                resolve({ data: null, error: error.message });
            });

            request.end();
        });
    },

    // Fetch client (Node 20)
    fetch: async (sleep) => {
        try {
            const response = await fetch(`${FASTAPI_BASE_URL}/?sleep=${sleep}`);
            const data = await response.json();
            return { data, error: null };
        } catch (error) {
            return { data: null, error: error.message };
        }
    }
};

// ===== SOAP Handlers =====
const soapHandlers = {
    // Handler for GetData SOAP Action
    getData: (req, res) => {
        const responseXML = `
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <GetDataResponse xmlns="http://example.com/soap">
                    <Message>Here is your data!</Message>
                    <Timestamp>${new Date().toISOString()}</Timestamp>
                </GetDataResponse>
            </soap:Body>
        </soap:Envelope>
    `;
        res.set('Content-Type', 'text/xml');
        res.send(responseXML);
    },

    // Handler for GetUser SOAP Action
    getUser: (req, res) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            gender: faker.person.gender(),
            image: faker.internet.avatar()
        };

        const responseXML = `
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <GetUserResponse xmlns="http://example.com/soap">
                    <User>
                        <Name>${user.name}</Name>
                        <Email>${user.email}</Email>
                        <Gender>${user.gender}</Gender>
                        <Image>${user.image}</Image>
                    </User>
                </GetUserResponse>
            </soap:Body>
        </soap:Envelope>
    `;
        res.set('Content-Type', 'text/xml');
        res.send(responseXML);
    },

    // Default error handler for unknown SOAP actions
    error: (req, res) => {
        res.status(500).send(`
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <soap:Fault>
                    <faultcode>soap:Server</faultcode>
                    <faultstring>Unknown SOAP Action</faultstring>
                </soap:Fault>
            </soap:Body>
        </soap:Envelope>
    `);
    }
};

// ===== Route Handlers =====

// Root endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Welcome to the API!', timestamp: new Date() });
});

// Auth endpoint
app.post('/api/token', (req, res) => {
    const accessToken = faker.string.uuid();
    const expiresIn = faker.number.int({ min: 3600, max: 7200 });

    res.json({ accessToken, expiresIn });
});

// Users endpoint
app.get('/api/users', (req, res) => {
    const numUsers = faker.number.int({ min: 1, max: 6 });
    const users = Array.from({ length: numUsers }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email()
    }));

    res.json(users);
});

// Status endpoint
app.get('/api/status', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});

// FastAPI proxy endpoint with multiple HTTP client options
app.get('/api/fast', async (req, res) => {
    const sleep = req.query.sleep || 0;
    const requestType = req.query.type || 'http';

    // Select the appropriate client handler
    const clientHandler = apiClients[requestType] || apiClients.http;
    const result = await clientHandler(sleep);

    if (result.error) {
        return res.status(500).json({ error: result.error });
    }

    res.json(result.data);
});

// Error simulation endpoint
app.get('/api/error', (req, res) => {
    const statusCode = ALLOWED_ERROR_CODES.includes(parseInt(req.query.status))
        ? parseInt(req.query.status)
        : 400;

    const message = req.query.message || 'An error occurred';
    const delay = parseInt(req.query.delay) || 0;

    setTimeout(() => {
        res.status(statusCode).json({
            error: {
                code: statusCode,
                message: statusCode === 400 && !req.query.message ? 'Invalid status code requested' : message
            }
        });
    }, delay);
});

// SOAP API endpoint
app.post('/api/soap', (req, res) => {
    // Validate SOAP envelope
    if (!req.body || !req.body.toString().startsWith('<soap:Envelope')) {
        return res.status(400).send(`
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <soap:Fault>
            <faultcode>soap:Client</faultcode>
            <faultstring>Invalid SOAP Envelope</faultstring>
          </soap:Fault>
        </soap:Body>
      </soap:Envelope>
    `);
    }

    // Extract and normalize the SOAP action
    const soapAction = (req.headers['soapaction'] || '')
        .trim()
        .toLowerCase()
        .replace(/"/g, '');

    // Route to the appropriate handler
    switch (soapAction) {
        case 'getdata':
            soapHandlers.getData(req, res);
            break;
        case 'getuser':
            soapHandlers.getUser(req, res);
            break;
        default:
            soapHandlers.error(req, res);
            break;
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});