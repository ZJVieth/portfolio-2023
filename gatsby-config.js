/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Zino V.'s Portfolio Website`,
    siteUrl: `https://www.zjvieth.net`,
    author: 'Zino J. Vieth',
    description: 'Zino Vieth\'s portfolio site and web playground.'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/meta/z_icon_transparent.png',
      },
    },
  ]
}
