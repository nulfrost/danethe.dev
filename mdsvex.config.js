import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

const config = {
	layout: {
		uses: './src/components/Uses.svelte',
		blog: './src/components/Blog.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeAccessibleEmojis]
};

export default config;
