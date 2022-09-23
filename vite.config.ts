import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remoteApp: 'https://vite-remote-host-app-1-cobx-fixbte7gb-vk-communitylab.vercel.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: "esnext"
  }
})
