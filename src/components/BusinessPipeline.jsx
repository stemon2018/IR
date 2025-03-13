import React from "react";
import "../styles/BusinessPipeline.scss";
import placeholderImage from "../images/IRL-04.png";

const BusinessPipeline = () => {
  return (
    <section id="비즈니스파이프라인" className="business-pipeline">
      {/* Full-page image placeholder */}
      <div className="image-placeholder">
        <img src={placeholderImage} alt="Pipeline Overview" />
      </div>
    </section>
  );
};

export default BusinessPipeline;