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
        name: `niceb5y web`,
        short_name: `niceb5y`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#0075C1`,
        display: `minimal-ui`,
        icon: `src/images/nw-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
          ],
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
