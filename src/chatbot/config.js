// ./chatbot/config.js
import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';

import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import AirportSelector from "./widgets/AirportSelector/AirportSelector";
//import LostBaggageLink from "./widgets/Link/LostBaggageLink";
import StemonInfoLink from "./widgets/StemonLink/StemonInfoLink";
import PlatformsSelector from "./widgets/PlatformsSelector/PlatformsSelector";
import FlightList from "./widgets/FlightList/FlightList";

import StemonEntrLink from "./widgets/StemonLink/StemonEntrLink";
import StemonDDDSLink from "./widgets/StemonLink/StemonDDDSLink";
import StemonUltraReproLink from "./widgets/StemonLink/StemonUltraReproLink";
import StemonExosomeLink from "./widgets/StemonLink/StemonExosomeLink";
import StemonReprosomeLink from "./widgets/StemonLink/StemonReprosomeLink";

import FlightBotAvatar from "./domainComponents/FlightBotAvatar";

const botName = "ChatSTEMON";

const config = { 
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. Help you?`),
  //  createChatBotMessage("Help you? You can receive more information about STEMON")
  ],

  /*
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  */
  customComponents: {
    botAvatar: (props) => <FlightBotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "airportSelector",
      widgetFunc: (props) => <AirportSelector {...props} />,
      mapStateToProps: ["messages", "selectedAirport", "airports"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "stemonInfoLink",
      widgetFunc: (props) => <StemonInfoLink {...props} />,
    },
    {
      widgetName: "platformSelector",
      widgetFunc: (props) => <PlatformsSelector {...props} />,
      mapStateToProps: ["selectedAirport"],
    },
    {
      widgetName: "flightList",
      widgetFunc: (props) => <FlightList {...props} />,
      mapStateToProps: ["flightType", "selectedAirport"],
    },
    {
      widgetName: "stemonEntrLink",
      widgetFunc: (props) => <StemonEntrLink {...props} />,
    },
    {
      widgetName: "stemonDDDSLink",
      widgetFunc: (props) => <StemonDDDSLink {...props} />,
    },
    {
      widgetName: "stemonUltraReproLink",
      widgetFunc: (props) => <StemonUltraReproLink {...props} />,
    },
    {
      widgetName: "stemonExosomeLink",
      widgetFunc: (props) => <StemonExosomeLink {...props} />,
    },
    {
      widgetName: "stemonReprosomeLink",
      widgetFunc: (props) => <StemonReprosomeLink {...props} />,
    },
  ],

}

export default config