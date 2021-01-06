/** @format */

import React from 'react';
import Svg from './svg';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import s from './styles.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

export default function Music() {
  const data = useStaticQuery(graphql`
    {
      imageSharp(
        fluid: { originalName: { eq: "musicBW.jpg" } }
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

  const dataImage = data.imageSharp.fluid;
  return (
    <section className={s.section}>
      <div className={s.text}>
        <h1>{data.fragment.musicTitle}</h1>
        <Link to='https://www.beatstars.com/10kgohard/feed'>
          <p className={s.name}>
            Sean Gordon
            <IoIosArrowForward className={s.icon} />
          </p>
        </Link>
        <p>{data.fragment.musicText}</p>
      </div>
      <div className={s.imageWrap}>
        <Image
          fluid={dataImage}
          alt={data.fragment.artistTitle}
        />
        <div className={s.svg}>
          <Svg />
        </div>
      </div>
    </section>
  );
}
