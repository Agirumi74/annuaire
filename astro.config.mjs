import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import node from '@astrojs/node';

export default defineConfig({
	integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
});