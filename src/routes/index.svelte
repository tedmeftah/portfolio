<script>
	import Logo from '@/assets/logo.png?w=300;400;500&format=webp&srcset&img'

	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<svelte:head>
	<title>Mohamed Ted Meftah</title>
</svelte:head>

<img srcset={Logo} type="image/webp" alt="TedMeftah" />
In the process of rebuilding my website...

<a on:click={redirect} href="/">Learning in Public</a>

<style lang="scss">
	a {
		@apply text-red-500;
	}
</style>
