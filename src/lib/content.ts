import type {CollectionEntry} from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;
export type BlogEntry = CollectionEntry<'blog'>;
export type ContentEntry = PageEntry | BlogEntry;

export function pagePath(entry: ContentEntry): string {
	if (entry.collection === 'blog') {
		const category = entry.data.categories[0] ?? 'random';
		return `/blog/${taxonomySlug(category)}/${entry.data.slug ?? entry.id}/`;
	}
	if (entry.data.permalink) return entry.data.permalink;
	const path = entry.id.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1');
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

export function articleDescription(entry: ContentEntry): string {
	if (entry.data.description) return entry.data.description;

	return (entry.body ?? '')
		.split('<!-- more -->')[0]
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
