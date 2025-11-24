// 2025-11-24, David
// Add react ChatBOT Style
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import 'react-chatbot-kit/build/main.css';

//import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

import "./App.css";

/*
function App() {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div className="App">
        <Chatbot 
          config={config} 
          actionProvider={ActionProvider} 
          messageParser={MessageParser} 
        />
    </div>
  );
}

export default App;
*/

// stemon basic style
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CompanyIntro from "./components/CompanyIntro";
import CoreTechnologies from "./components/CoreTechnologies";
import BusinessPipeline from "./components/BusinessPipeline";
import Patents from "./components/Patents";
import Footer from "./components/Footer";
//import "./styles/variables.scss";
import { useLanguage } from "./LanguageContext";  // Import Language Context

// Show ChatBOT
function App() {
  const { language } = useLanguage();  // Get language from context
  const [showChatbot, toggleChatbot] = useState(false); // init chatBot view OFF

  return (
    <div className="App">
      <div className="app-chatbot-container">
        <ConditionallyRender
          ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
        />
      </div>

      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        <ButtonIcon className="app-chatbot-button-icon" />
      </button>

      <div>
        <Navbar />
        <Home language={language} />
        <CompanyIntro language={language} />
        <CoreTechnologies language={language} />
        <BusinessPipeline language={language} />
        <Patents language={language} />
        <Footer />
      </div>

    </div>
  );
}

export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// export default App;
