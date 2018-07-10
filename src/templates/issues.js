import React from 'react'
import PropTypes from 'prop-types'

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query IssueByTitle($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      frontmatter {
        title
      }
    }
  }
`
