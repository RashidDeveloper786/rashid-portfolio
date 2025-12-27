import React from 'react';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Greater Noida Institute of Technology (GNIOT), Greater Noida',
      duration: 'Expected 2026',
      status: 'Pursuing'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'School of Management Sciences, Varanasi (MGKVP)',
      duration: 'Completed',
      details: '8.49 CGPA'
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'M.J.R.P. Academy, Tiwaripur Ghazipur',
      duration: 'Completed',
      details: '65.6%'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate software developer currently pursuing my Master of Computer Applications 
              with strong foundations in computer science. My expertise lies in full-stack development 
              using Java, Spring Boot, React.js, and modern web technologies.
            </p>
            <p>
              I enjoy building reliable software solutions that solve real-world problems, with a focus on 
              clean code, scalability, and user experience. I'm seeking opportunities to contribute to 
              impactful projects while continuously growing as a developer.
            </p>
          </div>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="education-duration">{edu.duration}</span>
                  </div>
                  <p className="institution">{edu.institution}</p>
                  {edu.details && <p className="details">{edu.details}</p>}
                  {edu.status && <span className="status">{edu.status}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;