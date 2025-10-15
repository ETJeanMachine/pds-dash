<script lang="ts">
	let { children } = $props();
</script>

<div class="layout">
  <h1>at://pds.jeanmachine.dev</h1>
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
