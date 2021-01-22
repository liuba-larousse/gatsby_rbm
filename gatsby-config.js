/** @format */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Richboymafia',
    description:
      'We equip professional artists with every element needed to thrive in the music industry',
    author: 'liuba.larousse',
    url: 'https://www.richboymafia.com',
    image:
      'https://www.richboymafia.com/static/c14076a512f6166780d9a70f9597a9c1/7c22d/about.webp', // No trailing slash allowed!
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
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
};
