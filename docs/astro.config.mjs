// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://codetransengine.github.io',
    output: 'static',
    integrations: [starlight({
        title: '🛤️ CodeTransEngine',
        customCss: [
            './src/styles/global.css',
        ],
        social: {
            github: 'https://github.com/CodeTransEngine/CodeTransEngine',
        },
        sidebar: [
            {
                label: 'Guides',
				autogenerate: { directory: 'guides' },
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), tailwind()],
});