import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) => {
				return z.object({
					// ローカルの画像へと解決されるフィールドを追加します。
					cover: image().optional(),
				});
			},
		}),
	}),
};