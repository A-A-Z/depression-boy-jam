const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

const IssuesTemplate = path.resolve(`src/templates/issues.js`)

return graphql(`{
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
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

      const issues = result.data.allMarkdownRemark.edges

      issues.forEach(({ node }, index) => {
          const title = node.frontmatter.title
          const prev = (index === 0 ) ? {} : issues[index - 1].node
          const next = (index === issues.length - 1) ? {} : issues[index + 1].node

          createPage({
            path: node.frontmatter.title,
            component: IssuesTemplate,
            context: { title, prev, next}
          })
        })

        return issues
    })
}
