require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `gatsby-shopify`,
    description: `Gatsby Shopify Starter Example.`,
    author: `@iamskok`,
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
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "ShopifyAdmin",
        // This is field under which it's accessible
        fieldName: "admin",
        // Url to query from
        url: `https://${process.env.SHOP_NAME}.myshopify.com/admin/api/graphql.json`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'X-Shopify-Access-Token': `${process.env.ADMIN_PASSWORD}`,
          // 'Content-Type': 'application/graphql'
        },
        fetchOptions: {
          method: 'POST'
        },
        refetchInterval: 60
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
