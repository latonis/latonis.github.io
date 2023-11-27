<script lang="ts">
	import * as config from '$lib/config';
	import { base } from '$app/paths';
	import Toggle from './toggle.svelte';

	let navitems = [
		{ name: 'About', location: 'about' },
		{ name: 'RSS Feed', location: 'rss.xml' }
	];
</script>

<nav>
	<a href={base} class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		{#each navitems as navitem}
			<li>
				{#if navitem.location === 'rss.xml'}
					<a href="{base}/{navitem.location}" target="_blank">{navitem.name}</a>
				{:else}
					<a href="{base}/{navitem.location}">{navitem.name}</a>
				{/if}
			</li>
		{/each}
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
