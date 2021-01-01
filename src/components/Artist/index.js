
import React from 'react';

import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import s from './styles.module.scss'

export default function Artist() {
const data = useStaticQuery(graphql`
    {
      firstImage: imageSharp(fluid: {originalName: {eq: "artistRed.jpg"}}) {
        fluid(fit: COVER) {
                      ...GatsbyImageSharpFluid_withWebp

        }
      }
      secondImage: imageSharp(fluid: {originalName: {eq: "artistBW.jpg"}}) {
        fluid(fit: COVER) {
                      ...GatsbyImageSharpFluid_withWebp

        }
      }
    }
  `)

  const imageDataFirst= data.firstImage.fluid
 const imageDataSecond= data.secondImage.fluid

  return <section className={s.section}>
  <div className={s.imageWrapFirst}>
  <Image fluid={imageDataFirst}/>
  </div>
  <div className={s.text}>
  <h1 >feautred artist</h1>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
  </div>
    <div className={s.imageWrapSecond}>
    <Image fluid={imageDataSecond}/>
    </div>
  </section>;
}
