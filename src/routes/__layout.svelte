<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main class="pb-32">
	<slot />
</main>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body, html, #svelte) {
		height: 100%;
		@apply max-w-4xl;
		@apply bg-gray-50;

		margin: 0 auto;
		font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
