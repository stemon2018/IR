import React from "react";
import "../styles/CompanyIntro.scss";

const CompanyIntro = () => {
  return (
    <section id="회사소개" className="company-intro">
      <h2>회사소개</h2>
      <img src="/images/company.jpg" alt="Company Overview" />
      <p>STEMON is dedicated to revolutionizing technology...</p>
    </section>
  );
};

export default CompanyIntro;