// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Nutritional Helper. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  background: '#F0EAD2',
  color: '#7B3532',
  textAlign: 'center',
  padding: '.6rem',
};

export default Footer;