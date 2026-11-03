
export const navigation = [
    // {
    //     label: 'dotlaboratory',
    //     href: '/',
    // },
    {
        label: '👥 やっこキャラズ',
        href: '/characters',
        children: [
            {
                label: 'TwinkleSparkle',
                collection: 'characters',
                href: 'characters#team1',
            },
            {
                label: 'DayDreamers',
                collection: 'characters',
                href: 'characters#team2',
            },
            {
                label: 'RadiantDaze',
                collection: 'characters',
                href: 'characters#team3',
            },
        ]
    },
    {
        label: '🪐 YakkoWorks StarMap',
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
                href: 'starmap/annotations',
            },
        ],
    },
] as const;
