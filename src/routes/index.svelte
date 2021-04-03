<script>
	import 'virtual:windi.css'

	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<svelte:head>
	<title>Mohamed Ted Meftah</title>
</svelte:head>

In the process of rebuilding my website...

<div class="hot">
	<a on:click={redirect} href="/">Learning in Public</a>
</div>

<a href="/" class="btn">Test</a>
<style lang="postcss">
	.hot {
		& a {
			@apply text-blue-600;
			@screen sm {
				@apply text-red-600;
			}
		}
	}
</style>
