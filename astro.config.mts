import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//sdfdf
export default defineConfig({
	site: 'https://www.cormacsugrue.com',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
