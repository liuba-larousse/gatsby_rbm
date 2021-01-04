/** @format */

import * as React from 'react';
import Hero from '../components/Hero/index';
import About from '../components/About/index';
import Artist from '../components/Artist/index';
import Music from '../components/Music/index';
import Video from '../components/Video/index';
import ActionCall from '../components/ActionCall/index';
import Footer from '../components/Footer/index';
import '../styles/main.scss';
import SEO from '../components/SEO/SEO';

// markup
const IndexPage = () => {
  return (
    <>
      <SEO title='Richboymafia.Recordlabel' />
      <Hero />
      <About />
      <Artist />
      <Music />
      <Video />
      <ActionCall />
      <Footer />
    </>
  );
};

export default IndexPage;
