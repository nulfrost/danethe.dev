<script>
	const books = [
		{
			title: 'Refactoring: Improving the Design of Existing Code',
			author: 'Martin Fowler',
			link: '#',
			status: 'reading'
		},
		{
			title: 'Refactoring: Improving the Design of Existing Code',
			author: 'Martin Fowler',
			link: '#',
			status: 'reading'
		},
		{
			title: 'Refactoring: Improving the Design of Existing Code',
			author: 'Martin Fowler',
			link: '#',
			status: 'reading'
		},
		{
			title: 'Refactoring: Improving the Design of Existing Code',
			author: 'Martin Fowler',
			link: '#',
			status: 'reading'
		}
	];
</script>

<section class="mt-[112px]">
	<h1 class="text-5xl font-bold mb-4">Reading</h1>
	<div class="grid grid-cols-2 gap-6">
		{#each books as book}
			<div
				tabindex="0"
				class="border-2 rounded px-5 py-3 h-40 hover:border-purple-600 flex flex-col focus:outline-none focus:border-purple-600"
			>
				<h2 class="text-lg font-semibold mb-2">{book.title}</h2>
				<p class="text-gray-500">{book.author}</p>
				<div class="mt-auto flex">
					<small class="text-yellow-800 font-semibold bg-yellow-300 px-2 py-1 rounded"
						>{book.status}</small
					>
					<a href={book.link} class="ml-auto text-blue-500">Link &rarr;</a>
				</div>
			</div>
		{/each}
	</div>
</section>
