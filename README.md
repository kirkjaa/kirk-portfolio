# Kirk Pathumanun - Portfolio Website

Professional portfolio website showcasing 25 years of venture building experience.

## 🚀 Quick Start with Docker

### Development Mode (with hot reload)
```bash
docker-compose up kirk-portfolio-dev
```
The site will be available at `http://localhost:5173`

### Production Mode
```bash
docker-compose --profile production up kirk-portfolio
```
The built site will be served at `http://localhost:5173`

## 📦 Local Development (without Docker)

### Prerequisites
- Node.js 20 or higher
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🐳 Docker Commands

### Build and start development container
```bash
docker-compose up -d kirk-portfolio-dev
```

### Build and start production container
```bash
docker-compose --profile production up -d kirk-portfolio
```

### Stop containers
```bash
docker-compose down
```

### Rebuild containers
```bash
docker-compose build --no-cache
```

### View logs
```bash
docker-compose logs -f kirk-portfolio-dev
# or for production
docker-compose logs -f kirk-portfolio
```

## 🌐 Deployment

The site is deployed at: **https://kirk.edknovate.com**

### Nginx Reverse Proxy Manager Setup
When using Nginx Reverse Proxy Manager:
1. Point your proxy to `http://kirk-portfolio:5173` (production) or `http://kirk-portfolio-dev:5173` (development)
2. Enable SSL/TLS with Let's Encrypt
3. Configure domain: `kirk.edknovate.com`

## 📁 Project Structure
```
.
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts (Theme)
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/
│   └── images/        # Static images
├── Dockerfile         # Production container
├── Dockerfile.dev     # Development container
├── docker-compose.yml # Docker orchestration
└── package.json       # Dependencies
```

## 🛠 Technology Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Wouter (routing)
- Lucide React (icons)
- Docker

## 📝 License
© 2025 Kirk Pathumanun. All rights reserved.

