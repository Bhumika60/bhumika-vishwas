import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const FooterWrapper = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return showFooter ? <Footer /> : null;
};

export default FooterWrapper;
