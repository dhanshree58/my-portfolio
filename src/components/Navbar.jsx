import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a
          className="logo"
          href="#home"
          onClick={() => setOpen(false)}
        >
          D<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;