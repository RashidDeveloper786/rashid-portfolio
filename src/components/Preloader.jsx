import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="spinner"></div>
        <h3>Loading Portfolio...</h3>
      </div>
    </div>
  );
};

export default Preloader;