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
import image10 from "../images/5.특허, 인증/IR-10.jpg";

import popupIcon from "../images/ICONS/text_icon.png";

const Patents = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "스템온의 대표는 교수로 재직중에 NATURE와 같은 우수한 논문에 책임저자로 아주 많은 논문을 발표하여 연구력이 뛰어 납니다.",
    "IR-03": "스템온은 세계 최초로 엑소좀을 기반으로 의료기기 품목허가를 받았습니다. 아울러 국제적인 생산 시스템을을 갖추기 위하여 다양한 ISO 인증도 보유하고 있습니다.",
    "IR-04": "스템온의 원천기술에 대한 지식재산권은 대략 96건 입니다.",
    "IR-05": "스템온의 미용제품은 미국, 한국, 일본, 유럽, 중국에 이미 등록되어 해외 수출할 수 있는 기반을 마련하였습니다.",
    "IR-06": "스템온은 현재 24명의 임직원이 6개의 본부로 운영되고 있습니다.",
    "IR-07": "스템온은 해외 수출을 기반으로 하기 위하여 작년까지 각국의 식약처등 해외에 인증에 주력하였고 올해부터 매출이 증가되고 있습니다. 작년 매출 25만달러는 올해 이미 달성하였고 올해 2백만 달러를 목표로 열심히 하고 있습니다."
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