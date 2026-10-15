import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      // Allow the dev server to serve images from the sibling `Images/` folder
      // located at the project root (outside the `frontend/` Vite root).
      allow: ['..'],
    },
  },
})
