import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'CS',
	favicon: 'favicon.ico',
	owner: 'Cormac Sugrue',
	profileImage: 'cormac-profile.jpg',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/cormacsugrue/photography-portfolio',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/echidnamusica/',
			icon: Instagram,
		} as SocialLink,
	],
};
