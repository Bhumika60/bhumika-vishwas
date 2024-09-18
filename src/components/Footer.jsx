import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-center py-4 mt-8">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} Bhumika Vishwas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
