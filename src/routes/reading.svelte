<script context="module">
	import { dev } from '$app/env';

	export async function load({ fetch }) {
		const api_url =
			dev === true ? 'http://localhost:3000/api/books' : 'https://danethe.dev/api/books';

		const res = await fetch(api_url);
		const reading = await res.json();

		return {
			props: {
				reading: reading?.books
			},
			maxage: 3600
		};
	}
</script>

<script>
	import Book from '../components/Book.svelte';
	import Title from '../components/PageTitle.svelte';
	export let reading;
	let filteredBooks = [];
	let filter = '';

	function setFilter(event) {
		filter = event.target.textContent;
	}

	$: {
		if (filter) {
			filteredBooks = reading.filter((read) => read.properties.Status.select.name === filter);
		} else {
			filteredBooks = reading;
		}
	}
</script>

<Title title="Reading" />

<div class="flex justify-between items-baseline flex-col md:flex-row">
	<h1 class="text-4xl font-bold mb-4">Reading</h1>
	<div class="mb-4 md:mb-0">
		<button
			class="text-red-800 bg-red-50 px-2 py-1 rounded hover:bg-red-100 duration-150 "
			on:click={setFilter}>Ready to Start</button
		>
		<button
			class="text-yellow-800 bg-yellow-50 px-2 py-1 rounded hover:bg-yellow-100 duration-150"
			on:click={setFilter}>Paused</button
		>
		<button
			class="text-green-800 bg-green-50 px-2 py-1 rounded hover:bg-green-100 duration-150"
			on:click={setFilter}>Finished</button
		>
	</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	{#each filteredBooks as book}
		<Book {...book} />
	{/each}
</div>
