// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://dotlaboratory.xyz',
    // favicon: '/favicon.ico',
    integrations: [starlight({
        title: 'YakkoWorks - StarMap',
        favicon: '/favicon.ico',
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        pagination: false,
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel:  6,
        },
        components: {
            Head: './src/components/Head.astro',
            PageTitle: './src/components/PageTitle.astro',
            
        },
        logo: {
            src: './src/assets/dotlaboratory.png',
            replacesTitle: true,
        },
        customCss: [
            './src/styles/custom.css',
        ],
        
        sidebar: [
            {
                label: '🪐 StarMap',
                collapsed: false,
                items: [
                    {
                        label: '🧊 3D Modeling',
                        collapsed: true,
                        items: [
                            {
                                autogenerate: {
                                    directory: 'starmap/3dmodeling',
                                },
                            },
                        ],
                    },
                    {
                        label: '💻 Development',
                        collapsed: true,
                        items: [
                            {
                                autogenerate: {
                                    directory: 'starmap/development',
                                },
                            },
                        ],
                    },
                ],
            },
            {
                label: '📝 Annotations',
                slug: 'starmap/annotations',
            },
        ],
    })],
});