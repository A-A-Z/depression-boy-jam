import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function Template({
  data
}) {
  const post = data.markdownRemark
  const site = data.site.siteMetadata
  const keywords = post.frontmatter.tags.join(', ')

  return (
    <div>
      <Helmet
        title={`${site.title} : ${post.frontmatter.title} | ${post.frontmatter.word}`}
        meta={[
          { name: 'description', content: site.description },
          { name: 'keywords', content: keywords },
          { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        ]}
      />
      <h1>{post.frontmatter.title} | {post.frontmatter.word}</h1>
    </div>
  )
}

export const pageQuery = graphql`
  query IssueByTitle($title: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      frontmatter {
        title
        word
        tags
      }
    }
  }
`
