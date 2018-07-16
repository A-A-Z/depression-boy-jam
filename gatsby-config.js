module.exports = {
  siteMetadata: {
    title: `Depression Boy`,
    siteUrl: `https://depressionboy.art`,
    description: `Depression Boy site (jam stack dev)`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/issues`,
        name: 'issues',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'images',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
