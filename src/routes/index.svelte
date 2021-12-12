<script>
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	onMount(() => {
		console.log($page.host)
	})
</script>

<svelte:head>
	<title>Ted Meftah</title>
</svelte:head>

<a class="pill green small" href="mailto:hello@tedmeftah.com">Available For Hire</a>
<h2>&#128075; Hey, I'm Mohamed</h2>
<p>
	a versatile web developer with a penchant for creating innovative solutions to
	unsolvable problems, specializing in (but not limited to) frontend development. I have
	5+ years of experience working with modern Javascript frameworks, building responsive,
	performant eCommerce stores, static websites, and single-page applications.
</p>

<p>
	PS: I'm currently rebuilding my website. Come back soon for more content. In the
	meantime, you can check meantime you can check <a
		rel="external"
		href="learning"
		class="pill blue">my public learning notes.</a
	>
</p>
<a href="/articles/page/2"></a>
<a href="/articles/page/3"></a>
<a href="/articles/page/4"></a>

<style>
	.pill {
		@apply no-underline;
		@apply rounded-full font-bold text-lg tracking-wide px-3 inline-block;
		&.small {
			@apply text-sm py-1;
		}
		&.green {
			@apply bg-green-900 text-green-400;
		}
		&.blue {
			@apply bg-blue-900 text-blue-300;
		}
	}
	
	h2 {
		@apply font-bold mt-4 text-4xl;
	}

	p {
		@apply mt-4 text-xl leading-relaxed text-[#DDE1E3] text-opacity-80 block;
	}
</style>
