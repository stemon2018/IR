import React from "react";
import "../styles/CompanyIntro.scss";

// Import all images
import image1 from "../images/회사소개/IRL-01.png";
import image2 from "../images/회사소개/IRL-02.png";
import image3 from "../images/회사소개/IRL-03.png";
import image4 from "../images/회사소개/IRL-04.png";
import image5 from "../images/회사소개/IRL-05.png";
import image6 from "../images/회사소개/IRL-06.png";
import image7 from "../images/회사소개/IRL-07.png";
import image8 from "../images/회사소개/IRL-08.png";

const CompanyIntro = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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