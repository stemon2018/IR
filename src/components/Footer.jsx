import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p><strong>담당자 연락처 :</strong> 권지민 차장 (경영전략팀)</p>
        <p>Tel: 031-622-7723 | E-mail: jimin@stemon.co.kr</p>
      </div>

      <div className="button-container">
        <a href="https://saidakhmad77.github.io/Q-A/" target="_blank" rel="noopener noreferrer">
          <button className="qa-button">Visit Our Q&A Page</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;