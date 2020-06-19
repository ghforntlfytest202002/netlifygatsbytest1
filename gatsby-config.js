module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
		`gatsby-transformer-remark`,
    		{
			resolve: `gatsby-plugin-tinacms`,
			options: {
				sidebar: {
					//hidden: process.env.NODE_ENV === "production",
					position: "displace"
				},
				plugins: [`gatsby-tinacms-git`, `gatsby-tinacms-remark`]
			}
		}
	]
};
