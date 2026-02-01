import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://cormacsugrue.com',
	// No base needed for custom domain at root
	vite: {
		plugins: [tailwindcss()],
	},
});
