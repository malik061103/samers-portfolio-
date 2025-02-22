import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-portfolio",
  plugins: [react()],
  server: {
    port: 3003,
    open: true,
  },
});
