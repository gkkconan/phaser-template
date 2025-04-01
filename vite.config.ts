import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  server: {
    port: 5173,
    open: true,
  },
});