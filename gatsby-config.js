module.exports = {
	pathPrefix: '/',
	siteMetadata: require('./site-metadata.json'),
	plugins: [
		{
			resolve: 'gatsby-plugin-tinacms',
			options: {
				sidebar: {
					hidden: process.env.NODE_ENV === "production",
					position: "displace",
				}
			}
		}
	]
};
