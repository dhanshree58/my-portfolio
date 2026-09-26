import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container contact-container">
        <div className="section-heading center-heading"><span>05.</span><h2>Let's Connect</h2></div>
        <p className="contact-description">I'm always interested in discussing software development, projects, internships, collaborations and new opportunities.</p>
        <a href="mailto:dhanshreenagrale58@gmail.com" className="primary-btn contact-button">Say Hello →</a>
        <div className="contact-links">
          <a href="mailto:dhanshreenagrale58@gmail.com">Email</a>
          <a href="https://github.com/dhanshree58" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dhanshri-n-819972310/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}