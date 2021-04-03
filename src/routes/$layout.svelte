<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<svelte:head>
	<title>Ted Meftah</title>

	<meta property="og:title" content="Ted Meftah" />
	<meta property="og:image" content="/avatar.png" />
	<meta name="description" content="Ted Meftah's Portfolio" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@TedMeftah" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss" global>
	@import 'global.postcss';
</style>
