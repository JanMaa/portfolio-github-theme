// vite.config.js
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/portfolio-github-theme/'
  }

  return config
})
