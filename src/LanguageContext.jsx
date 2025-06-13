import React, { createContext, useState, useContext } from "react";

// Create context
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("KR");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "KR" ? "EN" : "KR"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook
export const useLanguage = () => useContext(LanguageContext);