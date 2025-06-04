import React, { useState } from "react";
import "../styles/CompanyIntro.scss";

import image1 from "../images/2.회사소개/IR-01.jpg";
import image2 from "../images/2.회사소개/IR-02.jpg";
import image3 from "../images/2.회사소개/IR-03.jpg";
import image4 from "../images/2.회사소개/IR-04.jpg";
import image5 from "../images/2.회사소개/IR-05.jpg";
import image6 from "../images/2.회사소개/IR-06.jpg";
import image7 from "../images/2.회사소개/IR-07.jpg";

import gif2 from "../images/2.회사소개/2회사소개 - 2.gif";
import popupIcon from "../images/ICONS/text_icon.png";

const CompanyIntro = () => {
  const images = [image1, image2, image3, image4, image6, image5, image7];

  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "스템온은 디지털 방식 세포치료제 유도 플랫폼 UltraRepro와 디지털 방식 약물 탑재 플랫폼을 기반으로 다양한 난치성 질환에 대하여 치료제 부터 코스메슈티컬 제품을 개발하는 바이오플랫폼 회사입니다. 이에 세포 치료제의 대명사인 줄기세포 STEM과 디지털방식 스위치 On을 합하여 회사명을 스템온으로 하였습니다.",
    "IR-03": "준비중",
    "IR-04": "스템온은 2018년 3월에 설립을 하였고 현재 직원이 24명이며 대표이사는 최근까지 의과대학교 교수로 역임하다가 지금은 스템온 대표이사로만 재직중입니다.",
    "IR-05": "스템온은 2023년 홍콩 CPA 기업인 Reanda International로 부터 향후 3년 이내에 유니콘 기업으로 성장이 가능하다고 평가를 받았습니다. ",
    "IR-06": "스템온은 최근 스템온이 갖고 있는 특허를 포함한 다양한 기술이 기술보증기금을 통해 AAA로 평가 받았습니다.",
  };

  return (
    <section id="회사소개" className="company-intro-section">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Company Intro ${index + 1}`} />

            {/* Place GIF on the second image (IR-02) */}
            {index === 1 && (
              <img src={gif2} alt="Company Intro Animation" className="overlay-gif" />
            )}

            {/* Popup Button (Only for specific images) */}
            {popupData[imageKey] && (
              <button className="popup-button" onClick={() => setActivePopup(imageKey)}>
                <img src={popupIcon} alt="Popup Icon" />
              </button>
            )}
          </div>
        );
      })}

      {/* Popup Modal */}
      {activePopup && (
        <div className="popup-overlay" onClick={() => setActivePopup(null)}>
          <div className="popup-content">
            <button className="close-popup" onClick={() => setActivePopup(null)}>✕</button>
            <p>{popupData[activePopup]}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyIntro;