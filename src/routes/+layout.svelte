<script lang="ts">
	let { children } = $props();
</script>

<div class="layout">
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
  }
</style>
