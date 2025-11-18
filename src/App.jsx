import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CompanyIntro from "./components/CompanyIntro";
import CoreTechnologies from "./components/CoreTechnologies";
import BusinessPipeline from "./components/BusinessPipeline";
import Patents from "./components/Patents";
import Footer from "./components/Footer";
import "./styles/variables.scss";
import { useLanguage } from "./LanguageContext";  // Import Language Context

function App() {
  const { language } = useLanguage();  // Get language from context

  return (
    <div>
      <Navbar />
      <Home language={language} />
      <CompanyIntro language={language} />
      <CoreTechnologies language={language} />
      <BusinessPipeline language={language} />
      <Patents language={language} />
      <Footer />
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
