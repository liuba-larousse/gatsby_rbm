/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  );

  const metaDescription =
    description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const metaImage = site.siteMetadata.image;

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name='description' content={metaDescription} />
      <meta name='image' content={metaImage} />
      <link rel='canonical' href={url} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={url} />

      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
      />
      <meta property='og:image' content={image} />

      {/* Twitter Card tags */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />

      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta name='twitter:image' content={metaImage} />
    </Helmet>
  );
}

SEO.defaultProps = {
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
