<script lang="ts">
	import { PUBLIC_PDS_URL } from '$env/static/public';

	let { children } = $props();
</script>

<div class="layout">
	<header class="site-header">
		<div class="header-content">
			<div class="logo">
				<span class="protocol">at://</span>
				<span class="pds-url">{PUBLIC_PDS_URL}</span>
			</div>
		</div>
	</header>
	<main class="main-content">
		{@render children?.()}
	</main>
</div>

<style>
	:global(html),
	:global(body) {
		background-color: #0a0a0a;
		color: white;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		line-height: 1.6;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.site-header {
		background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
		border-bottom: 1px solid #222;
		padding: 1rem 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.protocol {
		color: #667eea;
		font-weight: 700;
	}

	.pds-url {
		color: #ffffff;
		font-family: 'Courier New', monospace;
	}

	.main-content {
		flex: 1;
		width: 100%;
	}

	@media (max-width: 768px) {
		.header-content {
			padding: 0 1rem;
		}

		.logo {
			font-size: 1.2rem;
		}
	}
</style>
