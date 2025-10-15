<script lang="ts">
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();

	const repo = data.repo;
	const nsid = data.nsid;
</script>

<h1>{repo} / {nsid}</h1>
