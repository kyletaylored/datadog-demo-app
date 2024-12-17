# Use official Node.js image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and yarn.lock first to leverage Docker cache
COPY ./backend/package.json ./backend/yarn.lock ./backend/

# Install dependencies
RUN cd backend && yarn install

# Copy the rest of the backend files
COPY ./backend ./backend

# Set working directory to the backend
WORKDIR /usr/src/app/backend

# Expose port
EXPOSE 3000

# Start the server with Datadog tracer initialized
CMD ["node", "server.js"]
