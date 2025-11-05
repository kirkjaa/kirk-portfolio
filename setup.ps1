# Setup script for Kirk Pathumanun Portfolio

Write-Host "Setting up Kirk Pathumanun Portfolio..." -ForegroundColor Green

# Create necessary directories
Write-Host "Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "public/images" | Out-Null

# Copy image files to public/images
Write-Host "Copying image files..." -ForegroundColor Yellow
Copy-Item -Path "*.png" -Destination "public/images/" -Force -ErrorAction SilentlyContinue

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "`nSetup complete!" -ForegroundColor Green
Write-Host "`nAvailable commands:" -ForegroundColor Cyan
Write-Host "  npm run dev                    - Start development server"
Write-Host "  npm run build                  - Build for production"
Write-Host "  docker-compose up kirk-portfolio-dev    - Start with Docker (dev mode)"
Write-Host "  docker-compose --profile production up kirk-portfolio - Start with Docker (production mode)"
Write-Host "`nSite will be deployed at: https://kirk.edknovate.com" -ForegroundColor Magenta

