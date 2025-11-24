import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "STEMON",
      handler: props.actionProvider.handleStemonInfo, 
      id: 1
    },
    { name: "BIO Platform", 
      handler: props.actionProvider.handlePlatformsChoice,
      id: 2 
    },
    {
      name: "Entr®",
      handler: props.actionProvider.handleStemonEntr,
      id: 3
    },
    {
      name: "Exosome®",
      handler: props.actionProvider.handleStemonExosome,
      id: 4
    },
    {
      name: "Reprosome®",
      handler: props.actionProvider.handleStemonReprosome,
      id: 5
    },
    {
      name: "DDDS®",
      handler: props.actionProvider.handleStemonDDDS,
      id: 6
    },
    {
      name: "UltraRepro®",
      handler: props.actionProvider.handleStemonUltraRepro,
      id: 7
    },

  ];
  return <Options options={options} title="Guide Reference..." {...props} />;
};

export default GeneralOptions;
