
export const navigation = [
    {
        label: 'dotlaboratory',
        href: '/',
    },
    {
        label: '🪐 StarMap',
        href: '/starmap/',
        children: [
            {
                label: '🧊 3D Modeling',
                href: '/starmap/3dmodeling/',
                collection: 'docs',
                directory: 'starmap/3dmodeling',
            },
            {
                label: '💻 Development',
                href: '/starmap/development/',
                collection: 'docs',
                directory: 'starmap/development',
            },
            {
                label: '📝 Annotations',
                collection: 'docs',
                slug: 'starmap/annotations',
            },
        ],
    },
] as const;
