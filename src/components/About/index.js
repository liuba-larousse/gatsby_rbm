/** @format */

import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import s from './styles.module.scss'
import Svg from './svg'

export default function About() {
  const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: {originalName: {eq: "about.jpg"}}) {
        fluid(fit: COVER) {
                      ...GatsbyImageSharpFluid_withWebp

        }
      }
    }
  `)

  const imageData= data.imageSharp.fluid
  return <section className={s.section} id="about">
<div className={s.svg}>
<Svg />
</div>
  <div className={s.text}>
  <h1>RICH BOY MAFIA</h1>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus .
</p>
  </div>
<div className={s.imageWrap}>
<Image fluid={imageData}/>
</div>
  </section>;
}
