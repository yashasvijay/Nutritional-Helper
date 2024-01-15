// Home.js
import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Nutrition Helper!</h2>
      <p>Discover a healthier you with our nutrition tools.</p>

      <div className="action-buttons">
        <Link to="/scanner" className="btn-primary">Nutrition Scanner</Link>
        <Link to="/tracker" className="btn-secondary">Macro Tracker</Link>
      </div>

      <div className="random-images">
        <img src="https://via.placeholder.com/150" alt="Random Image 1" />
        <img src="https://via.placeholder.com/150" alt="Random Image 2" />
        <img src="https://via.placeholder.com/150" alt="Random Image 3" />
      </div>
    </div>
  );
};

export default Home;