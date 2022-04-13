import React from 'react';

import Hero from "../components/home/Hero";
import Overview from '../components/home/Overview';
import FeaturedProducts from '../components/home/FeaturedProducts';



const Home = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <FeaturedProducts />
    </main>
  );
};

export default Home;
