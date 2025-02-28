# Use official Node.js image
FROM node:20

# Accept build arguments
ARG GIT_COMMIT_SHA
ARG GIT_REPOSITORY_URL

# Set as environment variables
ENV DD_GIT_COMMIT_SHA=$GIT_COMMIT_SHA
ENV DD_GIT_REPOSITORY_URL=$GIT_REPOSITORY_URL

# Set the working directory
WORKDIR /app

# Copy only package.json and yarn.lock first to leverage Docker cache
COPY ./package.json ./yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the backend files
COPY . .

# Set working directory to the backend
WORKDIR /app

# Expose port
EXPOSE 3000
EXPOSE 8125
EXPOSE 8126

# Start the server with Datadog tracer initialized
CMD ["node", "server.js"]
