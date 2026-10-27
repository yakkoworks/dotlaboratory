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
				collection: 'docs',
				directory: 'starmap/3dmodeling',
			},
			{
				label: '💻 Development',
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
	// {
	// 	label: 'やっこキャラズ',
	// 	href: '/characters/',
	// },
	// {
	// 	label: '世界徒然草',
	// 	href: '/diary/',
	// },
] as const;
