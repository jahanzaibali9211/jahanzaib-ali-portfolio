import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Index from './components/Home/Index';
import Reviews from './components/Review/Reviews';
import ContactUs from './components/Contact/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
