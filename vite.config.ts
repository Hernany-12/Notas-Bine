import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // Aponta para o nome do seu repositório atual do GitHub
    base: '/Notas-Bine/', 
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'verdadeiro',
      watch: process.env.DISABLE_HMR === 'verdadeiro' ? null : {},
    },
  };
});
