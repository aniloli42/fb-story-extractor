import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: 'G-526TQ3DS61'
      }
    })
  ]
})
