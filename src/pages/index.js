import React from "react"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: issues } = data.allMarkdownRemark
    const site = data.site.siteMetadata

    return (
      <div>
        <Helmet
          title={`${site.title}`}
          meta={[
            { name: 'description', content: site.description },
            { name: 'keywords', content: 'depressionboy' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1' },
          ]}
        />
        <h1>Depression Boy</h1>
        <ul>
          {issues.map(({ node: issue }) => {
            const title = issue.frontmatter.title
            return (
              <li key={`isuee-${title}`}><a href={`/${issue.frontmatter.title}`}>{issue.frontmatter.title} | {issue.frontmatter.word}</a></li>
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
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            word
          }
        }
      }
    }
  }`
