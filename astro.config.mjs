import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import favicons from 'astro-favicons';
import pagefind from 'astro-pagefind';
import robotsTxt from 'astro-robots-txt';
import {satteri} from '@astrojs/markdown-satteri';
import satteriYoutubePlugin from './src/lib/satteri-youtube.mjs';

const sveltiaAdmin = {
	name: 'sveltia-admin',
	hooks: {
		'astro:server:setup': ({server}) => {
			server.middlewares.use((request, response, next) => {
				const path = request.url?.split('?', 1)[0];

				if (path === '/admin' || path === '/admin/') {
					response.statusCode = 302;
					response.setHeader('Location', '/admin/index.html');
					response.end();
					return;
				}

				next();
			});
		},
	},
};

export default defineConfig({
	site: 'https://mark.honeychurch.org',
	trailingSlash: 'always',
	integrations: [
		sveltiaAdmin,
		mdx(),
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
			features: {rawHtml: true},
			mdastPlugins: [satteriYoutubePlugin()],
		}),
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'nord',
			wrap: true,
		},
	},
});
