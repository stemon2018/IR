// ./chatbot/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, greet.")
    this.addMessageToState(greetingMessage)
  }

  handleContactInfo = () => {
    const message = this.createChatBotMessage(
      "If you need to speak to officials person, you can call +82 031 0000 0000.",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleStemonInfo = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON pages.",
      {
        widget: "stemonInfoLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleStemonEntr = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON cellular reprogramming Entr® pages.",
      {
        widget: "stemonEntrLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleStemonDDDS = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON Platform DDDS® pages.",
      {
        widget: "stemonDDDSLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleStemonUltraRepro = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON Platform UltraRepro® pages.",
      {
        widget: "stemonUltraReproLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleAirport = () => {
    const message = this.createChatBotMessage(
      "Do you need to switch airport?",
      {
        widget: "airportSelector",
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible guide options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };

  handlePlatformsChoice = () => {
    const message = this.createChatBotMessage(
      "Awesome. I just need a little more information",
      {
        widget: "platformSelector",
        withAvatar: true,
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handlePlatformTypeChoice = (type) => {
    const message = this.createChatBotMessage(
      `Thanks. I'll retrieve the next ${type}® Platform from your chosen device. about ${type}® ? (example: ${type})`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
//        widget: "flightList",
      }
    );
    this.addMessageToState(message);
  };

  handleStemonExosome = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON Exosome® pages.",
      {
        widget: "stemonExosomeLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleStemonReprosome = () => {
    const message = this.createChatBotMessage(
      "Here's a link to STEMON Reprosome® pages.",
      {
        widget: "stemonReprosomeLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };


  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider