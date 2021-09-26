import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

const config = {
	layout: {
		markdown: './src/components/Markdown.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeAccessibleEmojis]
};

export default config;
