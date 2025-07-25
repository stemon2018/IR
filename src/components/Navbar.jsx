import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import brochureKO from "../images/ICONS/Brochure button_KR.png";
import brochureEN from "../images/ICONS/Brochure button_ENG.png";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// Import flag icons
import krFlag from "../assets/flags/kr.png";
import usFlag from "../assets/flags/us.png";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = useMemo(() => (
    [
      "home",
      language === "KR" ? "회사소개" : "CompanyIntro",
      language === "KR" ? "핵심역량기술" : "CoreTechnologies",
      language === "KR" ? "비즈니스파이프라인" : "BusinessPipeline",
      language === "KR" ? "특허/인증" : "Patents"
    ]
  ), [language]);

  const sectionLabels = useMemo(() => (
    language === "KR"
      ? ["홈", "회사소개", "핵심역량기술", "비즈니스파이프라인", "특허/인증"]
      : ["Home", "Company Intro", "Core Technologies", "Business Pipeline", "Patents"]
  ), [language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let foundSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const middleOfScreen = window.innerHeight / 2;
          if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="language-brochure-container">
        <button onClick={toggleLanguage} className="flag-button">
          <img
            src={language === "KR" ? usFlag : krFlag}
            alt="Language Toggle"
            className="flag-icon"
          />
        </button>

        <a
          href="https://linktr.ee/stemon"
          target="_blank"
          rel="noopener noreferrer"
          className="brochure-image-button"
        >
          <img
            src={language === "KR" ? brochureKO : brochureEN}
            alt="Brochure"
            className="brochure-image"
          />
        </a>
      </div>

      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {sections.map((section, index) => (
          <li key={section}>
          <Link
          to={section}
          smooth="easeInOutQuart"
          duration={600}
          offset={-70}
          className={activeSection === section ? "active" : ""}
         onClick={() => setMenuOpen(false)}
        > 
        {sectionLabels[index]}
        </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
