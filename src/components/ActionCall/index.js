/** @format */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { mainButton } from '~/styles/components.module.scss';
import s from './styles.module.scss';
import { Link } from 'gatsby';

export default function ActionCall() {
  const data = useStaticQuery(
    graphql`
      {
        label: imageSharp(
          fluid: { originalName: { eq: "labelblack.png" } }
        ) {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        fragment: googleSpreadsheetContent {
          ...PageFields
        }
      }
    `
  );

  // Set ImageData.

  const labelImage = data.label.fluid;
  return (
    <section className={s.section}>
      <div className={s.labelWrap}>
        {' '}
        <Image fluid={labelImage} alt='label' />
      </div>
      <div className={s.text}>
        <h1>{data.fragment.workWithUsTitle}</h1>
        <p>{data.fragment.workWithUsText}</p>
        <Link to='https://pocketsuite.io/book/richboymafia'>
          <button className={`${mainButton} ${s.button}`}>
            book now
          </button>
        </Link>
      </div>
    </section>
  );
}
