# Production Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (includes devDependencies for build)
RUN npm install

# Install serve to serve static files
RUN npm install -g serve

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 5173
EXPOSE 5173

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "5173"]

