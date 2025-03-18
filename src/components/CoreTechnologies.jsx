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

import popupIcon from "../images/ICONS/text_icon.png";

const CoreTechnologies = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const [activePopup, setActivePopup] = useState(null);

  const popupData = {
    "IR-02": "두번째 원천기술은 Entr과정에서 Entr에 의해 유도된 세포의 특성과 동일한 엑소좀을 유도 할 수 있는 기술을 개발하여 ACS Nano에 발표하였습니다. Entr기술에 의해 유도된 엑소좀내에는 세포의 특성에 맞는 다양한 리프로그래밍 factor가 포함되어 있기에 엑소좀이라는 말 대신에 reprosome이라고 칭합니다.",
    "IR-03": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다. 이를 통해 균질한 엑소좀을 대량으로 생산 할 수 있게되었습니다.",
    "IR-04": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다. 이를 통해 균질한 엑소좀을 대량으로 생산 할 수 있게되었습니다.",
    "IR-05": "Entr 기술에서 중요한 환경의 세포내 유입메카니즘을 바탕으로 엑소좀내 디지털방식 약물탑재 자동화 시스템 시제품을 세계최초로 개발하였습니다.",
    "IR-06": "DDDS 방식을 이용하여 초록색으로 표시되는 핵산, 화합물, 단백질등 다양한 물질이 붉은색으로 표시되는 엑소좀내에 범용적으로 노란색으로 표시되는 탑재가 70% 이상 고효율적으로 엑소좀내 탑재됨을 확인하였습니다.",
    "IR-07": "디지털 방식으로 엑소좀 유도 및 약물탑재는 수작업과 비교할때 통계적으로 아주 높은 균질성을 제공합니다.",
    "IR-08": "기존의 엑소좀 유도 타사와 비교할때 스템온은 엑소좀 유도 플랫폼을 통해 다양하며 균질한 기능성 엑소좀 대량으로 생산할 수 있는 우수성이 있습니다.",
    "IR-09": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 최근 개발하였습니다. 이를 통해 균질한 엑소좀을 대량으로 생산 할 수 있게되었습니다.",
  };

  return (
    <section id="핵심역량기술" className="core-technologies-section">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Core Technology ${index + 1}`} />
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