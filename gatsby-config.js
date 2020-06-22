module.exports = {
    plugins: [
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "abc123",
				dataset: "my-content",
				token: "sk8AepoFD3M6bYWdXZOEvFKvQtDpXAQK4NEegywpyvjEEB3ZbeEKkmFDlhifTDJ8H00Oxbd8aKUySeD7JA6CmpGgyMBrjXffxPI9t7wxbVYSGOxI2673vFqOuByOUsScyiGtg0d9AnNY1K82MZIHca8CIi15p4pXWuaeJ4aRPmXIp5m70UOR",
				watchMode: true,
				overlayDrafts: true,
			}
		},
    ]
};
