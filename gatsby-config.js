/** @format */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Richboymafia',
    description: 'Recordlabel Beats Studio',
    author: 'liuba.larousse',
    url: 'https://www.richboymafia.com',
    image: './src/images/hero.jpg', // No trailing slash allowed!
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
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId:
          '1YmFasxCXF11SzdXGHo61u01qKTqxDcJWAjjduTGgXLA',
        // spreadsheetName: "MySheet",
        // typePrefix: "GoogleSpreadsheet"
        credentials: JSON.parse(
          process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS
        ),
        filterNode: () => true,
        mapNode: (node) => node,
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
