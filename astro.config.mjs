import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

export default defineConfig({
	site: 'https://mark.honeychurch.org',
	trailingSlash: 'ignore',
	integrations: [vue(), sitemap()],
	build: {
		format: 'directory',
	},
});
