<script context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script>
	import Title from '../components/PageTitle.svelte';
</script>

<Title title="Home" />

<h1 class="text-5xl font-bold mb-4 text-center md:text-left">Hey, I'm Dane.</h1>
<p class="text-xl mb-4 text-gray-600 text-center md:text-left">
	I'm a frontend developer from <a
		href="https://www.youtube.com/watch?v=ChT3ewZXTfM"
		title="Link to video of game winning shot by Kawhi Leonard in 2019 against the 76ers"
		rel="noopener noreferrer external"
		target="_blank"
		class="font-semibold text-blue-500 "
		>Toronto, ON. <span role="img" aria-label="canadian flag">&#127464;&#127462;</span></a
	>
</p>
<div class="max-w-2xl flex flex-col gap-4 text-gray-600  text-left text-lg">
	<p>
		I enjoy making <span class="font-bold">fast</span> and
		<span class="font-bold">accessible</span> websites using the latest web technologies. Some of the
		tools I use are TypeScript, React/Next.js, Svelte, Node and GraphQL. I’ve taken an interest in DevOps
		related topics / tools and Golang recently and continue to build my knowledge in those areas.
	</p>
	<p>
		When I’m not trying to think of the next billion dollar app idea I enjoy doing other activities
		such as skateboarding, listening to music, playing video games and hanging out with my wonderful
		partner.
	</p>
	<p>
		You can check out the things I am tinkering with on my <a
			href="https://github.com/nulfrost"
			target="_blank"
			rel="noopener noreferrer external"
			class="font-semibold text-indigo-600 ">Github</a
		>. If you would like to get in touch feel free to connect on
		<a
			href="https://www.linkedin.com/in/dmiller94/"
			rel="noopener noreferrer external"
			target="_blank"
			class="text-yellow-600 font-semibold ">Linkedin</a
		>
		or send me an
		<a href="mailto:khadane.miller@gmail.com" class="text-green-600 font-semibold">E-mail</a>.
	</p>
</div>
