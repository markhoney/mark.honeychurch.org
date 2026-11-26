import rss from '@astrojs/rss';
import type {APIRoute} from 'astro';
import {articleDescription, pagePath, publishedBlogArticles} from '../lib/content';

export const GET: APIRoute = async context => {
	const posts = await publishedBlogArticles();

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
