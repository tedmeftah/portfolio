<script>
	import { onMount } from 'svelte'

	let stack
	let margin = 24
	let isScrolling = false

	function onIntersect(entries) {
		if (entries[0].isIntersecting) {
			window.addEventListener('scroll', onScroll)
		} else {
			window.removeEventListener('scroll', onScroll)
		}
	}

	function onScroll() {
		if (isScrolling) return
		isScrolling = true
		window.requestAnimationFrame(() => {
			let top = stack.getBoundingClientRect().top
			cards.forEach((card, i) => {
				let height = card.offsetHeight
				let delta = margin - top - i * (height - margin)
				console.log(delta)
				if (delta > 0) {
					const scale = i == cards.length - 1 ? 1 : (height - delta * 0.05) / height
					card.style.transform = `translateY(${margin * i * scale}px) scale(${scale})`
				} else {
					card.style.transform = `translateY(${margin * i}px)`
				}
			})
			isScrolling = false
		})
	}

	let cards = []

	onMount(() => {
		var observer = new IntersectionObserver(onIntersect, { threshold: [0, 1] })
		observer.observe(stack)

		cards = Array.from(stack.childNodes)

		// stack.style.paddingBottom = `${margin * cards.length}px`

		cards.forEach((card, i) => {
			card.style.top = `${margin * i}px`
		})
	})
</script>

<section>
	<h2>Projects</h2>
	<ul bind:this={stack} role="list">
		{#each { length: 3 } as _}
			<li>
				<article>
					<h3>Project</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, corrupti
						nesciunt id quis rem dignissimos perspiciatis dolores, hic quasi consequatur
						praesentium ducimus ullam deserunt ex expedita eos natus sint enim!
					</p>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	ul {
		position: relative;
	}

	li {
		top: 2rem;
		position: sticky;
		transform-origin: center top;
		box-shadow: 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08),
			0 14px 25px rgba(0, 0, 0, 0.12);
	}

	article {
		background: rgb(238, 238, 238);
		color: rgb(43, 43, 43);
		padding: 1rem;
		border-radius: 0.5rem;
		height: 20rem;
	}
</style>
