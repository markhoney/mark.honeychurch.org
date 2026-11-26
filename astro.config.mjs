import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import favicons from 'astro-favicons';
import pagefind from 'astro-pagefind';
import robotsTxt from 'astro-robots-txt';
import {satteri} from '@astrojs/markdown-satteri';
import satteriYoutubePlugin from './src/lib/satteri-youtube.mjs';

export default defineConfig({
	site: 'https://mark.honeychurch.org',
	trailingSlash: 'always',
	integrations: [
		vue(),
		sitemap(),
		pagefind({
			indexConfig: {
				rootSelector: 'main',
				excludeSelectors: ['pre', 'code'],
				forceLanguage: 'en',
			},
		}),
		robotsTxt({
			policy: [{
				userAgent: '*',
				allow: '/',
				disallow: '/admin/',
			}],
		}),
		favicons({
			input: 'public/media/images/icons/android-chrome-512x512.png',
			name: 'Mark Honeychurch',
			short_name: 'Mark',
			background: '#ffffff',
			themes: ['#b91d47'],
			manifest: {
				start_url: '/',
				display: 'standalone',
				description: 'Coder, Tinkerer, Humanist',
			},
		}),
	],
	build: {
		format: 'directory',
	},
	markdown: {
		processor: satteri({
			mdastPlugins: [satteriYoutubePlugin()],
		}),
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'nord',
			wrap: true,
		},
	},
});
