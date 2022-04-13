import React from 'react';

import Hero from "../components/home/Hero";
import Overview from '../components/home/Overview';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TheServices from '../components/home/TheServices';
import TheContact from '../components/home/TheContact';



const Home = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <FeaturedProducts />
      <TheServices />
      <TheContact />
    </main>
  );
};

export default Home;
