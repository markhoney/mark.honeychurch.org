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
	],
};
