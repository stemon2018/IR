// ./chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase()

    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hey") || 
      lowerCase.includes("hello")
    ) {
      this.actionProvider.greet()
    }

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      lowerCase.includes("talk") ||
      lowerCase.includes("speak") ||
      lowerCase.includes("real person") ||
      lowerCase.includes("person") ||
      lowerCase.includes("contact")
    ) {
      return this.actionProvider.handleContactInfo();
    }

    if (
      lowerCase.includes("stemon") || 
      lowerCase.includes("company")
    ) {
      return this.actionProvider.handleStemonInfo();
    }

    if (
      lowerCase.includes("bio") || 
      lowerCase.includes("platform") ||
      lowerCase.includes("device") ||
      lowerCase.includes("machines") ||
      lowerCase.includes("equipment") ||
      lowerCase.includes("ultrasonic")
    ) {
      return this.actionProvider.handlePlatformsChoice();
    }

    if (
      lowerCase.includes("entr") ||
      lowerCase.includes("entr platform")
    ) {
      return this.actionProvider.handleStemonEntr();
    }

    if (
      lowerCase.includes("ddd") ||
      lowerCase.includes("ddds")
    ) {
      return this.actionProvider.handleStemonDDDS();
    }

    if (
      lowerCase.includes("repro") ||
      lowerCase.includes("ultrarepro") ||
      lowerCase.includes("ultra repro")
    ) {
      return this.actionProvider.handleStemonUltraRepro();
    }

    if (
      lowerCase.includes("exosome") ||
      lowerCase.includes("exosom") ||
      lowerCase.includes("exosomes")
    ) {
      return this.actionProvider.handleStemonExosome();
    }

    if (
      lowerCase.includes("reprosome") ||
      lowerCase.includes("reprosom") ||
      lowerCase.includes("reprosomes")
    ) {
      return this.actionProvider.handleStemonReprosome();
    }


  //  
    if (message.includes("airport")) {
      return this.actionProvider.handleAirport();
    }

  ////  
    return this.actionProvider.handleOptions({ withAvatar: true });
  }

  containsFlightId = (message) => {
    const regexp = /[A-Z]{2,}[0-9]{2,}/gim;
    return message.match(regexp);
  };

}

export default MessageParser