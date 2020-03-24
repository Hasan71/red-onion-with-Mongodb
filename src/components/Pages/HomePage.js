import React from 'react';
import Topbanner from '../Topbanner/Topbanner';
import Food from '../Food/Food';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import FooterTop from '../FooterTop/FooterTop';
import FooterBottom from '../FooterBottom/FooterBottom';

const HomePage = () => {
  return (
    <>
      <Topbanner/>
      <Food/>
      <WhyChooseUs/>
      <FooterTop/>
      <FooterBottom/>
    </>
  );
};

export default HomePage;