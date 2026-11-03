
export const navigation = [
    {
        label: '👥 やっこキャラズ',
        href: '/characters/',
        children: [
            {
                label: 'TwinkleSparkle',
                href: 'characters#team1',
                icon: '/characters/team1.svg',
            },
            {
                label: 'DayDreamers',
                href: 'characters#team2',
                icon: '/characters/team2.svg',
            },
            {
                label: 'RadiantDaze',
                href: 'characters#team3',
                icon: '/characters/team3.svg',
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
