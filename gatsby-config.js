module.exports = {
  siteMetadata: {
    title: `Nuuk`,
    description: `Le site de Nuuk sur Gatsby.`,
    author: `@bonakor`,
    wordPressUrl: `https://gatsby.nuuk.fr`,
    siteLink: `/`,
  },
  plugins: [
    // Setup WPGraphQL.com to be the source
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://gatsby.nuuk.fr/graphql`,
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `https://gatsby.nuuk.fr/`,
        uploadsUrl: `https://gatsby.nuuk.fr/wp-content/uploads/`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: `WPGraphQL`,
      },
    },
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
        name: `gatsby-wpgraphql-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f0f2f5`,
        theme_color: `#001529`,
        display: `minimal-ui`,
        icon: `src/images/wpgraphql-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    //`gatsby-plugin-offline`,
  ],
}
