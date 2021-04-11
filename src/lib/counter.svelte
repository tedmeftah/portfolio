<script>
	import { onMount } from 'svelte'

	let time = 1
	onMount(() => {
		setInterval(() => {
			time += 1
		}, 1000)
	})
</script>

{time}

hello
