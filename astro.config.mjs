import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/3690',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
