import React from "react";
import "../styles/Patents.scss";
import placeholderImage from "../images/IRL-03.png";

const Patents = () => {
  return (
    <section id="특허/인증" className="patents">
      <div className="image-placeholder">
        <img src={placeholderImage} alt="Patents & Certifications" />
      </div>
    </section>
  );
};

export default Patents;