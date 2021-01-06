/** @format */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import s from './styles.module.scss';
import { Link } from 'gatsby';
import { IoIosArrowForward } from 'react-icons/io';

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
      fragment: googleSpreadsheetContent {
        ...PageFields
      }
    }
  `);
  const dataImage = data.imageSharp.fluid;
  return (
    <section className={s.section}>
      <div className={s.text}>
        <h1>{data.fragment.videoTitle}</h1>
        <Link to='/'>
          <p className={s.name}>
            kareem morgan
            <IoIosArrowForward className={s.icon} />
          </p>
        </Link>
        <p>{data.fragment.videoText}</p>
      </div>
      <div className={s.imageWrap}>
        <Image fluid={dataImage} />
      </div>
    </section>
  );
}
