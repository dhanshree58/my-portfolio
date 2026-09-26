import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Dhanshree <span>Nagrale</span></h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-description">
            I build modern, responsive and practical web applications using
            React, Java, Spring Boot, Python, FastAPI and databases.
            I enjoy turning ideas into real-world software.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View My Projects →</a>
            <a href="/resume.pdf" className="secondary-btn" target="_blank" rel="noreferrer">View Resume</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/dhanshree58" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/dhanshri-n-819972310/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:dhanshreenagrale58@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header"><i></i><i></i><i></i></div>
            <div className="code-content">
              <p><span className="purple">const</span> <span className="blue">developer</span> = {"{"}</p>
              <p className="indent">name: <span className="green">"Dhanshree"</span>,</p>
              <p className="indent">role: <span className="green">"Full Stack Developer"</span>,</p>
              <p className="indent">passion: <span className="green">"Building"</span>,</p>
              <p className="indent">learning: <span className="green">true</span></p>
              <p>{"}"};</p>
              <p className="cursor">_</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">↓ Scroll to explore</div>
    </section>
  );
}