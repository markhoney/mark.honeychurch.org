import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const stringList = z
	.union([z.string(), z.array(z.string())])
	.optional()
	.transform(value => value ? (Array.isArray(value) ? value : [value]) : []);

const pages = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './docs',
		generateId: ({entry}) =>
			entry.replaceAll('\\', '/').replace(/\.md$/, ''),
	}),
	schema: z
		.object({
			title: z.string().optional(),
			description: z.string().optional(),
			date: z.coerce.date().optional(),
			layout: z.string().optional(),
			slug: z.union([z.string(), z.number()]).optional(),
			categories: stringList,
			tags: stringList,
			sidebar: z.union([z.boolean(), z.string()]).optional(),
			sidebarDepth: z.number().optional(),
		})
		.passthrough(),
});

export const collections = {pages};
