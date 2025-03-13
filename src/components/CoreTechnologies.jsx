import React from "react";
import "../styles/CoreTechnologies.scss";
import placeholderImage from "../images/IRL-02.png";

const CoreTechnologies = () => {
  return (
    <section id="핵심역량기술" className="core-section">
      {/* Full-page image placeholder */}
      <div className="image-placeholder">
        <img src={placeholderImage} alt="Core Technologies" />
      </div>

      {/* Video Element Positioned Exactly on the Image */}
{/*      <div className="video-container">
        <video controls autoplay loop muted>
          <source src="/videos/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </section>
  );
};

export default CoreTechnologies;