import React from "react";

const groups = [
  ["Frontend", ["HTML", "CSS", "JavaScript", "React", "Vite"]],
  ["Backend", ["Java", "Spring Boot", "Python", "FastAPI", "REST APIs"]],
  ["Database", ["MySQL", "SQLite", "SQL", "Room Database"]],
  ["Tools", ["Git", "GitHub", "VS Code", "Android Studio", "Postman"]]
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="section-heading"><span>02.</span><h2>Skills</h2></div>
        <p className="section-description">Technologies and tools I use to design, build and deploy applications.</p>
        <div className="skills-grid">
          {groups.map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>
              <div className="skill-list">{items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}