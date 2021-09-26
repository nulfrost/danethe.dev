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
	export let properties;
</script>

<a
	href={properties.Link.url}
	title="External link to buy or access the book {properties.Name.title[0].plain_text}"
	rel="external"
	target="_blank"
	class="border-4 rounded px-5 py-3 h-40 hover:border-gray-900 flex flex-col focus:border-gray-900 focus:outline-none"
>
	<h2 class="text-lg font-semibold mb-2">{properties.Name.title[0].plain_text}</h2>
	<p class="text-gray-500">
		{properties.Author.multi_select.map((author) => author.name).join(', ')}
	</p>
	<div class="mt-auto flex">
		<small
			class="font-semibold px-2 py-1 rounded {displayReadingStatus(properties.Status.select.name)}"
			>{properties.Status.select.name}</small
		>
	</div>
</a>
