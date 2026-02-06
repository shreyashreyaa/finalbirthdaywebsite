import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/finalbirthdaywebsite/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/app',
    },
  },
})
