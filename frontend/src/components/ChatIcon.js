import React, { useState } from 'react';
import './ChatIcon.css'; // Create a CSS file for styling
import ChatWindow from './ChatWindow';
import chatIcon from './chat.png'

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-icon" onClick={toggleChatWindow}>
      <img src={chatIcon} alt='chat-icon'/>
      {isOpen && <ChatWindow onClose={toggleChatWindow} />}
    </div>
  );
};

export default ChatIcon;
