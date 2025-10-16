<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_PDS_URL } from '$env/static/public';
	import type { ComAtprotoRepoDescribeRepo, ComAtprotoSyncListRepos } from '@atcute/atproto';

	let repos = $state<ComAtprotoRepoDescribeRepo.$output[]>([]);

	onMount(async () => {
		let response = await fetch(`${PUBLIC_PDS_URL}/xrpc/com.atproto.sync.listRepos`);
		let data: ComAtprotoSyncListRepos.$output = await response.json();
		for (let repo of data.repos) {
			await fetch(`${PUBLIC_PDS_URL}/xrpc/com.atproto.repo.describeRepo?repo=${repo.did}`)
				.then((response) => response.json())
				.then((data) => repos.push(data));
		}
	});
</script>

<div>
	{#if repos.length >= 3}
		{#each repos as repo (repo.did)}
			<div>{repo.handle}: {repo.did}</div>
		{/each}
	{:else}
		<div>Loading Repos...</div>
	{/if}
</div>
