/** @format */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import s from './styles.module.scss';

export default function Video() {
  const data = useStaticQuery(graphql`
    {
      imageSharp(
        fluid: { originalName: { eq: "video.jpg" } }
      ) {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);
  const dataImage = data.imageSharp.fluid;
  return (
    <section className={s.section}>
      <div className={s.text}>
        <h1>video production</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
      <div className={s.imageWrap}>
        <Image fluid={dataImage} />
      </div>
    </section>
  );
}
