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

<div class="container">
	<div class="header">
		<h2>Repositories</h2>
		<p class="subtitle">Browse all repositories on this PDS instance</p>
	</div>

	{#if repos.length >= 3}
		<div class="repos-grid">
			{#each repos as repo (repo.did)}
				<a href="/{repo.did}" class="repo-card">
					<div class="repo-handle">@{repo.handle}</div>
					<div class="repo-did">{repo.did}</div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="loading">
			<div class="spinner"></div>
			<p>Loading repositories...</p>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 1200px;
		width: 100%;
		padding: 2rem;
		margin: 0 auto;
	}

	.header {
		margin-bottom: 2.5rem;
		text-align: center;
	}

	.header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.1rem;
		color: #a0a0a0;
		margin: 0;
	}

	.repos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.repo-card {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		position: relative;
		overflow: hidden;
	}

	.repo-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.repo-card:hover {
		transform: translateY(-4px);
		border-color: #667eea;
		box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
	}

	.repo-card:hover::before {
		transform: scaleX(1);
	}

	.repo-handle {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: #ffffff;
	}

	.repo-did {
		font-size: 0.875rem;
		color: #888;
		font-family: 'Courier New', monospace;
		word-break: break-all;
		line-height: 1.5;
	}

	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		gap: 1.5rem;
	}

	.loading p {
		font-size: 1.1rem;
		color: #a0a0a0;
		margin: 0;
	}

	.spinner {
		width: 48px;
		height: 48px;
		border: 4px solid #333;
		border-top-color: #667eea;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 1rem;
		}

		.header h2 {
			font-size: 2rem;
		}

		.repos-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
