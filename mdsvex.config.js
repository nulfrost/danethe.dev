const config = {
	layout: {
		md: './src/components/MarkdownLayout.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
