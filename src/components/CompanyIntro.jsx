import React from "react";
import "../styles/CompanyIntro.scss";
import placeholderImage from "../images/IRL-01.png";

const CompanyIntro = () => {
  return (
    <section id="회사소개" className="company-intro-section">
      {/* Full-page image placeholder */}
      <div className="image-placeholder">
        <img src={placeholderImage} alt="Company Introduction Preview" />
      </div>
    </section>
  );
};

export default CompanyIntro;