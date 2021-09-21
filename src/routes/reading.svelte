<script context="module">
	export async function load() {
		const res = await fetch('http://localhost:3000/api/books');
		const reading = await res.json();

		return {
			props: {
				reading: reading?.books
			}
		};
	}
</script>

<script>
	function displayReadingStatus(status) {
		switch (status) {
			case 'Finished':
				return 'text-green-800 bg-green-50';
			case 'Reading':
				return 'text-blue-800 bg-blue-50';
			case 'Paused':
				return 'text-yellow-800 bg-yellow-50';
			case 'Ready to Start':
				return 'text-red-800 bg-red-50';
		}
	}

	export let reading;
</script>

<svelte:head>
	<title>Dane Miller - Reading</title>
</svelte:head>

<section class="mt-[112px]">
	<h1 class="text-5xl font-bold mb-4">Reading</h1>
	<div class="grid grid-cols-2 gap-6">
		{#each reading as book}
			<div
				tabindex="0"
				class="border-2 rounded px-5 py-3 h-40 hover:border-purple-600 flex flex-col focus:outline-none focus:border-purple-600"
			>
				<h2 class="text-lg font-semibold mb-2">{book.properties.Name.title[0].plain_text}</h2>
				<p class="text-gray-500">
					{book.properties.Author.multi_select.map((author) => author.name).join(', ')}
				</p>
				<div class="mt-auto flex">
					<small
						class="font-semibold px-2 py-1 rounded {displayReadingStatus(
							book.properties.Status.select.name
						)}">{book.properties.Status.select.name}</small
					>
					<a
						href={book.properties.Link.url}
						class="ml-auto text-blue-500"
						rel="external"
						target="_blank">Link &rarr;</a
					>
				</div>
			</div>
		{/each}
	</div>
</section>
