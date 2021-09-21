<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body, html, #svelte) {
		height: 100%;
		@apply max-w-4xl;
		@apply bg-gray-50;
		margin: 0 auto;
	}
</style>
