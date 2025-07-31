import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Prevent auto-injection of favicons and other assets
    rollupOptions: {
      output: {
        // Ensure no favicon files are included in build
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.includes('favicon')) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  // Disable auto-injection of favicon and other default assets
  publicDir: 'public',
  // Ensure no default favicon is served
  server: {
    fs: {
      strict: false
    }
  }
})
