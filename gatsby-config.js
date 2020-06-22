const sanityWatchMode = process.env.SANITY_WATCH_MODE ? process.env.SANITY_WATCH_MODE : false;
const sanityOverlayDrafts = process.env.SANITY_OVERLAY_DRAFTS ? process.env.SANITY_OVERLAY_DRAFTS : false;
const sanityToken = process.env.SANITY_READ_TOKEN ? process.env.SANITY_READ_TOKEN : "sk8AepoFD3M6bYWdXZOEvFKvQtDpXAQK4NEegywpyvjEEB3ZbeEKkmFDlhifTDJ8H00Oxbd8aKUySeD7JA6CmpGgyMBrjXffxPI9t7wxbVYSGOxI2673vFqOuByOUsScyiGtg0d9AnNY1K82MZIHca8CIi15p4pXWuaeJ4aRPmXIp5m70UOR";

module.exports = {
    plugins: [
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "y16rns1e",
				dataset: "my-content",
				token: sanityToken,
				watchMode: sanityWatchMode,
				overlayDrafts: sanityOverlayDrafts,
			}
		}
    ]
};
