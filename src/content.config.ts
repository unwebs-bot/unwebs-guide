import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		category: z.string().optional(),
		priority: z.string().optional(),
		last_verified: z.string().optional(),
		related_ids: z.array(z.union([z.number(), z.string()])).optional(),
		status: z.string().optional(),
	}),
});

export const collections = { guides };
