import React, { useState } from "react";
import "../styles/Footer.scss";
import { useLanguage } from "../LanguageContext";

const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { language } = useLanguage();

  // Bilingual text
  const contactTitle = language === "KR" ? "담당자" : "Contact ";
  const buttonLabel = language === "KR" ? "담당자 연락처 보기" : "View Contact Info";
  const contactDetailTitle = language === "KR" ? "담당자 연락처" : "Contact Info";

  // Name & position bilingual
  const contactName = language === "KR"
    ? "경영전략팀"
    : "Business Strategy Team";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><strong>{contactTitle} :</strong> {contactName}</p>
        </div>

        <div className="button-container">
          <button className="contact-button" onClick={() => setShowDetails(!showDetails)}>
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* Contact Details Popup */}
      {showDetails && (
        <div className="contact-popup fade-in">
          <p><strong>{contactDetailTitle} :</strong> {contactName}</p>
          <p>📞 Tel: 031-622-7723</p>
          <p>📧 E-mail: jimin@stemon.co.kr</p>
          <button className="close-popup" onClick={() => setShowDetails(false)}>✕</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;