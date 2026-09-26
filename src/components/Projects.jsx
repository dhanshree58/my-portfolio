import React from "react";

const projects = [
  ["01", "Online Book Store", "A full-stack online bookstore where users can browse books and interact with an e-commerce style interface.", ["React", "Spring Boot", "MySQL"]],
  ["02", "Student Result Manager", "A result management system for students, faculty and administrators with role-based functionality and automated result calculation.", ["React", "Spring Boot", "MySQL"]],
  ["03", "Inventory Management System", "An offline-first inventory application for managing products, stock transactions, warehouses and inventory history.", ["Kotlin", "Android", "Room", "SQLite"]],
  ["04", "TaskPilot", "A productivity application for managing assignments, notes, expenses and goals with offline data storage and reminders.", ["Flutter", "Dart", "SQLite"]],
  ["05", "GramNet", "A LoRa-based mesh networking concept designed to enable communication between nodes without conventional internet connectivity.", ["ESP32", "LoRa", "C++", "Raspberry Pi"]],
  ["06", "MediKiosk", "An AI-assisted clinical history-taking concept designed to collect patient information through adaptive questioning and organize medical history.", ["React", "FastAPI", "AI", "OCR"]]
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-heading"><span>03.</span><h2>Featured Projects</h2></div>
        <p className="section-description">Some of the projects I've worked on while learning and building real-world applications.</p>
        <div className="projects-grid">
          {projects.map(([number, title, description, tech]) => (
            <article className="project-card" key={number}>
              <div className="project-top">
                <span className="project-number">{number}</span>
                <a href="https://github.com/dhanshree58" target="_blank" rel="noreferrer" className="github-icon">↗</a>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tech">{tech.map((t) => <span key={t}>{t}</span>)}</div>
              <a href="https://github.com/dhanshree58" target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}