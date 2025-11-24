import React from "react";

//import { ReactComponent as FlightIcon } from "../icons/plane-alt.svg";
//import { ReactComponent as FlightIcon } from "../icons/comment-alt-lines.svg";
import { ReactComponent as FlightIcon } from "../icons/f1.svg";

const FlightBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <FlightIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default FlightBotAvatar;
