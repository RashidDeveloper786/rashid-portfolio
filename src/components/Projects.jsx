import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PG Management System',
      description: 'Full-stack application with React.js frontend and Spring Boot backend for PG management.',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Hibernate'],
      features: [
        'Token-based authentication system',
        'Dashboard analytics & real-time updates',
        'Owner-only admin portal with secure validation',
        'CRUD operations for guests, rooms, payments'
      ],
      github: 'https://github.com/RashidDeveloper786/PGMS',
      live: "https://guest-pg.vercel.app"
    },
    {
      title: 'Blog Application',
      description: 'Full-stack blog application with JWT authentication and CRUD operations.',
      technologies: ['Spring Boot', 'REST APIs', 'JWT', 'MySQL'],
      features: [
        'JWT-based authentication & authorization',
        'Complete CRUD operations for blog posts',
        'Clean, maintainable code with OOP principles',
        'Persistent data storage with MySQL'
      ],
      github: 'https://github.com/RashidDeveloper786/Blog-App'
    },
    {
      title: 'Personal Portfolio',
      description: 'Professional portfolio website showcasing projects and skills.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Responsive design for all devices',
        'Interactive UI with smooth animations',
        'Project showcase with live demos',
        'Contact form integration'
      ],
      github: 'https://github.com/RashidDeveloper786/my-portfolio',
      live: 'https://my-profile-two-blush.vercel.app'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;