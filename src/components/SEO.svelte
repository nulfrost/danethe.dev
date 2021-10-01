<script>
	export let url;
	export let type;
	export let title;
	export let description;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:description" content={description} />
</svelte:head>
