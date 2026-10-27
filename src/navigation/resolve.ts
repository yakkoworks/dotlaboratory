import { getCollection } from 'astro:content';
const docs = await getCollection('docs');
// console.dir(docs, { depth: null });
const items = docs.forEach((item)=>{
	console.log(`${item.data.title}／${item.id}`)
})

export async function resolveNavigation() {
	return {
		label: '🪐 StarMap',
		href: '/starmap/',
		children: [
			{
				label: '🧊 3D Modeling',
				children: [
					{
						label: 'Blenderの使い方',
						href: '/starmap/3dmodeling/blender/',
					},
				],
			},
		],}
	}