import React, { useState } from "react";
import "../styles/CoreTechnologies.scss";
import { useLanguage } from "../LanguageContext";

// Korean images
import image1KR from "../images/3.핵심역량기술/IR-01.jpg";
import image2KR from "../images/3.핵심역량기술/IR-02.jpg";
import image3KR from "../images/3.핵심역량기술/IR-03.jpg";
import image4KR from "../images/3.핵심역량기술/IR-04.jpg";
import image5KR from "../images/3.핵심역량기술/IR-05.jpg";
import image6KR from "../images/3.핵심역량기술/IR-06.jpg";
import image7KR from "../images/3.핵심역량기술/IR-07.jpg";
import image8KR from "../images/3.핵심역량기술/IR-08.jpg";
import image9KR from "../images/3.핵심역량기술/IR-09.jpg";

// English images
import image1EN from "../images/EN/3.Core/IR-01.jpg";
import image2EN from "../images/EN/3.Core/IR-02.jpg";
import image3EN from "../images/EN/3.Core/IR-03.jpg";
import image4EN from "../images/EN/3.Core/IR-04.jpg";
import image5EN from "../images/EN/3.Core/IR-05.jpg";
import image6EN from "../images/EN/3.Core/IR-06.jpg";
import image7EN from "../images/EN/3.Core/IR-07.jpg";
import image8EN from "../images/EN/3.Core/IR-08.jpg";
import image9EN from "../images/EN/3.Core/IR-09.jpg";

// GIFs (same for both)
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

const CoreTechnologies = ({ language }) => {
  const sectionId = language === "KR" ? "핵심역량기술" : "CoreTechnologies";

  const images = language === "KR"
    ? [image1KR, image2KR, image3KR, image4KR, image5KR, image6KR, image7KR, image8KR, image9KR]
    : [image1EN, image2EN, image3EN, image4EN, image5EN, image6EN, image7EN, image8EN, image9EN];

  const [activePopup, setActivePopup] = useState(null);

  const popupDataKR = {
    "IR-02": "스템온의 첫번째 원천기술은 2017년 Biomaterials에 발표를 하였습니다. STEMON은 유전자 없이 세포를 리프로그래밍할 수 있는 혁신적인 기술인 Entr 기술을 개발하였습니다. Entr는 'Ultrasound-directed permeation of Environmental transition-guided cellular reprogramming'의 약어입니다. 이 기술은 특정 환경 조건을 가진 세포 배양 배지를 활용합니다. 섬유아세포(fibroblast)에 초음파를 처리하면, 해당 환경의 요소들이 세포 내부로 침투하여, 세포가 주어진 환경의 특성에 맞게 세포가 리프로그래밍됩니다.",
    "IR-03": "두번째 원천기술은 Entr과정에서 유도된 엑소좀 기술입니다. ACS Nano에 발표되었으며, 이 기술을 통해 특성화된 엑소좀 (Reprosome) 생산이 가능해졌습니다.",
    "IR-04": "Entr 기술의 100% 재현성을 위하여 세계 최초로 엑소좀 유도 자동화 장비를 개발하여 균질한 엑소좀 대량 생산이 가능합니다.",
    "IR-05": "Entr 기술 기반으로 엑소좀 내 디지털 방식 약물탑재 자동화 시스템 시제품을 세계 최초로 개발하였습니다.",
    "IR-06": "DDDS 방식을 이용하여 다양한 물질이 엑소좀 내에 70% 이상 고효율로 탑재됨을 확인하였습니다.",
    "IR-07": "디지털 방식 엑소좀 유도 및 약물탑재는 수작업 대비 높은 균질성을 보장합니다.",
    "IR-08": "스템온의 엑소좀 유도 플랫폼은 다양한 고기능성 엑소좀을 균질하게 대량 생산하는 우수성을 지닙니다.",
    "IR-09": "DDDS 플랫폼으로 약물과 기능성 소재를 엑소좀 내에 쉽고 균질하며 고효율로 탑재할 수 있습니다."
  };

  const popupDataEN = {
    "IR-02": "STEMON's first core technology was published in Biomaterials (2017). The company developed 'Entr' technology which enables gene-free cellular reprogramming. Entr stands for 'Ultrasound-directed permeation of Environmental transition-guided cellular reprogramming'. This utilizes specific environmental media, where ultrasound allows permeation into fibroblasts, leading to reprogramming based on environment-specific cues.",
    "IR-03": "The second core technology, derived during the Entr process, enables production of exosomes (termed Reprosome) carrying specialized reprogramming factors. Published in ACS Nano.",
    "IR-04": "To achieve 100% reproducibility of Entr technology, world’s first exosome induction automation device was developed, enabling mass production of highly uniform exosomes.",
    "IR-05": "Based on Entr technology, STEMON developed the world’s first digital drug-loading automation prototype to load drugs into exosomes.",
    "IR-06": "Using DDDS, nucleic acids, compounds, and proteins can be universally loaded into exosomes with over 70% high-efficiency loading.",
    "IR-07": "Compared to manual methods, digital exosome induction and drug loading provide superior statistical uniformity.",
    "IR-08": "STEMON’s exosome platform enables large-scale, highly uniform functional exosome production compared to conventional methods.",
    "IR-09": "Using DDDS, various drugs and functional materials can be easily and uniformly loaded into exosomes with high efficiency."
  };

  const popupData = language === "KR" ? popupDataKR : popupDataEN;

  return (
    <section id={sectionId} className="core-technologies-section">
      {images.map((img, index) => {
        const imageKey = `IR-0${index + 1}`;
        return (
          <div key={index} className="image-container">
            <img src={img} alt={`Core Technology ${index + 1}`} />

            {imageKey === "IR-02" && <><img src={gif1} alt="GIF 1" className="gif1" /><img src={gif2} alt="GIF 2" className="gif2" /></>}
            {imageKey === "IR-03" && <><img src={gif3} alt="GIF 3" className="gif3" /><img src={gif4} alt="GIF 4" className="gif4" /></>}
            {imageKey === "IR-04" && <><img src={gif5} alt="GIF 5" className="gif5" /><img src={gif6} alt="GIF 6" className="gif6" /><img src={gif7} alt="GIF 7" className="gif7" /></>}
            {imageKey === "IR-05" && <><img src={gif8} alt="GIF 8" className="gif8" /><img src={gif9} alt="GIF 9" className="gif9" /><img src={gif10} alt="GIF 10" className="gif10" /></>}
            {imageKey === "IR-08" && <><img src={gif11} alt="GIF 11" className="gif11" /><img src={gif12} alt="GIF 12" className="gif12" /></>}

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