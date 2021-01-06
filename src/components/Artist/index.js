/** @format */

import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import s from './styles.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

export default function Artist() {
  const data = useStaticQuery(graphql`
    {
      firstImage: imageSharp(
        fluid: { originalName: { eq: "artistRed.jpg" } }
      ) {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      secondImage: imageSharp(
        fluid: { originalName: { eq: "artistBW.jpg" } }
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

  const imageDataFirst = data.firstImage.fluid;
  const imageDataSecond = data.secondImage.fluid;

  return (
    <section className={s.section}>
      <div className={s.imageWrapFirst}>
        <Image
          fluid={imageDataFirst}
          alt={data.fragment.artistTitle}
        />
      </div>
      <div className={s.text}>
        <h1>{data.fragment.artistTitle}</h1>
        <Link to='https://www.youtube.com/channel/UCANF5DEVyxi8OJK53AksGzg'>
          <p className={s.name}>
            Scotty Jamz
            <IoIosArrowForward className={s.icon} />
          </p>
        </Link>
        <p>{data.fragment.artistText}</p>
      </div>
      <div className={s.imageWrapSecond}>
        <Image fluid={imageDataSecond} />
      </div>
    </section>
  );
}
