// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tales of Pirates - Modding',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'Modding',
					autogenerate: { directory: 'modding' },
				},
				{
					label: 'Community',
					autogenerate: { directory: 'references' },
				},
			],
		}),
	],
	server: {
		port: 3000,
	},
});
