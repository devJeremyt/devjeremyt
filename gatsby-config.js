module.exports = {
  siteMetadata: {
    title: `DevJeremyT`,
    description: `A portfolio site for Jeremy Trimble`,
    author: `Jeremy Trimble`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DevJeremyT`,
        short_name: `DevJeremyT`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}