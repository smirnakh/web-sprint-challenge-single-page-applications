import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home-pg">
      <Link id="order-pizza" to="/pizza" className="order-btn">
        START
      </Link>
    </div>
  );
};

export default Home;
