<script>
	import 'virtual:windi.css'
</script>

<main>
	<slot />
</main>

<style global>
	:root {
		@apply font-sans bg-[#0F0F0F] text-[#DDE1E3];
	}

	a {
		color: currentColor;
	}

	main {
		@apply m-auto mb-8 max-w-3xl px-4 pt-24;
	}
</style>
