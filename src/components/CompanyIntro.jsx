import React from "react";
import "../styles/CompanyIntro.scss";

// Import all images
import image1 from "../images/2.회사소개/IR-01.jpg";
import image2 from "../images/2.회사소개/IR-02.jpg";
import image3 from "../images/2.회사소개/IR-03.jpg";
import image4 from "../images/2.회사소개/IR-04.jpg";
import image5 from "../images/2.회사소개/IR-05.jpg";
import image6 from "../images/2.회사소개/IR-06.jpg";
import image7 from "../images/2.회사소개/IR-07.jpg";

const CompanyIntro = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <section id="회사소개" className="company-intro-section">
      {images.map((img, index) => (
        <div key={index} className="image-container">
          <img src={img} alt={`Company Intro ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default CompanyIntro;