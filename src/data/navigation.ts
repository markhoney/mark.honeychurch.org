export const blogSections = [
	{
		label: 'Life',
		href: '/blog/life/',
		description: 'Infrequent blogging about my life',
	},
	{
		label: 'Random',
		href: '/blog/random/',
		description: 'Random thoughts on disparate topics',
	},
	{
		label: 'Code',
		href: '/blog/code/',
		description: "Interesting code I've played with over the years",
	},
	{
		label: 'How To',
		href: '/blog/howto/',
		description: 'How to guides for technical tasks',
	},
	{
		label: 'Projects',
		href: '/blog/projects/',
		description: "Geeky projects I've built",
	},
] as const;

export const navigation = [
	{label: 'Home', href: '/'},
	{label: 'Blog', href: '/blog/', children: blogSections},
	{label: 'Media', href: '/media/'},
	{label: 'CV', href: '/cv/'},
	{label: 'Contact', href: '/contact/'},
] as const;
