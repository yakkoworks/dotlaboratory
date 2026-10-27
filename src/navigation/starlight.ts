
import { navigation } from './config';

const starMap = navigation.find(
    item => item.href === '/starmap/'
);

if (!starMap || !('children' in starMap)) {
    throw new Error('StarMap navigation not found');
}

const starlightNav = starMap.children.map(item => ({
    label: item.label,
    ...('slug' in item
        ? { slug: item.slug }
        : {
            collapsed: true,
            items: [
                {
                    autogenerate: {
                        directory: item.directory,
                        collapsed: true,
                    },
                },
            ],
        }
    ),
}));

export const starlightSidebar = [
    {
        label: starMap.label,
        items: starlightNav,
    },
];
