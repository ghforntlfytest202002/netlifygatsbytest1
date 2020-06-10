module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-tinacms',
			options: {
				sidebar: {
					hidden: process.env.NODE_ENV === "production",
					position: "displace"
				},
				plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"]
			}
		}
	]
};
