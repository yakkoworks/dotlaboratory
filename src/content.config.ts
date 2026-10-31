import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const docs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema({
		extend: ({ image }) => {
			return z.object({
				cover: image().optional(),
				note: z.string().optional(),
			});
		},
	}),
});

const characters = defineCollection({
	loader: glob({
		base: "./src/content/characters",
		pattern: '**/*.{md,mdx}',
	}),
	
	schema: ({ image }) =>
		z.object({
		name: z.string(),
		sname: z.string().optional(),
		em: z.string(),
		cpj: z.string(),
		cpe: z.string(),
		themeColor: z.string().optional(),
		portrait: image(),
		thumbnail: image(),
		sign: image(),
		team: z.number().int().nonnegative(),
		order: z.number().int().nonnegative(),
		description: z.string().optional(),
		portraitScale: z.number().min(0.5).max(1.6).default(1),
		portraitX: z.number().default(0),
		portraitY: z.number().default(0),
		
	}),
});
export const collections = {
	docs,
	characters,
};
