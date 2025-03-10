import React from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="overlay">
        <h1>Welcome to STEMON</h1>
        <p>Leading the Future of Biotechnology</p>
      </div> */}
    </section>
  );
};

export default Home;