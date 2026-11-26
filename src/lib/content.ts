import {getCollection, getEntry} from 'astro:content';
import type {CollectionEntry} from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;
export type BlogEntry = CollectionEntry<'blog'>;
export type ContentEntry = PageEntry | BlogEntry;

let publishedEntriesPromise: Promise<BlogEntry[]> | undefined;

export async function pageEntries(): Promise<PageEntry[]> {
	return getCollection('pages');
}

export async function requiredPage(id: string): Promise<PageEntry> {
	const entry = await getEntry('pages', id);
	if (!entry) throw new Error(`Page entry "${id}" was not found`);
	return entry;
}

export async function publishedBlogEntries(): Promise<BlogEntry[]> {
	publishedEntriesPromise ??= getCollection('blog').then(entries =>
		entries.filter(entry => !entry.data.draft),
	);
	return publishedEntriesPromise;
}

export async function publishedBlogArticles(): Promise<BlogEntry[]> {
	return sortNewest(
		(await publishedBlogEntries()).filter(
			entry => entry.data.title && entry.data.date,
		),
	);
}

export async function blogTaxonomyValues(
	type: 'category' | 'tag',
): Promise<string[]> {
	const field = type === 'category' ? 'categories' : 'tags';
	return [
		...new Set(
			(await publishedBlogEntries()).flatMap(entry => entry.data[field]),
		),
	].sort((a, b) => a.localeCompare(b));
}

export async function blogEntriesByTaxonomy(
	type: 'category' | 'tag',
	value: string,
): Promise<BlogEntry[]> {
	const field = type === 'category' ? 'categories' : 'tags';
	return sortNewest(
		(await publishedBlogEntries()).filter(
			entry => entry.data.title && entry.data[field].includes(value),
		),
	);
}

export function pagePath(entry: ContentEntry): string {
	if (entry.collection === 'blog') {
		const category = entry.data.categories[0] ?? 'random';
		return `/blog/${taxonomySlug(category)}/${entry.data.slug ?? entry.id}/`;
	}
	const path = entry.id.replace(/\.(?:md|mdx)$/, '').replace(/(^|\/)index$/, '$1');
	return `/${path}`.replace(/\/+$/, '') + '/';
}

export function sectionName(entry: ContentEntry): string {
	if (entry.collection === 'blog') return taxonomySlug(entry.data.categories[0] ?? '');
	return entry.id.split('/')[1] ?? '';
}

export function isArticle(entry: ContentEntry): boolean {
	return Boolean(entry.data.date && entry.data.title);
}

export function sortNewest<T extends ContentEntry>(entries: T[]): T[] {
	return [...entries].sort(
		(a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0),
	);
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-NZ', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export function articleDescription(entry: ContentEntry): string {
	if (entry.data.description) return entry.data.description;

	return (entry.body ?? '')
		.split(/\s*(?:<!-- more -->|\{\/\* more \*\/\})\s*/)[0]
		.replace(/<[^>]*>/g, '')
		.replace(/!\[[^\]]*]\([^)]*\)/g, '')
		.replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
		.replace(/[`#>*_]/g, '')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, 180);
}

export function taxonomySlug(value: string): string {
	return value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}
