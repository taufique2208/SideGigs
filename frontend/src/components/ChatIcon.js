import React, { useState } from 'react';
import './ChatIcon.css'; // Create a CSS file for styling
import ChatWindow from './ChatWindow';
import robotIcon from './robot_icon.png'

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-icon" onClick={toggleChatWindow}>
      <img src={robotIcon} alt='chat-icon'/>
      {isOpen && <ChatWindow onClose={toggleChatWindow} />}
    </div>
  );
};

export default ChatIcon;
