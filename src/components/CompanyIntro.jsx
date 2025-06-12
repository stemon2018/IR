import React, { useState } from "react";
import "../styles/CompanyIntro.scss";
import { useLanguage } from "../LanguageContext";

// Korean images
import image1KR from "../images/2.회사소개/IR-01.jpg";
import image2KR from "../images/2.회사소개/IR-02.jpg";
import image3KR from "../images/2.회사소개/IR-03.jpg";
import image4KR from "../images/2.회사소개/IR-04.jpg";
import image5KR from "../images/2.회사소개/IR-05.jpg";
import image6KR from "../images/2.회사소개/IR-06.jpg";
import image7KR from "../images/2.회사소개/IR-07.jpg";

// English images
import image1EN from "../images/EN/2.About/IR-01.jpg";
import image2EN from "../images/EN/2.About/IR-02.jpg";
import image3EN from "../images/EN/2.About/IR-03.jpg";
import image4EN from "../images/EN/2.About/IR-04.jpg";
import image5EN from "../images/EN/2.About/IR-05.jpg";
import image6EN from "../images/EN/2.About/IR-06.jpg";
import image7EN from "../images/EN/2.About/IR-07.jpg";

import gif2 from "../images/2.회사소개/2회사소개 - 2.gif";
import popupIcon from "../images/ICONS/text_icon.png";

const CompanyIntro = ({ language }) => {
  const sectionId = language === "KR" ? "회사소개" : "CompanyIntro";

  const images = language === "KR"
    ? [image1KR, image2KR, image3KR, image4KR, image6KR, image5KR, image7KR]
    : [image1EN, image2EN, image3EN, image4EN, image6EN, image5EN, image7EN];

  const [activePopup, setActivePopup] = useState(null);

  const popupDataKR = {
    "IR-02": "스템온은 디지털 방식 세포치료제 유도 플랫폼 UltraRepro와 디지털 방식 약물 탑재 플랫폼을 기반으로 다양한 난치성 질환에 대하여 치료제 부터 코스메슈티컬 제품을 개발하는 바이오플랫폼 회사입니다. 이에 세포 치료제의 대명사인 줄기세포 STEM과 디지털방식 스위치 On을 합하여 회사명을 스템온으로 하였습니다.",
    "IR-03": "준비중",
    "IR-04": "스템온은 2018년 3월에 설립을 하였고 현재 직원이 24명이며 대표이사는 최근까지 의과대학교 교수로 역임하다가 지금은 스템온 대표이사로만 재직중입니다.",
    "IR-05": "스템온은 2023년 홍콩 CPA 기업인 Reanda International로 부터 향후 3년 이내에 유니콘 기업으로 성장이 가능하다고 평가를 받았습니다. ",
    "IR-06": "스템온은 최근 스템온이 갖고 있는 특허를 포함한 다양한 기술이 기술보증기금을 통해 AAA로 평가 받았습니다.",
  };

  const popupDataEN = {
    "IR-02": "Stemon is a bio-platform company that develops therapeutics and cosmeceutical products based on its UltraRepro platform for digital stem cell therapy and drug-loading technology platform for refractory diseases.",
    "IR-03": "Preparing...",
    "IR-04": "Stemon was founded in March 2018, currently has 24 employees, and the CEO previously served as a professor of medical school before becoming CEO of Stemon.",
    "IR-05": "In 2023, Hong Kong CPA company Reanda International evaluated Stemon as a potential unicorn company within 3 years.",
    "IR-06": "Stemon's patents and technologies have been evaluated as AAA grade by Korea Technology Finance Corporation.",
  };

  const popupData = language === "KR" ? popupDataKR : popupDataEN;

  return (
    <section id={sectionId} className="company-intro-section">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Company Intro ${index + 1}`} />

            {index === 1 && (
              <img src={gif2} alt="Company Intro Animation" className="overlay-gif" />
            )}

            {popupData[imageKey] && (
              <button className="popup-button" onClick={() => setActivePopup(imageKey)}>
                <img src={popupIcon} alt="Popup Icon" />
              </button>
            )}
          </div>
        );
      })}

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