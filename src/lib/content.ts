import type {CollectionEntry} from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;

export function pagePath(entry: PageEntry): string {
	const path = entry.id.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1');
	return `/${path}`.replace(/\/+$/, '') + '/';
}

export function sectionName(entry: PageEntry): string {
	return entry.id.split('/')[1] ?? '';
}

export function isArticle(entry: PageEntry): boolean {
	return Boolean(entry.data.date && entry.data.title);
}

export function sortNewest(entries: PageEntry[]): PageEntry[] {
	return [...entries].sort(
		(a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0),
	);
}

export function articleDescription(entry: PageEntry): string {
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
