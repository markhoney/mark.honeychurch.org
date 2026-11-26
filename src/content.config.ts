import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';

const stringList = z
	.union([z.string(), z.array(z.string())])
	.optional()
	.transform(value => value ? (Array.isArray(value) ? value : [value]) : []);

const sharedSchema = z
	.object({
		title: z.string().optional(),
		description: z.string().optional(),
		date: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		slug: z.union([z.string(), z.number()]).optional(),
		categories: stringList,
		tags: stringList,
	})
	.loose();

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/blog',
		generateId: ({entry}) => entry.replaceAll('\\', '/').replace(/\.(?:md|mdx)$/, ''),
	}),
	schema: sharedSchema,
});

const pages = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/pages',
		generateId: ({entry}) => entry.replaceAll('\\', '/').replace(/\.(?:md|mdx)$/, ''),
	}),
	schema: sharedSchema,
});

export const collections = {blog, pages};
