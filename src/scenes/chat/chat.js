import React, { useState } from "react";
import { HuePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/input";
import ChatContainer from "./components/chat-container";
import OutputContainer from "./components/output-container";
import InputContainer from "./components/input-container";
import MessageContainer from "./components/message-container";

// functionnal use hooks
// faire une page profil
// i18n
// proptypes

const Chat = () => {
  const username = "Adri";
  const [inputText, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isColorpickerShowed, setColorPickerState] = useState(false);
  const [color, setColor] = useState("#333333");

  function handleSubmit() {
    if (inputText !== "") {
      setMessages([
        { username, content: inputText, color: color },
        ...messages
      ]);
      setText("");
    }
  }

  return (
    <ChatContainer onKeyDown={e => (e.key === "Enter" ? handleSubmit() : null)}>
      <OutputContainer>
        {messages.map(message => (
          <MessageContainer color={message.color}>
            {message.username} : {message.content}
          </MessageContainer>
        ))}
      </OutputContainer>
      {isColorpickerShowed && (
        <HuePicker
          width="100%"
          color={color}
          onChange={color => setColor(color.hex)}
        />
      )}
      <InputContainer>
        <FontAwesomeIcon
          icon={faPalette}
          onClick={() => setColorPickerState(!isColorpickerShowed)}
          cursor="pointer"
          color={color}
        />
        <Input
          value={inputText}
          color={color}
          onChange={e => setText(e.target.value)}
          spaced
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={() => handleSubmit()}
          cursor="pointer"
          color={color}
        />
      </InputContainer>
    </ChatContainer>
  );
};
/*
class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Adri",
      messages: [],
      inputText: "",
      isColorpickerShowed: false,
      selectedColor: "#333333"
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
            onChange={color => this.handleChangeComplete(color)}
          />
        )}
        <InputContainer>
          <FontAwesomeIcon
            icon={faPalette}
            onClick={() => this.handleColorpickerClick()}
            cursor="pointer"
            color={selectedColor}
          />
          <Input
            value={inputText}
            color={selectedColor}
            onChange={e => this.handleChange(e)}
            spaced
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            onClick={() => this.handleClick()}
            cursor="pointer"
            color={selectedColor}
          />
        </InputContainer>
      </ChatContainer>
    );
  }
}*/

export default Chat;
