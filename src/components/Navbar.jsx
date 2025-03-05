import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png"; // Make sure the logo is inside src/assets/

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "company-intro", "core-tech", "business", "patents"];
      let foundSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul>
        {["home", "company-intro", "core-tech", "business", "patents"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={800}
              className={activeSection === section ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {section.replace("-", " ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;