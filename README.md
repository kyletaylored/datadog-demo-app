# Datadog Distributed Tracing Demo

This project demonstrates distributed tracing across multiple services using Datadog APM. It includes Express.js, FastAPI, and FlightPHP applications in a Docker Compose environment with a Datadog agent for monitoring.

## Project Structure

```
.
├── docker-compose.yml
├── expressjs
│   ├── Dockerfile
│   ├── server.js
│   └── ...
├── fastapi
│   ├── Dockerfile
│   └── main.py
└── flightphp
    ├── Dockerfile
    ├── composer.json
    ├── public           # Contains React client
    └── ...
```

## Services

- **Express.js**: Node.js web service running on port 3001
- **FastAPI**: Python web API running on port 8001
- **FlightPHP**: PHP web application with React client running on port 8080
- **Datadog Agent**: For collecting metrics, traces, and logs

## Prerequisites

- Docker and Docker Compose
- Git
- Datadog account with API key
- A `.env` file with the following variables:
  ```
  DD_API_KEY=your_datadog_api_key
  DD_SITE=datadoghq.com
  DD_ENV=dev
  DD_SERVICE=datadog-demo
  DD_VERSION=0.1
  DD_TRACE_DEBUG=true
  DD_TRACE_ENABLED=true
  NODE_ENV=development
  SERVER_NAME=localhost
  PYTHONDONTWRITEBYTECODE=1
  PYTHONUNBUFFERED=1
  DD_PROFILING_ENABLED=true
  ```

## Running the Application

1. Build the containers with git information for Datadog source code integration:

```bash
docker compose build --build-arg GIT_COMMIT_SHA=$(git rev-parse HEAD) --build-arg GIT_REPOSITORY_URL=$(git config --get remote.origin.url)
```

2. Start all services:

```bash
docker compose up
```

To run in detached mode:

```bash
docker compose up -d
```

3. Access the applications:

   - Express.js API: http://localhost:3001
   - FastAPI: http://localhost:8001
   - FlightPHP with React client: http://localhost:8080

4. Stop the application:

```bash
docker compose down
```

## Datadog Integration

This project includes:

- Distributed tracing across all services
- Source code integration via git metadata
- Container metrics and logs collection
- Health checks for all services

The Datadog agent collects data from all services and sends it to your Datadog account for visualization and analysis.

## Development

Each service is configured to restart automatically unless stopped. For application changes in PHP, the code is mounted as a volume so changes will be reflected immediately. For other services, you'll need to rebuild the containers.

When modifying the application, make sure to rebuild with the git information to maintain Datadog source code integration.
