<script lang="ts">
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();

	const repo = data.repo;
	const nsid = data.nsid;
	const rkey = data.rkey;
</script>

<h1>{repo} / {nsid} / {rkey}</h1>
