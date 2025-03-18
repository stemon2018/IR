import React, { useState } from "react";
import "../styles/BusinessPipeline.scss";

import image1 from "../images/4.비즈니즈파이프라인/IR-01.jpg";
import image2 from "../images/4.비즈니즈파이프라인/IR-02.jpg";
import image3 from "../images/4.비즈니즈파이프라인/IR-03.jpg";
import image4 from "../images/4.비즈니즈파이프라인/IR-04.jpg";
import image5 from "../images/4.비즈니즈파이프라인/IR-05.jpg";
import image6 from "../images/4.비즈니즈파이프라인/IR-06.jpg";
import image7 from "../images/4.비즈니즈파이프라인/IR-07.jpg";

import popupIcon from "../images/ICONS/text_icon.png";

const BusinessPipeline = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "스템온은 현재 엑소좀 기반 플랫폼을 이용한 다양한 치료제 파이프라인을 보유하고 있으며 현재 줄기세포 기반 치료제와 엑소좀 기반 치료제 개발을 진행중입니다.",
    "IR-03": "스템온은 엑소좀을 이용한 치료제 개발을 위하여 다양한 기업 및 기관과 협력을 진행하고 있으며 국내 및 해외 기업들과 공동연구 및 사업화를 논의 중입니다.",
    "IR-04": "스템온의 치료제 파이프라인은 현재 임상 단계에 있으며, 임상1상을 완료한 후 상업화를 목표로 하고 있습니다.",
    "IR-06": "스템온의 치료제는 현재 여러 글로벌 제약사 및 바이오기업과 협력하여 상용화 가능성을 검토 중입니다.",
    "IR-07": "스템온의 치료제 플랫폼은 향후 글로벌 시장을 타겟으로 하여 확장을 계획하고 있습니다."
  };

  return (
    <section id="비즈니스파이프라인" className="business-pipeline">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Business Pipeline ${index + 1}`} />
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

export default BusinessPipeline;