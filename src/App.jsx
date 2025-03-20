import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CompanyIntro from "./components/CompanyIntro";
import CoreTechnologies from "./components/CoreTechnologies";
import BusinessPipeline from "./components/BusinessPipeline";
import Patents from "./components/Patents";
import Footer from "./components/Footer";
import "./styles/variables.scss";
// import Security from "./components/security";

function App() {
  return (
    <div>
      {/* <Security /> */}
      <Navbar />
      <Home />
      <CompanyIntro />
      <CoreTechnologies />
      <BusinessPipeline />
      <Patents />
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
