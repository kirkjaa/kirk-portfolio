# Deployment Guide - Kirk Pathumanun Portfolio

## 🌐 Deployment URL
**https://kirk.edknovate.com**

## 🐳 Docker Deployment

### Quick Start

#### Development Mode (with hot reload)
```bash
docker-compose up -d kirk-portfolio-dev
```
Access at: `http://localhost:5173`

#### Production Mode
```bash
docker-compose --profile production up -d kirk-portfolio
```
Access at: `http://localhost:5173`

### Container Management

#### View logs
```bash
# Development
docker-compose logs -f kirk-portfolio-dev

# Production
docker-compose --profile production logs -f kirk-portfolio
```

#### Stop containers
```bash
docker-compose down
```

#### Rebuild after changes
```bash
# Development
docker-compose build kirk-portfolio-dev
docker-compose up -d kirk-portfolio-dev

# Production
docker-compose --profile production build kirk-portfolio
docker-compose --profile production up -d kirk-portfolio
```

## 🔧 Nginx Reverse Proxy Manager Setup

Since you're using Nginx Reverse Proxy Manager, configure it as follows:

### Proxy Host Configuration

1. **Domain Names**: `kirk.edknovate.com`

2. **Scheme**: `http`

3. **Forward Hostname/IP**: 
   - If on same Docker network: `kirk-portfolio` (production) or `kirk-portfolio-dev` (development)
   - If separate servers: `[server-ip]`

4. **Forward Port**: `5173`

5. **SSL Certificate**:
   - Enable "Force SSL"
   - Request a new Let's Encrypt certificate for `kirk.edknovate.com`

6. **Advanced Settings** (optional):
```nginx
# Add these headers for better security
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

## 🔄 Deployment Workflow

### Initial Deployment
```bash
# 1. Clone/copy the repository to your server
cd /path/to/project

# 2. Run setup (optional, copies images)
# PowerShell (Windows)
.\setup.ps1
# or Bash (Linux/Mac)
chmod +x setup.sh && ./setup.sh

# 3. Start production container
docker-compose --profile production up -d kirk-portfolio

# 4. Configure Nginx Reverse Proxy Manager
# Point to kirk-portfolio:5173 with SSL enabled

# 5. Verify deployment
curl https://kirk.edknovate.com
```

### Updates/Redeployment
```bash
# 1. Pull latest changes
git pull

# 2. Rebuild and restart
docker-compose --profile production down
docker-compose --profile production build --no-cache kirk-portfolio
docker-compose --profile production up -d kirk-portfolio

# 3. Verify
docker-compose logs kirk-portfolio
```

## 📦 Image Files

All image files should be in `public/images/` directory:
- `Questlogo.png`
- `pasted_file_*.png` (various event and profile photos)

Run the setup script to copy images from the root directory:
```bash
# PowerShell
.\setup.ps1

# Bash
./setup.sh
```

## 🔍 Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs kirk-portfolio

# Rebuild from scratch
docker-compose build --no-cache
```

### Port 5173 already in use
```bash
# Find process using the port
# Windows
netstat -ano | findstr :5173
# Linux/Mac
lsof -i :5173

# Change port in docker-compose.yml if needed
# Example: "8080:5173" to use port 8080 instead
```

### Images not loading
```bash
# Verify images are in public/images/
ls public/images/

# Copy images manually if needed
cp *.png public/images/
```

### Changes not reflecting
```bash
# For development (hot reload should work)
docker-compose restart kirk-portfolio-dev

# For production (requires rebuild)
docker-compose --profile production down
docker-compose --profile production build kirk-portfolio
docker-compose --profile production up -d kirk-portfolio
```

## 🚀 Performance Tips

1. **Use production mode** for deployment (it's optimized and minified)
2. **Enable caching** in Nginx Reverse Proxy Manager for static assets
3. **Enable Gzip compression** in Nginx for faster loading
4. **Monitor container resources**:
```bash
docker stats kirk-portfolio
```

## 📊 Monitoring

### Health Check
```bash
# Check if container is running
docker ps | grep kirk-portfolio

# Check application response
curl -I http://localhost:5173

# View resource usage
docker stats kirk-portfolio
```

### Access Logs
```bash
# Follow logs in real-time
docker-compose logs -f kirk-portfolio

# View last 100 lines
docker-compose logs --tail=100 kirk-portfolio
```

## 🔐 Security Checklist

- ✅ SSL/TLS enabled via Nginx Reverse Proxy Manager
- ✅ Force HTTPS redirect
- ✅ Security headers configured
- ✅ Container runs as non-root user (Node.js alpine)
- ✅ Only necessary port exposed (5173)
- ✅ No sensitive data in environment variables
- ✅ Regular updates and rebuilds

## 📝 Notes

- The site uses **Vite** for building and serving
- In production, the built static files are served by `serve` package
- Container automatically restarts unless stopped (`restart: unless-stopped`)
- Development mode supports hot module replacement (HMR)
- All changes to the deployment URL have been updated to `https://kirk.edknovate.com`

