import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-heading"><span>01.</span><h2>About Me</h2></div>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm <strong>Dhanshree Nagrale</strong>, a Computer Engineering student and aspiring Full Stack Developer who enjoys building software that solves practical problems.</p>
            <p>I work across the frontend and backend, developing responsive interfaces with React and building backend systems using Java, Spring Boot, Python and FastAPI.</p>
            <p>I also enjoy working with databases, APIs and software architecture. My projects range from inventory management and student result systems to e-commerce and innovative technology solutions.</p>
            <p>I'm continuously improving my problem-solving, development and software engineering skills while exploring new ideas and technologies.</p>
          </div>
          <div className="about-card">
            <div className="profile-placeholder"><div className="profile-letter">D</div></div>
            <h3>Dhanshree Nagrale</h3>
            <p>Computer Engineering Student</p>
            <div className="about-info">
              <div><span>Focus</span><strong>Full Stack Development</strong></div>
              <div><span>Frontend</span><strong>React</strong></div>
              <div><span>Backend</span><strong>Java / Python</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}