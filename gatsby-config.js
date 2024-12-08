/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: "/StannumHRCLLC",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      },
    },
  ],
}
