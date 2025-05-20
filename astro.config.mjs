// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
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
		head: [
			{
				tag: 'script',
				attrs: {
					src: 'https://cloud.umami.is/script.js',
					defer: true,
					'data-website-id': '5a1298c6-9356-4646-9f9d-7a1404c61644',
					type: 'text/partytown',
				},
			}
		],
		}), partytown(),],
    server: {
        port: 3000,
    },
});