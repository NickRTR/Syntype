<script>
	import { stats, resetStats, practiceMode } from '$lib/stores';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('Resume').focus();
	});

	function handleInput(event) {
		// generate new exercise and exit stats if space is pressed
		if (event.key === ' ') {
			resume();
		}
	}

	function resume() {
		$practiceMode = true;
		resetStats();
	}
</script>

<svelte:window on:keydown={handleInput} />

<body>
	<main>
		<article>
			<p>Time: {$stats.time}s</p>
			<p>Mistakes: {$stats.mistakes}</p>
			<p>Accuracy: {Math.round($stats.accuracy)}%</p>
			<p>WPM: {Math.round($stats.WPM)}</p>
			<p>CPM: {Math.round($stats.CPM)}</p>
		</article>

		<section>
			<button
				type="button"
				title="Resume"
				id="Resume"
				on:click={() => {
					resume();
				}}>Resume</button
			>
			{#if $page.data.user}
				<a href="/account" data-sveltekit-prefetch
					><button type="button" title="Dashboard">Dashboard</button></a
				>
			{/if}
		</section>
	</main>
</body>

<style>
	article {
		display: flex;
		justify-content: center;
	}

	article p {
		margin-inline: 1rem;
	}

	a {
		color: var(--background);
		text-decoration: none;
		outline: none;
	}
</style>
