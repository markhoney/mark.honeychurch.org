var fs = require('fs');

const blog = require('./website/blog.json');

const site = 'https://mark.honeychurch.org';

//const blogsidebar = blog.map(x => x.link);

const csp = fs.readFileSync('./src/.vuepress/website/csp.txt', 'utf8').replace("Content-Security-Policy:", "").trim().replace(/\s\s+/g, ' ');

function regexSame(r1, r2) {
	return r1 instanceof RegExp && 
				 r2 instanceof RegExp &&
				 r1.source === r2.source &&
				 r1.flags.split("").sort().join("") === r2.flags.split("").sort().join("");
}

module.exports = {
	title: 'Mark Honeychurch',
	description: 'Coder, Skeptic, Humanist',
	author: 'Mark Honeychurch',
	dest: 'docs',
	shouldPrefetch: () => false,
	evergreen: true,
	themeConfig: {
		//repo: 'markhoney/mark.honeychurch.org',
		docsDir: 'docs',
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Blog',
				//link: '/blog/'
				items: blog
			},
			{
				text: 'Media',
				link: '/media/'
			},
			{
				text: 'CV',
				link: '/cv/'
			},
			{
				text: 'Contact',
				link: '/contact/'
			}
		],
		//sidebar: {
		// '/blog/': blogsidebar
		//}
	},
	head: [
		['link', {
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/media/images/icons/apple-touch-icon.png'
		}],
		['link', {
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/media/images/icons/favicon-32x32.png'
		}],
		['link', {
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/media/images/icons/favicon-16x16.png'
		}],
		['link', {
			rel: 'manifest',
			href: '/media/images/icons/site.webmanifest'
		}],
		['link', {
			rel: 'shortcut icon',
			href: '/media/images/icons/favicon.ico'
		}],
		['meta', {
			name: 'msapplication-TileColor',
			content: '#b91d47'
		}],
		['meta', {
			name: 'msapplication-config',
			content: '/media/images/icons/browserconfig.xml'
		}],
		['meta', {
			name: 'theme-color',
			content: '#ffffff'
		}],
		['link', {
			rel: 'stylesheet',
			href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css'
		}],
		/*['meta', {
			'http-equiv': 'Content-Security-Policy',
			content: csp
		}]*/
	],
	extendMarkdown(md) { // https://prismjs.com/#languages-list
		md.use(require('markdown-it-video'))
			.use(require('markdown-it-fontawesome'))
			.use(require('markdown-it-abbr'))
			.use(require('markdown-it-sup'))
			.use(require('markdown-it-sub'))
			.use(require('markdown-it-attrs'))
			.use(require('markdown-it-footnote'));
	},
	/*configureWebpack: {
		module: {
			rules: {
				images: {
					name: 'assets/img/[name].[ext]'
				},
				svg: {
					name: 'assets/img/[name].[ext]'
				},
				media: {
					name: 'assets/media/[name].[ext]'
				},
				fonts: {
					name: 'assets/fonts/[name].[ext]'
				}
			}
		}
	},*/
	configureWebpack: config => { // https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/webpack/createBaseConfig.js
		//console.log(config.module.rules[7].oneOf[0].use);
		//config.plugins.find(plugin => plugin.definitions).options.filename = 'assets/css/styles.css';
		//config.plugins.find(plugin => plugin.definitions).options.chunkFilename = 'assets/css/[id].styles.css';
		config.output.filename = 'assets/js/[name].js';
		config.module.rules.find(rule => regexSame(rule.test, /\.(png|jpe?g|gif)(\?.*)?$/)).use.find(use => use.loader == 'url-loader').options.name = 'assets/img/[name].[ext]';
		config.module.rules.find(rule => regexSame(rule.test, /\.(svg)(\?.*)?$/)).use.find(use => use.loader == 'file-loader').options.name = 'assets/img/[name].[ext]';
		config.module.rules.find(rule => regexSame(rule.test, /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)).use.find(use => use.loader == 'url-loader').options.name = 'assets/media/[name].[ext]';
		config.module.rules.find(rule => regexSame(rule.test, /\.(woff2?|eot|ttf|otf)(\?.*)?$/i)).use.find(use => use.loader == 'url-loader').options.name = 'assets/fonts/[name].[ext]';
	},
	plugins: {
		/*'@vuepress/blog': {
			postsDir: '_posts',
			categoryIndexPageUrl: '/category/',
			tagIndexPageUrl: '/tag/',
			permalink: '/blogtest/:slug'
		},*/
		/*'@vuepress/google-analytics': {
			ga: 'UA-45273295-3'
		},*/
		'minimal-analytics': {
			ga: 'UA-45273295-3'
		},
		'container': {},
		'@vuepress/medium-zoom': {},
		'@vuepress/pagination': {},
		'@vuepress/register-components': {},
		'@vuepress/pwa': {
			serviceWorker: true,
			updatePopup: {
				message: "New content is available.",
				buttonText: "Refresh"
			}
		},
		'serve': {},
		/*'@vuepress/clean-urls': {
			normalSuffix: '',
			indexSuffix: '',
		},*/
		'@vuepress/search': {
			searchMaxSuggestions: 10
		},
		'sitemap': {
			hostname: site,
			changefreq: 'weekly'
		},
		'feed': {
			canonical_base: site,
			count: 9999
		},
		'reading-time': {},
		'seo': {
			description: $page => ($page.excerpt ? $page.excerpt.replace(/<(?:.|\n)*?>/gm, '').trim() : $page.frontmatter.description),
			author: ($page, $site) => {
				return {
					name: ($page.frontmatter.author || $site.themeConfig.author),
					twitter: '@markhoney'
				}
			},
			image: $page => '/media/images' + ($page.path.startsWith('/blog/skepticism/') ? ['', $page.path.split('/')[1], $page.path.split('/')[2], ($page.frontmatter.tags ? $page.frontmatter.tags[0].toString().toLowerCase() : 'thoughts')].join('/') : ($page.path.endsWith('/') ? $page.path.slice(0, -1) : $page.path)) + '.jpg',
		},
		'tabs': {}
	}
};
