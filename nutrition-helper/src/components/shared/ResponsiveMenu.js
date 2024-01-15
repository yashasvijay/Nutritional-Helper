// ResponsiveMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';

const ResponsiveMenu = () => {
  return (
    <div className="responsive-menu">
      <Link to="/">Home</Link>
      <Link to="/scanner">Scanner</Link>
      <Link to="/tracker">Macro Tracker</Link>
      <Link to="/allergen">Allergen</Link>
      <Link to="/login" className="btn-primary">Login</Link>
      <Link to="/signup" className="btn-secondary">Sign Up</Link>
    </div>
  );
};

export default ResponsiveMenu;