import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import TestimonialSection from './TestimonialSection';
import SubscribeComponent from '../SubscribeComponent';
import Footer from '../Footer';

const Reviews = () => {
  // Define the breadcrumb content
  const breadcrumbContent = [
    { label: 'Home', link: '/' },
    { label: 'Reviews' },
  ];

  return (
    <div>
      <Navbar />
      <Breadcrumb content={breadcrumbContent} pageTitle="Reviews"  />
      <TestimonialSection/>
      <SubscribeComponent />
      <Footer />
    </div>
  );
};

export default Reviews;
