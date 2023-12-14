// MultiUserChat.jsx

import React, { useState } from 'react';
import './Message.css';

const ChatPage = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'pavan20', text: 'Hello there!' },
    { user: 'pavan20', text: 'Hi! I am impressed by your portfolio' },
    // Add more sample messages
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container" style={{backgroundColor:'teal'}}>
      {/* <div className="chat-header"> */}
        {/* <h1>Multi-User Chat</h1> */}
      {/* </div> */}
      <div className="chat-messages" >
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === 'You' ? 'my-message' : 'other-message'}>
            <span className="username">{msg.user}:</span>
            <span className="text">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input className='input'
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className='button' onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
