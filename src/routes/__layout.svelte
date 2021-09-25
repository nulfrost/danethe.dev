<script>
	import Navbar from '../components/Navbar.svelte';
	import { page } from '$app/stores';
</script>

<Navbar />
<main class="px-5 lg:px-0 pb-32">
	<section class="mt-[112px]">
		<slot />
	</section>
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
		margin: 0 auto;
		font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
