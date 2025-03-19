import React, { useState } from "react";
import "../styles/CoreTechnologies.scss";

import image1 from "../images/3.핵심역량기술/IR-01.jpg";
import image2 from "../images/3.핵심역량기술/IR-02.jpg";
import image3 from "../images/3.핵심역량기술/IR-03.jpg";
import image4 from "../images/3.핵심역량기술/IR-04.jpg";
import image5 from "../images/3.핵심역량기술/IR-05.jpg";
import image6 from "../images/3.핵심역량기술/IR-06.jpg";
import image7 from "../images/3.핵심역량기술/IR-07.jpg";
import image8 from "../images/3.핵심역량기술/IR-08.jpg";
import image9 from "../images/3.핵심역량기술/IR-09.jpg";

import gif1 from "../images/3.핵심역량기술/3핵심역량기술 - 2 -1.gif";
import gif2 from "../images/3.핵심역량기술/3핵심역량기술 - 2 -2.gif";
import gif3 from "../images/3.핵심역량기술/3핵심역량기술 - 3 -1.gif";
import gif4 from "../images/3.핵심역량기술/3핵심역량기술 - 3 -2 4비즈니스파이프라인 - 2-2.gif";
import gif5 from "../images/3.핵심역량기술/3핵심역량기술 - 4-1 4비즈니스파이프라인 - 2-1.gif";
import gif6 from "../images/3.핵심역량기술/3핵심역량기술 - 4-2.gif";
import gif7 from "../images/3.핵심역량기술/3핵심역량기술 - 4-3.gif";
import gif8 from "../images/3.핵심역량기술/3핵심역량기술 - 5-1.gif";
import gif9 from "../images/3.핵심역량기술/3핵심역량기술 - 5-2.gif";
import gif10 from "../images/3.핵심역량기술/3핵심역량기술 - 5-3 4비즈니스파이프라인 - 2-4.gif";
import gif11 from "../images/3.핵심역량기술/3핵심역량기술 - 8-1.gif";
import gif12 from "../images/3.핵심역량기술/3핵심역량기술 - 8-2.gif";

import popupIcon from "../images/ICONS/text_icon.png";

const CoreTechnologies = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "두번째 원천기술은 Entr과정에서 Entr에 의해 유도된 세포의 특성과 동일한 엑소좀을 유도 할 수 있는 기술...",
    "IR-03": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다...",
    "IR-04": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다...",
    "IR-05": "Entr 기술에서 중요한 환경의 세포내 유입메카니즘을 바탕으로 엑소좀내 디지털방식 약물탑재 자동화 시스템...",
    "IR-06": "DDDS 방식을 이용하여 초록색으로 표시되는 핵산, 화합물, 단백질등 다양한 물질이 붉은색으로 표시되는 엑소좀내...",
    "IR-07": "디지털 방식으로 엑소좀 유도 및 약물탑재는 수작업과 비교할때 통계적으로 아주 높은 균질성을 제공합니다...",
    "IR-08": "기존의 엑소좀 유도 타사와 비교할때 스템온은 엑소좀 유도 플랫폼을 통해 다양하며 균질한 기능성 엑소좀 대량으로...",
    "IR-09": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다..."
  };

  return (
    <section id="핵심역량기술" className="core-technologies-section">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Core Technology ${index + 1}`} />

            {/* Add GIFs */}
            {imageKey === "IR-02" && <><img src={gif1} alt="GIF 1" className="gif1" /><img src={gif2} alt="GIF 2" className="gif2" /></>}
            {imageKey === "IR-03" && <><img src={gif3} alt="GIF 3" className="gif3" /><img src={gif4} alt="GIF 4" className="gif4" /></>}
            {imageKey === "IR-04" && <><img src={gif5} alt="GIF 5" className="gif5" /><img src={gif6} alt="GIF 6" className="gif6" /><img src={gif7} alt="GIF 7" className="gif7" /></>}
            {imageKey === "IR-05" && <><img src={gif8} alt="GIF 8" className="gif8" /><img src={gif9} alt="GIF 9" className="gif9" /><img src={gif10} alt="GIF 10" className="gif10" /></>}
            {imageKey === "IR-08" && <><img src={gif11} alt="GIF 11" className="gif11" /><img src={gif12} alt="GIF 12" className="gif12" /></>}

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

export default CoreTechnologies;