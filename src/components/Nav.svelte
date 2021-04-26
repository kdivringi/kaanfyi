<script>
	export let segment;
</script>

<style>
	nav {
		@apply border-red-100 border-b font-light px-4 flow-root;
	}

	ul {
		@apply flex;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		@apply block py-4 px-2;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- <li><a aria-current="{segment ==='portfolio' ? 'page' : undefined }" href="portfolio">portfolio</a></li> -->
		<li><a aria-current="{segment ==='feed' ? 'page' : undefined }" href="feed">feed</a></li>
	</ul>
</nav>
