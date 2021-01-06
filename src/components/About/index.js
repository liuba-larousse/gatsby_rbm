/** @format */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import s from './styles.module.scss';
import Svg from './svg';

export default function About() {
  const data = useStaticQuery(graphql`
    {
      imageSharp(
        fluid: { originalName: { eq: "about.jpg" } }
      ) {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      fragment: googleSpreadsheetContent {
        ...PageFields
      }
    }
  `);

  const imageData = data.imageSharp.fluid;
  return (
    <section className={s.section} id='about'>
      <div className={s.svg}>
        <Svg />
      </div>
      <div className={s.text}>
        <h1>{data.fragment.aboutTitle}</h1>
        <p>{data.fragment.aboutText}</p>
      </div>
      <div className={s.imageWrap}>
        <Image fluid={imageData} alt='mixing console' />
      </div>
    </section>
  );
}
