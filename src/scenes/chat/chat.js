import React from "react";
import { HuePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatContainer from "./components/chat-container";
import OutputContainer from "./components/output-container";
import InputContainer from "./components/input-container";
import MessageContainer from "./components/message-container";

// functionnal use hooks
// faire une page profil
// i18n
// proptypes

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Adri",
      messages: [],
      inputText: "",
      isColorpickerShowed: false,
      selectedColor: "blue"
    };
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleClick() {
    //call API a la place de ca
    const { messages, inputText, username, selectedColor } = this.state;
    if (inputText !== "")
      this.setState({
        messages: [
          { username, content: inputText, color: selectedColor },
          ...messages
        ],
        inputText: ""
      });
  }

  handleKeyDown(e) {
    if (e.key === "Enter") this.handleClick();
  }

  handleColorpickerClick() {
    const { isColorpickerShowed } = this.state;

    this.setState({ isColorpickerShowed: !isColorpickerShowed });
  }

  handleChangeComplete(color) {
    console.log(color);
    this.setState({ selectedColor: color.hex });
  }

  render() {
    const {
      messages,
      inputText,
      isColorpickerShowed,
      selectedColor
    } = this.state;
    return (
      <ChatContainer onKeyDown={e => this.handleKeyDown(e)}>
        <OutputContainer>
          {messages.map(message => (
            <MessageContainer style={{ color: message.color }}>
              {message.username} : {message.content}
            </MessageContainer>
          ))}
        </OutputContainer>
        {isColorpickerShowed && (
          <HuePicker
            width="100%"
            color={selectedColor}
            onChangeComplete={color => this.handleChangeComplete(color)}
          />
        )}
        <InputContainer>
          <FontAwesomeIcon
            icon={faPalette}
            onClick={() => this.handleColorpickerClick()}
            cursor="pointer"
          />
          <input
            type="text"
            value={inputText}
            onChange={e => this.handleChange(e)}
            style={{
              width: "100%",
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 10,
              padding: 5,
              color: selectedColor
            }}
          ></input>
          <FontAwesomeIcon
            icon={faPaperPlane}
            onClick={() => this.handleClick()}
            cursor="pointer"
          />
        </InputContainer>
      </ChatContainer>
    );
  }
}
export default Chat;
