#!/bin/bash

# Setup script for Kirk Pathumanun Portfolio

echo "Setting up Kirk Pathumanun Portfolio..."

# Create necessary directories
echo "Creating directories..."
mkdir -p public/images

# Copy image files to public/images
echo "Copying image files..."
cp *.png public/images/ 2>/dev/null || true

# Install dependencies
echo "Installing dependencies..."
npm install

echo ""
echo "Setup complete!"
echo ""
echo "Available commands:"
echo "  npm run dev                    - Start development server"
echo "  npm run build                  - Build for production"
echo "  docker-compose up kirk-portfolio-dev    - Start with Docker (dev mode)"
echo "  docker-compose --profile production up kirk-portfolio - Start with Docker (production mode)"
echo ""
echo "Site will be deployed at: https://kirk.edknovate.com"

