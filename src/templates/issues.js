import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

export default function Template({ data, pathContext }) {
  const post = data.markdownRemark
  const site = data.site.siteMetadata
  const { next, prev } = pathContext
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
      <p>({post.frontmatter.image})</p>
      <Img resolutions={data.issueImage.resolutions} />
      <p>{keywords}</p>
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
        image
      }
    }
    issueImage: imageSharp(id: { regex: "/001/" }) {
      resolutions(width: 250, height: 250) {
        ...GatsbyImageSharpResolutions
      }
    }
    issueImage2: imageSharp(id: { eq: "/images/002.jpg" }) {
      resolutions(width: 250, height: 320) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
