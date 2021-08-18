module.exports = {
	siteName: 'Gridsome',
	siteUrl: 'https://www.gridsome.org',
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'docs/**/*.md',
				route: '/:year/:month/:day/:slug',
				typeName: 'Post'
			},
		},
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Documentation',
				baseDir: './docs',
				// template: './src/templates/Documentation.vue',
			},
		},
	],
};
