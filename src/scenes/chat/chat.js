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
  const [isColorpickerShowed, setColorpickerState] = useState(false);
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
          onClick={() => setColorpickerState(!isColorpickerShowed)}
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

export default Chat;
