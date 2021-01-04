/** @format */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import s from './styles.module.scss';
import { mainButton } from '~/styles/components.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';

export default function Hero() {
  const data = useStaticQuery(
    graphql`
      {
        background: imageSharp(
          fluid: { originalName: { eq: "hero.jpg" } }
        ) {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        label: imageSharp(
          fluid: { originalName: { eq: "labelwhite.png" } }
        ) {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `
  );

  // Set ImageData.
  const backgroundImage = data.background.fluid;
  const labelImage = data.label.fluid;
  return (
    <BackgroundImage
      className={s.bg}
      fluid={backgroundImage}
    >
      <div className={s.layerWrap}>
        <Link to='https://pocketsuite.io/book/richboymafia'>
          <button className={`${mainButton} ${s.button}`}>
            book now
          </button>
        </Link>
        <div className={s.labelWrap}>
          <Image className={s.label} fluid={labelImage} />
        </div>
        <button
          className={s.icon}
          aria-label='scroll'
          onClick={() => scrollTo('#about')}
        >
          <IoIosArrowDown />
        </button>
      </div>
    </BackgroundImage>
  );
}
