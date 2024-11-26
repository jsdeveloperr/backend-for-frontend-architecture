import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Vite Config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
