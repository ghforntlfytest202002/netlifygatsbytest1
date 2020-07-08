module.exports = {
    plugins: [
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "y16rns1e",
				dataset: "my-content",
				...(process.env.SANITY_READ_TOKEN && { token: process.env.SANITY_READ_TOKEN }),
				...(process.env.SANITY_WATCH_MODE && process.env.SANITY_READ_TOKEN && { watchMode: process.env.SANITY_WATCH_MODE }),
				...(process.env.SANITY_OVERLAY_DRAFTS && process.env.SANITY_READ_TOKEN && { overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS }),
			}
		}
    ]
};