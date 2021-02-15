module.exports = {
	markdown: {
		anchor: { permalink: false },
		toc: { includeLevel: [1, 2] },

		config: (md) => {
			md.use(require('markdown-it-video'))
				.use(require('markdown-it-fontawesome'))
				.use(require('markdown-it-abbr'))
				.use(require('markdown-it-sup'))
				.use(require('markdown-it-sub'))
				.use(require('markdown-it-attrs'))
				.use(require('markdown-it-footnote'));
		}
	}
};
