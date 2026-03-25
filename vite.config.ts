import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {

    proxy: {
      '/api': {
        target: 'https://taxyaar-backend.test', // Your Laravel backend URL
        changeOrigin: true, // Ensures the host header is rewritten to the target
        secure: false, // For local HTTP servers (set to true for HTTPS in production)
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: removes /api prefix if needed
      },
    },
  },

  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [ 
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
