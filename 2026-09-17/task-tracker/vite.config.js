import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Rakenduste-programmeerimine/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/testSetup.js',
  },
})