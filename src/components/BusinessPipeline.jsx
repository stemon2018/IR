import React from "react";
import "../styles/BusinessPipeline.scss";

import image1 from "../images/4.비즈니즈파이프라인/IR-01.jpg";
import image2 from "../images/4.비즈니즈파이프라인/IR-02.jpg";
import image3 from "../images/4.비즈니즈파이프라인/IR-03.jpg";
import image4 from "../images/4.비즈니즈파이프라인/IR-04.jpg";
import image5 from "../images/4.비즈니즈파이프라인/IR-05.jpg";
import image6 from "../images/4.비즈니즈파이프라인/IR-06.jpg";

const BusinessPipeline = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section id="비즈니스파이프라인" className="business-pipeline">
      {images.map((img, index) => (
        <div key={index} className="image-container">
          <img src={img} alt={`Business Pipeline ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default BusinessPipeline;