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

<Title title={'Blog'} />

{#each posts as { title, description, slug, date }}
	<article>
		<h2>{title}</h2>
		<p>{description}</p>
		<a href={`/blog/${slug}`}>Read more &rarr;</a>
		<time datetime={date}>{date}</time>
	</article>
{/each}
