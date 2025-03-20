import React, { useState, useRef } from "react";
import "../styles/BusinessPipeline.scss";
import { Popup } from "@progress/kendo-react-popup";
import { Button } from "@progress/kendo-react-buttons";

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
  const anchorRef = useRef(null);

  const popupData = {
    "IR-02": "디지털 방식 엑소좀 유도 플랫폼과 엑소좀내 약물탑재 플랫폼을 기반으로 대략 200여종의 기능성 엑소좀을 개발하였습니다...",
    "IR-03": "UltraRepro 와 DDDS을 이용한 엑소좀을 바탕으로 다양한 치료제 개발연구를 진행하고 있습니다...",
    "IR-04": "UltraRepro에 의해 유도된 역분화줄기세포 유래 엑소좀을 기반으로 세계최초로 동물용 창상치료제 품목허가를 2개 받았습니다...",
    "IR-06": "UltraRepro와 DDDS 플랫폼을 이용하여 17종류의 기능성 엑소좀을 개발하여 미용제품으로도 판매하고 있습니다...",
    "IR-07": "DDDS장비의 시제품은 출시되었고 5월경에 5대가 제작이 완료되어 연구용으로 판매를 시작합니다...",
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
              <Button
                ref={(el) => (anchorRef.current = el ? el.element : null)}
                className="popup-button"
                onClick={() => setActivePopup(imageKey)}
              >
                <img src={popupIcon} alt="Popup Icon" />
              </Button>
            )}
          </div>
        );
      })}

      {/* Popup Component with Animation */}
      {activePopup && anchorRef.current && (
        <Popup
          anchor={anchorRef.current}
          show={!!activePopup}
          animate={{ openDuration: 300, closeDuration: 300 }}
          popupClass="popup-content"
        >
          <div className="popup-box">
            <button className="close-popup" onClick={() => setActivePopup(null)}>
              ✕
            </button>
            <p>{popupData[activePopup]}</p>
          </div>
        </Popup>
      )}
    </section>
  );
};

export default BusinessPipeline;