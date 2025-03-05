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

function App() {
  return (
    <div>
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