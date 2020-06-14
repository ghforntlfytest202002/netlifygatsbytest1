exports.onCreateNode = ({ node, getNode }) => {
  console.log('Node Internal Type: ' + node.internal.type + '; Node name: ' + node.name)
};

exports.createPages = ({ graphql, actions }) => {
};