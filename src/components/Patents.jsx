import React, { useState } from "react";
import "../styles/Patents.scss";
import { Expand } from "@progress/kendo-react-animation";
import { useLanguage } from "../LanguageContext";

// Korean images
import image1KR from "../images/5.특허, 인증/IR-01.jpg";
import image2KR from "../images/5.특허, 인증/IR-02.jpg";
import image3KR from "../images/5.특허, 인증/IR-03.jpg";
import image4KR from "../images/5.특허, 인증/IR-04.jpg";
import image5KR from "../images/5.특허, 인증/IR-05.jpg";
import image6KR from "../images/5.특허, 인증/IR-06.jpg";
import image7KR from "../images/5.특허, 인증/IR-07.jpg";
import image8KR from "../images/5.특허, 인증/IR-08.jpg";
import image9KR from "../images/5.특허, 인증/IR-09.jpg";
import image10KR from "../images/5.특허, 인증/IR-10.jpg";

// English images
import image1EN from "../images/EN/5.Patents/IR-01.jpg";
import image2EN from "../images/EN/5.Patents/IR-02.jpg";
import image3EN from "../images/EN/5.Patents/IR-03.jpg";
import image4EN from "../images/EN/5.Patents/IR-04.jpg";
import image5EN from "../images/EN/5.Patents/IR-05.jpg";
import image6EN from "../images/EN/5.Patents/IR-06.jpg";
import image7EN from "../images/EN/5.Patents/IR-07.jpg";
import image8EN from "../images/EN/5.Patents/IR-08.jpg";
import image9EN from "../images/EN/5.Patents/IR-09.jpg";
import image10EN from "../images/EN/5.Patents/IR-10.jpg";

import popupIcon from "../images/ICONS/text_icon.png";

const Patents = ({ language }) => {
  const sectionId = language === "KR" ? "특허/인증" : "Patents";

  const images = language === "KR"
    ? [image1KR, image2KR, image3KR, image4KR, image5KR, image6KR, image7KR, image8KR, image9KR, image10KR]
    : [image1EN, image2EN, image3EN, image4EN, image5EN, image6EN, image7EN, image8EN, image9EN, image10EN];

  const [activePopup, setActivePopup] = useState(null);

  const popupDataKR = {
    "IR-02": "스템온의 대표는 교수로 재직중에 NATURE와 같은 우수한 논문에 책임저자로 아주 많은 논문을 발표하여 연구력이 뛰어 납니다.",
    "IR-03": "스템온은 세계 최초로 엑소좀을 기반으로 의료기기 품목허가를 받았습니다. 아울러 국제적인 생산 시스템을 갖추기 위하여 다양한 ISO 인증도 보유하고 있습니다.",
    "IR-04": "스템온의 원천기술에 대한 지식재산권은 대략 96건 입니다.",
    "IR-05": "스템온의 미용제품은 미국, 한국, 일본, 유럽, 중국에 이미 등록되어 해외 수출할 수 있는 기반을 마련하였습니다.",
    "IR-06": "스템온은 현재 23명의 임직원이 6개의 본부로 운영되고 있습니다.",
    "IR-07": "스템온은 해외 수출을 기반으로 하기 위하여 작년까지 각국의 식약처 등 해외에 인증을 주력하였고 올해부터 매출이 증가되고 있습니다. 작년 매출 25만달러는 올해 이미 달성하였고 올해 2백만 달러를 목표로 열심히 하고 있습니다."
  };

  const popupDataEN = {
    "IR-02": "STEMON's CEO, while serving as a professor, published many high-quality research papers as corresponding author, including in journals such as NATURE.",
    "IR-03": "STEMON became the world’s first company to receive medical device approvals based on exosomes. The company also holds various ISO certifications for its global manufacturing systems.",
    "IR-04": "The company holds approximately 96 intellectual property rights related to its core technologies.",
    "IR-05": "STEMON’s cosmetic products are registered in the US, Korea, Japan, Europe, and China, securing global export licenses.",
    "IR-06": "Currently, STEMON operates with 23 employees across 6 divisions.",
    "IR-07": "With international certifications secured last year, exports have started growing this year. Sales already surpassed last year’s $250,000 and aim to exceed $2 million by year-end."
  };

  const popupData = language === "KR" ? popupDataKR : popupDataEN;

  return (
    <section id={sectionId} className="patents">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        const isActive = activePopup === imageKey;

        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Patent & Certification ${index + 1}`} />

            {popupData[imageKey] && (
              <>
                <button className="popup-button" onClick={() => setActivePopup(isActive ? null : imageKey)}>
                  <img src={popupIcon} alt="Popup Icon" />
                </button>

                <Expand>
                  {isActive && (
                    <div className="popup-content">
                      <button className="close-popup" onClick={() => setActivePopup(null)}>✕</button>
                      <p>{popupData[imageKey]}</p>
                    </div>
                  )}
                </Expand>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Patents;