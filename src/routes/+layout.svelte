<script lang="ts">
	import { PUBLIC_PDS_URL } from '$env/static/public';

	let { children } = $props();
</script>

<div class="layout">
	<h1>at://{PUBLIC_PDS_URL}</h1>
	{@render children?.()}
</div>

<style>
	:global(html),
	:global(body) {
		background-color: black;
		color: white;
	}

	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
