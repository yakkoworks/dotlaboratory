
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { navigation } from './config';

export type NavigationItem = {
	label: string;
	href?: string;
	children?: NavigationItem[];
};

type Doc = CollectionEntry<'docs'>;

// ドキュメントのURLを生成
function getDocHref(doc: Doc): string {
	const path = doc.id
	.replace(/^\/+|\/+$/g, '')
	.replace(/\/index$/, '');
	
	return path ? `/${path}/` : '/';
}

export async function resolveNavigation(): Promise<NavigationItem[]> {
	const docs = await getCollection('docs');
	
	// 指定ディレクトリの記事一覧を取得
	function getArticles(directory: string): NavigationItem[] {
		return docs
		.filter(doc =>
			doc.id.startsWith(`${directory}/`) &&
			doc.id !== `${directory}/index` &&
			doc.data.sidebar?.hidden !== true
		)
		.sort((a, b) => {
			const orderA = a.data.sidebar?.order ?? Infinity;
			const orderB = b.data.sidebar?.order ?? Infinity;
			
			return (
				orderA - orderB ||
				a.id.localeCompare(b.id)
			);
		})
		.map(doc => ({
			label: doc.data.sidebar?.label ?? doc.data.title,
			href: getDocHref(doc),
		}));
	}
	
	// 共通設定からナビゲーションを構築
	return navigation.map(section => {
		if (!('children' in section)) {
			return {
				label: section.label,
				href: section.href,
			};
		}
		
		return {
			label: section.label,
			href: section.href,
			children: section.children.map(item => {
				// ディレクトリの場合
				if ('directory' in item) {
					return {
						label: item.label,
						href: item.href,
						children: getArticles(item.directory),
					};
				}								
				// 単独ドキュメントの場合
				const doc = docs.find(
					doc => doc.id === item.slug
				);
				
				return {
					label: item.label,
					href: doc
					? getDocHref(doc)
					: `/${item.slug}/`,
				};
			}),
		};
	});
}
