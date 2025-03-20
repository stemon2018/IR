import React, { useState } from "react";
import "../styles/BusinessPipeline.scss";

import image1 from "../images/4.비즈니즈파이프라인/IR-01.jpg";
import image2 from "../images/4.비즈니즈파이프라인/IR-02.jpg";
import image3 from "../images/4.비즈니즈파이프라인/IR-03.jpg";
import image4 from "../images/4.비즈니즈파이프라인/IR-04.jpg";
import image5 from "../images/4.비즈니즈파이프라인/IR-05.jpg";
import image6 from "../images/4.비즈니즈파이프라인/IR-06.jpg";
import image7 from "../images/4.비즈니즈파이프라인/IR-07.jpg";

import gif1 from "../images/3.핵심역량기술/3핵심역량기술 - 4-1 4비즈니스파이프라인 - 2-1.gif";
import gif2 from "../images/3.핵심역량기술/3핵심역량기술 - 3 -2 4비즈니스파이프라인 - 2-2.gif";
import gif3 from "../images/4.비즈니즈파이프라인/4비즈니스파이프라인 - 2-3.gif";
import gif4 from "../images/3.핵심역량기술/3핵심역량기술 - 5-3 4비즈니스파이프라인 - 2-4.gif";

import popupIcon from "../images/ICONS/text_icon.png";

const BusinessPipeline = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "디지털 방식 엑소좀 유도 플랫폼과 엑소좀내 약물탑재 플랫폼을 기반으로  대략 200여종의 기능성 엑소좀을 개발하였습니다. 이를 통해 스템온은 R&D가 아닌 D&R을 행하고 있어며, 이를 기반으로 다양한 난친성 질환에 대한 치료제, 의료기기, 연구용 엑소좀, 미용분야 사업을 B2B로 진행하고 있습니다.",
    "IR-03": "UltraRepro 와 DDDS을 이용한 엑소좀을 바탕으로 다양한 치료제 개발연구를 진행하고 있습니다. 물론 기회가 되면 해당분야에 대한 licensing out도 생각하고 있어며, 현재는 특히 아토피 치료제에 집중하고 있습니다. 아울러 질병관리본부와 함께 코로나 치료제개발도 집중하고 있습니다.",
    "IR-04": "UltraRepro에 의해 유도된 역분화줄기세포 유래 엑소좀을 기반으로 세계최초로 동물용 창상치료제 품목허가를 2개 받았습니다. 올해 연말 3개의 폼목허가를 더 기대하고 잇씁니다.",
    "IR-06": "UltraRepro와 DDDS 플랫폼을 이용하여 17종류의 기능성 엑소좀을 개발하여 미용제품으로도 판매하고 있습니다.",
    "IR-07": "DDDS장비의 시제품은 출시되었고 5월경에 5대가 제작이 완료되어 연구용으로 판매를 시작합니다. 대당 1억에 판매 예정이며, 이미 많은데에서 문의가 들어오고 있습니다. 특히 DDDS장비의 판매는 다른 소모품이 튜브, 엑소좀, 테스트 키트도 고정적으로 판매될 예정입니다."
  };

  return (
    <section id="비즈니스파이프라인" className="business-pipeline">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Business Pipeline ${index + 1}`} />

            {/* Add GIFs for IR-02 */}
            {imageKey === "IR-02" && (
              <>
                <img src={gif1} alt="GIF 1" className="gif1" />
                <img src={gif2} alt="GIF 2" className="gif2" />
                <img src={gif3} alt="GIF 3" className="gif3" />
                <img src={gif4} alt="GIF 4" className="gif4" />
              </>
            )}

            {/* Popup Button */}
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