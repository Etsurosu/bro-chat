import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HuePicker } from 'react-color';
import { faPalette, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ClickableIcon from '../../components/clickable-icon';
import Input from '../../components/input';
import ChatContainer from './components/chat-container';
import OutputContainer from './components/output-container';
import InputContainer from './components/input-container';
import MessageContainer from './components/message-container';

// functionnal use hooks
// i18n
// proptypes

const Chat = () => {
  const username = 'Adri';
  const { secondaryColor } = useContext(ThemeContext);
  const [inputText, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isColorpickerShowed, setColorpickerState] = useState(false);
  const [color, setColor] = useState(secondaryColor);

  function handleSubmit() {
    if (inputText !== '') {
      setMessages([{ username, content: inputText, color }, ...messages]);
      setText('');
    }
  }

  return (
    <ChatContainer onKeyDown={e => e.key === 'Enter' && handleSubmit()}>
      <OutputContainer>
        {messages.map(message => (
          <MessageContainer color={message.color}>
            {`${message.username} : ${message.content}`}
          </MessageContainer>
        ))}
      </OutputContainer>
      {isColorpickerShowed && (
        <HuePicker width="100%" color={color} onChange={newColor => setColor(newColor.hex)} />
      )}
      <InputContainer>
        <ClickableIcon
          icon={faPalette}
          onClick={() => setColorpickerState(!isColorpickerShowed)}
          color={color}
        />
        <Input value={inputText} color={color} onChange={e => setText(e.target.value)} spaced />
        <ClickableIcon icon={faPaperPlane} onClick={() => handleSubmit()} color={color} />
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
