/** @format */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Richboymafia',
     description: 'Recordlabel Beats Studio',
            author: 'liuba.larousse'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-smoothscroll`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
