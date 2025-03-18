import React, { useState } from "react";
import "../styles/Patents.scss";

import image1 from "../images/5.특허, 인증/IR-01.jpg";
import image2 from "../images/5.특허, 인증/IR-02.jpg";
import image3 from "../images/5.특허, 인증/IR-03.jpg";
import image4 from "../images/5.특허, 인증/IR-04.jpg";
import image5 from "../images/5.특허, 인증/IR-05.jpg";
import image6 from "../images/5.특허, 인증/IR-06.jpg";
import image7 from "../images/5.특허, 인증/IR-07.jpg";
import image8 from "../images/5.특허, 인증/IR-08.jpg";
import image9 from "../images/5.특허, 인증/IR-09.jpg";

import popupIcon from "../images/ICONS/text_icon.png";

const Patents = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "스템온은 초음파를 활용한 디지털 방식 세포 치료제 유도 기술에 대한 핵심 특허를 보유하고 있습니다.",
    "IR-03": "스템온의 핵심 기술인 UltraRepro 플랫폼과 관련된 특허는 미국, 유럽, 일본 등 글로벌 시장에서 등록 완료되었습니다.",
    "IR-04": "스템온은 엑소좀 기반 치료제 및 약물 전달 기술과 관련하여 다양한 특허를 확보하고 있으며, 지속적으로 연구개발을 통해 특허 포트폴리오를 확장하고 있습니다.",
    "IR-05": "스템온의 기술은 다수의 국제 학술지에 발표되었으며, 기술력을 인정받아 여러 글로벌 기업들과 공동 연구를 진행하고 있습니다.",
    "IR-06": "스템온은 자체 개발한 초음파 유도 방식 엑소좀 유도 및 약물탑재 기술로 국내 및 해외에서 다수의 특허를 보유하고 있습니다.",
    "IR-07": "스템온은 기존의 엑소좀 치료제 개발 방식과 차별화된 디지털 방식 치료제 유도 기술로 글로벌 경쟁력을 갖추고 있습니다."
  };

  return (
    <section id="특허/인증" className="patents">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Patent & Certification ${index + 1}`} />
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

export default Patents;