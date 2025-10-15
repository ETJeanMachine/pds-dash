<script lang="ts">
 import type {PageProps} from "./$types"

 const {data}: PageProps = $props();
 const repo = data.repo;
</script>

<h1>{repo}</h1>
