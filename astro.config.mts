import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://cormacsugrue.github.io',
	base: '/photography-portfolio/',
	vite: {
		plugins: [tailwindcss()],
	},
});
