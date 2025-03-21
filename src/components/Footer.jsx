import React, { useState } from "react";
import "../styles/Footer.scss";

const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><strong>담당자 :</strong> 권지민 차장 (경영전략팀)</p>
        </div>

        <div className="button-container">
          <button className="contact-button" onClick={() => setShowDetails(!showDetails)}>
            담당자 연락처 보기
          </button>
        </div>
      </div>

      {/* Contact Details Popup */}
      {showDetails && (
        <div className="contact-popup fade-in">
          <p><strong>담당자 연락처 :</strong> 권지민 차장 (경영전략팀)</p>
          <p>📞 Tel: 031-622-7723</p>
          <p>📧 E-mail: jimin@stemon.co.kr</p>
          <button className="close-popup" onClick={() => setShowDetails(false)}>✕</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;