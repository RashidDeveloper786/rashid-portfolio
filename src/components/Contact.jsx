import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Phone',
      value: '+91-8112667861',
      link: 'tel:+918112667861'
    },
    {
      label: 'Email',
      value: 'rashidansari99101@gmail.com',
      link: 'mailto:rashidansari99101@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Rashid Ansari',
      link: 'https://www.linkedin.com/in/rashid-ansari-4a24362b9/'
    },
    {
      label: 'GitHub',
      value: 'RashidDeveloper786',
      link: 'https://github.com/RashidDeveloper786'
    },
    {
      label: 'Portfolio',
      value: 'Live Portfolio',
      link: 'https://my-profile-two-blush.vercel.app/'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent! (This is a demo - implement your backend)');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <strong>{info.label}:</strong>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;