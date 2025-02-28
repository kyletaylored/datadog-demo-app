# Use the official Python image from the Docker Hub as a base
FROM python:3.11-slim

# Accept build arguments
ARG GIT_COMMIT_SHA
ARG GIT_REPOSITORY_URL

# Set as environment variables
ENV DD_GIT_COMMIT_SHA=$GIT_COMMIT_SHA
ENV DD_GIT_REPOSITORY_URL=$GIT_REPOSITORY_URL

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir fastapi uvicorn ddtrace

# Expose port 8001 to the outside world
EXPOSE 8081

# Run the application
CMD ["ddtrace-run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8081"]