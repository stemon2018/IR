import React from "react";
import "../styles/CoreTechnologies.scss";

// Import all 10 images from "3. 핵심역량기술"
import image1 from "../images/3.핵심역량기술/IR-01.jpg";
import image2 from "../images/3.핵심역량기술/IR-02.jpg";
import image3 from "../images/3.핵심역량기술/IR-03.jpg";
import image4 from "../images/3.핵심역량기술/IR-04.jpg";
import image5 from "../images/3.핵심역량기술/IR-05.jpg";
import image6 from "../images/3.핵심역량기술/IR-06.jpg";
import image7 from "../images/3.핵심역량기술/IR-07.jpg";
import image8 from "../images/3.핵심역량기술/IR-08.jpg";
import image9 from "../images/3.핵심역량기술/IR-09.jpg";

const CoreTechnologies = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <section id="핵심역량기술" className="core-section">
      {images.map((img, index) => (
        <div key={index} className="image-container">
          <img src={img} alt={`Core Technologies ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default CoreTechnologies;