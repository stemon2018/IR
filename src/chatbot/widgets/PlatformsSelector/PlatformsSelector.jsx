import React from "react";

import "./PlatformsSelector.css";

const PlatformsSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (type) => {
    setState((state) => ({
      ...state,
      flightType: type,
    }));

    actionProvider.handlePlatformTypeChoice(type);
  };

  return (
    <div>
      <h1 className="platform-selector-header">Whitch Platforms are...?</h1>
      <div className="platform-selector-button-container">
        <button
          className="platforms-selector-button"
          onClick={() => setType("DDDS")}
        >
          DDDS®
        </button>
        <button
          className="platforms-selector-button"
          onClick={() => setType("UltraRepro")}
        >
          UltraRepro®
        </button>
      </div>
    </div>
  );
};

export default PlatformsSelector;
