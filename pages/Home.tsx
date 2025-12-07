import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Methodology from '../components/Methodology';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Portfolio />
      <Methodology />
      <About />
    </>
  );
};

export default Home;