<script>
	$: open = false;

	function openMenu() {
		open = !open;
	}
</script>

<header class="px-5 lg:px-0 max-w-4xl mx-auto">
	<nav class="flex items-baseline gap-6 py-5 justify-between md:justify-start">
		<a href="/" class="text-2xl font-bold">Dane.</a>
		<ul class="hidden md:flex">
			<li>
				<a href="/" class="hover:bg-gray-100 px-3 py-2 rounded duration-150 focus:bg-gray-100"
					>Home</a
				>
			</li>
			<li>
				<a href="/blog" class="hover:bg-gray-100 px-3 py-2 rounded duration-150 focus:bg-gray-100"
					>Blog</a
				>
			</li>
			<li>
				<a
					href="/reading"
					class="hover:bg-gray-100 px-3 py-2 rounded duration-150 focus:bg-gray-100">Reading</a
				>
			</li>
			<li>
				<a href="/uses" class="hover:bg-gray-100 px-3 py-2 rounded duration-150 focus:bg-gray-100"
					>Uses</a
				>
			</li>
			<!-- <li>
				<a
					href="/projects"
					class="focus:border-b-4 border-purple-700 pb-2  hover:border-b-4"
					>Projects</a
				>
			</li> -->
		</ul>
		<div class="md:hidden cursor-pointer" on:click={openMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
	</nav>
	<ul class="md:hidden {open ? 'flex flex-col gap-3 items-center' : 'hidden'}">
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/reading">Reading</a>
		</li>
		<li>
			<a href="/uses">Uses</a>
		</li>
		<!-- <li>
			<a
				href="/projects"
				class="focus:border-b-4 border-purple-700 pb-2  hover:border-b-4"
				>Projects</a
			>
		</li> -->
	</ul>
</header>
