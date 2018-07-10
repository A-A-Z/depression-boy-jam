const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

const IssuesTemplate = path.resolve(`src/templates/issues.js`)

return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges

        .forEach(({ node }) => {
          const title = node.frontmatter.title
          createPage({
            path: node.frontmatter.title,
            component: IssuesTemplate,
            context: { title, }
          });
        });
    });
}
