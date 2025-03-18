import React from "react";
import "../styles/Home.scss";

import image from "../images/1.Home/IR-Home.jpg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="image-container">
        <img src={image} alt="Home Page" />
      </div>
    </section>
  );
};

export default Home;