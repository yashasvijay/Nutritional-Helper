// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/colors.css';
import '../styles/buttons.css';

const Navbar = () => {
  return (
    <nav style={{ background: 'var(--color-primary)' }}>
      <Link to="/">Home</Link>
      <Link to="/scanner">Scanner</Link>
      <Link to="/tracker">Macro Tracker</Link>
      <Link to="/allergen">Allergen</Link>
      <Link to="/login" className="btn-primary">Login</Link>
      <Link to="/signup" className="btn-secondary">Sign Up</Link>
    </nav>
  );
};

export default Navbar;