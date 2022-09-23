import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom'],
    }),
  ]
})
