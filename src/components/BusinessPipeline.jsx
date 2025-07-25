import React, { useState } from "react";
import "../styles/BusinessPipeline.scss";
import { useLanguage } from "../LanguageContext";

// Korean images
import image1KR from "../images/4.비즈니즈파이프라인/IR-01.jpg";
import image2KR from "../images/4.비즈니즈파이프라인/IR-02.jpg";
import image3KR from "../images/4.비즈니즈파이프라인/IR-03.jpg";
import image4KR from "../images/4.비즈니즈파이프라인/IR-04.jpg";
import image5KR from "../images/4.비즈니즈파이프라인/IR-05.jpg";
import image6KR from "../images/4.비즈니즈파이프라인/IR-06.jpg";
import image7KR from "../images/4.비즈니즈파이프라인/IR-07.jpg";

// English images
import image1EN from "../images/EN/4.Business/IR-01.jpg";
import image2EN from "../images/EN/4.Business/IR-02.jpg";
import image3EN from "../images/EN/4.Business/IR-03.jpg";
import image4EN from "../images/EN/4.Business/IR-04.jpg";
import image5EN from "../images/EN/4.Business/IR-05.jpg";
import image6EN from "../images/EN/4.Business/IR-06.jpg";
import image7EN from "../images/EN/4.Business/IR-07.jpg";

// GIFs (same both languages)
import gif1 from "../images/3.핵심역량기술/3핵심역량기술 - 4-1 4비즈니스파이프라인 - 2-1.gif";
import gif2 from "../images/3.핵심역량기술/3핵심역량기술 - 3 -2 4비즈니스파이프라인 - 2-2.gif";
import gif3 from "../images/4.비즈니즈파이프라인/4비즈니스파이프라인 - 2-3.gif";
import gif4 from "../images/3.핵심역량기술/3핵심역량기술 - 5-3 4비즈니스파이프라인 - 2-4.gif";

import popupIcon from "../images/ICONS/text_icon.png";

const BusinessPipeline = ({ language }) => {
  const sectionId = language === "KR" ? "비즈니스파이프라인" : "BusinessPipeline";

  const images = language === "KR"
    ? [image1KR, image2KR, image3KR, image4KR, image5KR, image6KR, image7KR]
    : [image1EN, image2EN, image3EN, image4EN, image5EN, image6EN, image7EN];

  const [activePopup, setActivePopup] = useState(null);

  const popupDataKR = {
    "IR-02": "디지털 방식 엑소좀 유도 플랫폼과 엑소좀내 약물탑재 플랫폼을 기반으로  대략 200여종의 기능성 엑소좀을 개발하였습니다. 이를 통해 스템온은 R&D가 아닌 D&R을 행하고 있으며, 이를 기반으로 다양한 난치성 질환에 대한 치료제, 의료기기, 연구용 엑소좀, 미용분야 사업을 B2B로 진행하고 있습니다.",
    "IR-03": "UltraRepro 와 DDDS을 이용한 엑소좀을 바탕으로 다양한 치료제 개발연구를 진행하고 있으며, 아토피 치료제와 코로나 치료제 개발에 집중하고 있습니다.",
    "IR-04": "UltraRepro에 의해 유도된 역분화줄기세포 유래 엑소좀을 기반으로 세계최초로 동물용 창상치료제 품목허가를 2개 받았고 추가 허가를 준비 중입니다.",
    "IR-06": "UltraRepro와 DDDS 플랫폼을 이용하여 17종류의 기능성 엑소좀을 개발하여 미용제품으로 판매하고 있습니다.",
    "IR-07": "DDDS장비 시제품은 출시되어 연구용 판매가 시작되었습니다. 장비 외에도 다양한 소모품과 재료들이 함께 판매됩니다."
  };

  const popupDataEN = {
    "IR-02": "Based on the digital exosome induction and drug-loading platforms, around 200 functional exosomes have been developed. Instead of simple R&D, STEMON operates true D&R (Development & Research), expanding into therapeutics, medical devices, research exosomes, and cosmetic industries through B2B collaborations.",
    "IR-03": "Exosome-based drug development is ongoing using UltraRepro and DDDS, focusing on atopic dermatitis and COVID-19 therapeutics in partnership with Korea CDC.",
    "IR-04": "Based on UltraRepro-derived stem-cell exosomes, STEMON obtained world-first regulatory approvals for animal wound-healing exosome products, with more approvals expected soon.",
    "IR-06": "Seventeen functional exosome types have been developed and commercialized as cosmetic products using UltraRepro and DDDS platforms.",
    "IR-07": "Prototype DDDS equipment has been launched for research use, alongside associated consumables such as tubes, exosomes, and test kits."
  };

  const popupData = language === "KR" ? popupDataKR : popupDataEN;

  return (
    <section id={sectionId} className="business-pipeline">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Business Pipeline ${index + 1}`} />

            {imageKey === "IR-02" && (
              <>
                <img src={gif1} alt="GIF 1" className="gif1" />
                <img src={gif2} alt="GIF 2" className="gif2" />
                <img src={gif3} alt="GIF 3" className="gif3" />
                <img src={gif4} alt="GIF 4" className="gif4" />
              </>
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

export default BusinessPipeline;