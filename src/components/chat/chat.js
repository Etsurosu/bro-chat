import React from "react";
import ChatContainer from "./components/chat-container";
import OutputContainer from "./components/output-container";
import InputContainer from "./components/input-container";
import MessageContainer from "./components/message-container";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Adri",
      messages: [],
      inputText: "",
      selectedColour: "#000000"
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ inputText: e.target.value });
  }

  handleClick() {
    //call API a la place de ca
    const { messages, inputText, username } = this.state;
    if (inputText !== "")
      this.setState({
        messages: [{ username, content: inputText }, ...messages],
        inputText: ""
      });
  }

  handleKeyDown(e) {
    if (e.key === "Enter") this.handleClick();
  }

  handleColorWheel() {
    const { isColourWheelShowed } = this.state;
    this.setState({ isColourWheelShowed: !isColourWheelShowed });
  }

  render() {
    const { messages, inputText } = this.state;
    return (
      <ChatContainer onKeyDown={e => this.handleKeyDown(e)}>
        <OutputContainer>
          {messages.map(message => (
            <MessageContainer>
              {message.username} : {message.content}
            </MessageContainer>
          ))}
        </OutputContainer>
        <InputContainer>
          <input
            type="button"
            onClick={() => this.handleColourWheel()}
            value="Envoyer"
            style={{
              width: "15%",
              padding: 5,
              borderRadius: 10
            }}
          />
          <input
            type="text"
            value={inputText}
            onChange={e => this.handleChange(e)}
            style={{
              width: "80%",
              marginRight: 10,
              borderRadius: 10,
              padding: 5
            }}
          ></input>
          <input
            type="button"
            onClick={() => this.handleClick()}
            value="Envoyer"
            style={{
              width: "15%",
              padding: 5,
              borderRadius: 10
            }}
          />
        </InputContainer>
      </ChatContainer>
    );
  }
}
export default Chat;
