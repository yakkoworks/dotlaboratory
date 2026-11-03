
import { navigation } from './config';

const starMap = navigation.find(
    item => item.href === '/starmap/'
);

const characters = navigation.find(
    item => item.href === '/characters/'
);

if (!starMap || !('children' in starMap)) {
    throw new Error('StarMap navigation not found');
}


const starlightNav = starMap.children.map((item) => {
    // Starlightの個別ドキュメント
    if ('slug' in item) {
        return {
            label: item.label,
            slug: item.slug,
        };
    }

    // Starlightのディレクトリ
    if ('directory' in item) {
        return {
            label: item.label,
            collapsed: true,
            items: [
                {
                    autogenerate: {
                        directory: item.directory,
                        collapsed: true,
                    },
                },
            ],
        };
    }

    // 通常のURLリンク
    if ('href' in item) {
        return {
            label: item.label,
            link: item.href,
        };
    }

    throw new Error(`未対応のナビゲーション項目`);
});

const charactersNav =
    characters && 'children' in characters
        ? {
            label: characters.label,
            collapsed: false,
            items: characters.children.flatMap(item =>
                'href' in item
                    ? [{
                        label: item.label,
                        link: item.href,
                    }]
                    : []
            ),
        }
        : null;

export const starlightSidebar = [
    ...(charactersNav ? [charactersNav] : []),
    {
        label: starMap.label,
        items: starlightNav,
    },
];