module.exports = {
  siteMetadata: {
    title: `niceb5y web`,
    description: ``,
    author: `niceb5y`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/nw-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
