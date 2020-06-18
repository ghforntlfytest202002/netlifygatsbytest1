const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const urlSuffixIdea = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `suggestedURLSuffix`,
      value: urlSuffixIdea,
    })
  }
}

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
	query {
	  allMarkdownRemark {
		  edges {
			node {
			  id,
			  fields {
				suggestedURLSuffix
			  }
			}
		  }
	  }
	}
  `)
  nodes = queryResult.data.allMarkdownRemark.edges.map((graphQLNode) =>
	getNode(graphQLNode.id)
  );
  nodes.forEach(({ node }) => {
    createPage({
	  path: node.fields.suggestedURLSuffix,
	  component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
	  context: {
	    frontmatter: node.frontmatter,
	  },
    })
  })
};