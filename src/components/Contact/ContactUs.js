import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import ContactSection from './ContactSection';
import SubscribeComponent from '../SubscribeComponent';
import Footer from '../Footer';

const ContactUs = () => {
  // Define the breadcrumb content
  const breadcrumbContent = [
    { label: 'Home', link: '/' },
    { label: 'Contact' },
  ];

  return (
    <div>
      <Navbar />
      <Breadcrumb content={breadcrumbContent} pageTitle="Contact me for more info" />
      <ContactSection/>
      <SubscribeComponent />
      <Footer />
    </div>
  );
};

export default ContactUs;
