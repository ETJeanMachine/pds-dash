export function load({ params }) {
	return {
		repo: params.repo,
		nsid: params.nsid,
		rkey: params.rkey
	};
}
