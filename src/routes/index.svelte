<script>
	import Home from '../../content/home.md'
	import Circle from '@/assets/circle.svg'
	function redirect(e) {
		e.preventDefault()
		window.location.href = '/learning'
	}
</script>

<Home />

<a on:click={redirect} href="/" class="block">Learning in Public</a>

<Circle />

<style lang="postcss">
	:global(body) {
		@apply fill-blue-500;
	}
</style>
