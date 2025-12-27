import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    // In production, replace with actual resume PDF URL
    const resumeUrl = 'https://drive.google.com/file/d/1AK5rWUfLFMVT8IJjhPMg9t1Nb2tXrf0E/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rashid_Ansari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rashid Ansari</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            MCA student specializing in Java, Spring Boot, React.js, and modern web technologies. 
            Passionate about building scalable software solutions with clean code and strong fundamentals.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <button onClick={handleDownloadResume} className="btn btn-outline">
              Download Resume
            </button>
          </div>
          
          <div className="hero-links">
            <a href="https://github.com/RashidDeveloper786" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rashid-ansari-4a24362b9/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:rashidansari99101@gmail.com">
              Email
            </a>
            <a href="tel:+918112667861">
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;