import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import type {APIRoute} from 'astro';
import {articleDescription, pagePath, sortNewest} from '../lib/content';

export const GET: APIRoute = async context => {
	const posts = sortNewest(
		(await getCollection('blog')).filter(
			entry => !entry.data.draft && entry.data.title && entry.data.date,
		),
	);

	return rss({
		title: 'Mark Honeychurch',
		description: 'Code, projects, life and random thoughts',
		site: context.site!,
		items: posts.map(entry => ({
			title: entry.data.title!,
			description: articleDescription(entry),
			pubDate: entry.data.date!,
			link: pagePath(entry),
		})),
	});
};
