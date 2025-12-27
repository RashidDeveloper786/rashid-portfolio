import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Rashid Ansari</h3>
            <p>Full Stack Developer specializing in Java, Spring Boot & React.js</p>
          </div>
          
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rashid Ansari. All rights reserved.</p>
          <p>
            Designed & Developed by Rashid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;