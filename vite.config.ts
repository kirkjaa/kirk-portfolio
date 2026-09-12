import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/** Scanner probes (/ .aws / .env / .git / /proc) must 404, not become Vite transform errors. */
function blockScannerPaths(): Plugin {
  const blocked = [
    '.aws',
    '.env',
    '.git',
    '/proc/',
    'phpinfo',
    'Dockerfile',
    'docker-compose',
    'wp-admin',
    'wp-login',
  ]
  return {
    name: 'block-scanner-paths',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (blocked.some((p) => url.includes(p))) {
          res.statusCode = 404
          res.end('Not found')
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [blockScannerPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
    fs: {
      strict: true,
      allow: [path.resolve(__dirname)],
      deny: ['.env', '.env.*', '.git', '.aws', '**/.aws/**', '**/.git/**'],
    },
    watch: {
      usePolling: true,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
})
