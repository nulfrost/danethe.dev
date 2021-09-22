import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

const config = {
	layout: {
		md: './src/components/MarkdownLayout.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeAccessibleEmojis]
};

export default config;
