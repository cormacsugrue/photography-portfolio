import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://cormacsugrue.com',
	// base: 'photography-portfolio',
	base: 'p/',
	vite: {
		plugins: [tailwindcss()],
	},
});
