<script lang="ts">
	import { onMount } from "svelte";
	import { PDS_URL } from '$lib/constants';
	import type { ComAtprotoSyncListRepos } from "@atcute/atproto";

	let repos = $state<ComAtprotoSyncListRepos.Repo[]>([]);

	onMount(async () => {
	  let response = await fetch(`${PDS_URL}/xrpc/com.atproto.sync.listRepos`);
	  let data: ComAtprotoSyncListRepos.$output = await response.json();
		repos = data.repos;
		console.log(repos);
	});
</script>

<div>
  {#if repos.length > 0}
    {#each repos as repo (repo.did)}
      {#if repo.active}
        <div>{repo.did}</div>
      {/if}
    {/each}
  {:else}
    <div>No repositories found.</div>
  {/if}
</div>
