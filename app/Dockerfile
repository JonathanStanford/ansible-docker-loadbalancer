# Use a specific and lightweight base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependencies first to leverage Docker layer caching
COPY package*.json ./

# Clean install of production dependencies only
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# DevSecOps: Run as non-root user for security
USER node

# Expose port
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]