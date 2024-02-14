import React from 'react';
import Navbar from '../Navbar'; // adjust the path as needed
import BannerSection from './BannerSection';
import ServiceSection from './ServiceSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import PortfolioSection from './PortfolioSection';
import TopTwoTestimonials from './TopTwoTestimonials';
import SubscribeComponent from '../SubscribeComponent';
import Footer from '../Footer';

const IndexPage = () => {
 return (
    <div>
      <Navbar />
      <BannerSection/>
      <ServiceSection/>
      <AboutSection/>
      <SkillsSection/>
      <PortfolioSection/>
      {/* <MarqueeComponent/> */}
      <TopTwoTestimonials/>
      <SubscribeComponent/>
      <Footer/>
    </div>
 );
};

export default IndexPage;
