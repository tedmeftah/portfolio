<script>
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<svelte:head>
	<title>Ted Meftah</title>

	<meta name="description" content="Ted Meftah's Portfolio" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Ted Meftah's Portfolio" />
	<meta property="og:description" content="" />
	<meta property="og:image" content="/avatar.png" />

	<meta name="twitter:creator" content="@TedMeftah" />
	<meta name="twitter:card" content="summary" />
	<meta property="twitter:title" content="Ted Meftah's Portfolio" />
	<meta property="twitter:description" content="" />
	<meta property="twitter:image" content="/avatar.png" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss" global>
	@import 'global.postcss';
</style>
