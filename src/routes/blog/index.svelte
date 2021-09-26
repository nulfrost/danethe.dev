<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const posts = await fetch('/blog.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Title from '../../components/PageTitle.svelte';
	export let posts;
</script>

<Title title="Blog" />

<h1 class="text-4xl font-bold mb-4">Blog</h1>

<div class="max-w-xl flex flex-col gap-4">
	{#each posts as { title, description, slug, date }}
		<article>
			<h2 class="text-lg font-semibold">{title}</h2>
			<time datetime={date} class="text-sm text-gray-500 block mb-2 xl:text-md"
				>{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(date))}</time
			>
			<p class="text-gray-500 mb-3">{description}</p>
			<footer>
				<a href={`/blog/${slug}`} class="text-sm text-blue-500 hover:text-blue-700 duration-150"
					>Read more &rarr;</a
				>
			</footer>
		</article>
	{/each}
</div>
