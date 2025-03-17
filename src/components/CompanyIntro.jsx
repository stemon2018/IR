import React, { useState } from "react";
import "../styles/CompanyIntro.scss";

import image1 from "../images/2.회사소개/IR-01.jpg";
import image2 from "../images/2.회사소개/IR-02.jpg";
import image3 from "../images/2.회사소개/IR-03.jpg";
import image4 from "../images/2.회사소개/IR-04.jpg";
import image5 from "../images/2.회사소개/IR-05.jpg";
import image6 from "../images/2.회사소개/IR-06.jpg";
import image7 from "../images/2.회사소개/IR-07.jpg";

import popupIcon from "../images/아이콘/popup.png";

const CompanyIntro = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="회사소개" className="company-intro-section">
      {images.map((img, index) => (
        <div key={index} className="image-container">
          <img src={img} alt={`Company Intro ${index + 1}`} />

          {/* Button only on IR-06.jpg */}
          {index === 5 && (
            <button className="popup-btn" onClick={() => setIsPopupOpen(true)}>
              <img src={popupIcon} alt="Popup Button" />
            </button>
          )}
        </div>
      ))}

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>스템온 기술 평가</h2>
            <p>
              스템온은 최근 스템온이 갖고 있는 특허를 포함한 다양한 기술이 <br />
              기술보증기금을 통해 <b>AAA</b>로 평가 받았습니다.
            </p>
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyIntro;