import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setHidden(false); // ✅ Show navbar when scrolling

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setHidden(true); // ✅ Hide navbar if no scroll activity
      }, 2000); // ⏳ Hide after 2 seconds of no scrolling

      const sections = ["home", "회사소개", "핵심역량기술", "비즈니스파이프라인", "특허/인증"];
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
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["home", "회사소개", "핵심역량기술", "비즈니스파이프라인", "특허/인증"].map((section) => (
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