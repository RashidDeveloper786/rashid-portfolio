import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'SQL','C', 'C++']
    },
    {
      category: 'Backend Technologies',
      skills: ['Spring', 'Spring Boot', 'Hibernate', 'RESTful APIs']
    },
    {
      category: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      category: 'Database',
      skills: ['MySQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Postman', 'Maven', 'JUnit']
    },
    {
      category: 'Concepts',
      skills: ['Object-Oriented Programming', 'Data Structures & Algorithms']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;