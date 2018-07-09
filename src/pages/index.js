import React from "react"
import PropTypes from 'prop-types'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: issues } = data.allMarkdownRemark

    return (
      <div>
        <h1>Depression Boy</h1>
        <ul>
          {issues.map(({ node: issue }) => {
            const title = issue.frontmatter.title
            return (
              <li key={`isuee-${title}`}>{title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
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
  }`
