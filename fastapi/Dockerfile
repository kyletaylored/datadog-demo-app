# Use the official Python image from the Docker Hub as a base
FROM python:3.11-slim

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