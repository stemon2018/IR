import React, { useState } from "react";
import "../styles/Home.scss";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="home" className={`home-section ${isExpanded ? "expanded" : ""}`}
    style={{
      backgroundImage: `url("/images/background.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      {/* Background Image */}
      <div className="background-overlay"></div>

      {/* Main Title */}
      <h1 className="main-title">
        디지털 세포 치료제 (줄기세포, 엑소좀) 유도 플랫폼 <br />
        디지털 약물 탑재 플랫폼
      </h1>

      {/* Text Highlight Section */}
      <div className="highlight-section">
        <span>새로운 </span>
        <span className="highlight-box">생명공학</span>
        <span>, 새로운 </span>
        <span className="highlight-box">생명과학</span>
        <span>, 새로운 </span>
        <span className="highlight-box">미래</span>
        <span> (디지털 세포 치료)</span>
      </div>

      {/* Expandable Section */}
      <div className={`expandable-box ${isExpanded ? "open" : ""}`}>
        <p className="description">
          스템온은 디지털 방식 엑소좀 유도 자동화 플랫폼 울트라리프로와 <br />
          디지털방식 엑소좀 내 약물탑재 자동화 플랫폼 <b>DDDS</b>를 이용한 <br />
          연구용 엑소좀 및 미용제품을 개발하는 바이오 플랫폼 회사이다.
        </p>

        {/* Expand Button */}
        <button className="expand-btn" onClick={handleToggle}>
          {isExpanded ? "접기 ▲" : "더 보기 ▼"}
        </button>

        {/* Hidden Component (Only Show When Expanded) */}
        {isExpanded && (
          <div className="expanded-content">
            <div className="product-card">
              <img src="/images/ultrarepro.png" alt="UltraRepro" />
              <h3>UltraRepro</h3>
              <p>Digital Induction of Cell Therapies</p>
            </div>
            <div className="product-card">
              <img src="/images/ddds.png" alt="DDDS" />
              <h3>DDDS</h3>
              <p>Digital Drug Delivery System</p>
            </div>
            <video className="video-player" controls>
              <source src="/videos/presentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;