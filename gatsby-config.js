module.exports = {
  siteMetadata: {
    title: `Depression Boy`,
    siteUrl: `http://artofpkl.com`,
    description: `Depression Boy site (jam stack dev)`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/issues`,
        name: 'issues',
      },
    },
    'gatsby-transformer-remark'
  ]
};
