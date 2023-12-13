import React, { useState, useEffect, useRef } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ onClose }) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const chatContentRef = useRef(null);

  useEffect(() => {
    chatContentRef.current.scrollTo({
      top: chatContentRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [counter, counter2]);

  return (
    <div className="chat-window" onClick={(event) => event.stopPropagation()}>
      <div className="header">
        <span>Conversation with EpicBot</span>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="chat-content" ref={chatContentRef}>
        <div className="botmessage">Hi there! I'm EpicBot, your personal assistant for Epicmploy.</div>
        <div className="botmessage">How can I assist you today?</div>
        <div className="usermessage" onClick={() => { setCounter(1); setCounter2(0); }}>How to find freelancing projects?</div>
        <div className="usermessage" onClick={() => { setCounter(2); setCounter2(0); }}>Bidding on Projects</div>
        <div className="usermessage" onClick={() => { setCounter(3); setCounter2(0); }}>Payment and Invoicing</div>
        <div className="usermessage" onClick={() => { setCounter(4); setCounter2(0); }}>How to create a freelancer profile?</div>
        <div className="usermessage" onClick={() => { setCounter(5); setCounter2(0); }}>What is Ask AI</div>

        {(counter === 1) && (
          <div className="botmessage">
            It's simple to find projects on Epicmploy:<br /><br />
            1. Log in to your Epicmploy account.<br />
            2. Explore the available projects.<br />
            3. Bid on projects that match your skills.<br />
            4. Wait for the client to approve your bid.<br /><br />
            Happy freelancing!
          </div>
        )}

        {(counter === 2) && (
          <>
            <div className="botmessage">Sure, let's talk about bidding on projects:</div>
            <div className="usermessage" onClick={() => { setCounter2(1); }}>How can I stand out in my project proposals?</div>
            <div className="usermessage" onClick={() => { setCounter2(2); }}>What should I include in my bid?</div>
            {/* Add more sub-questions and answers as needed */}
          </>
        )}

        {(counter === 3) && (
          <>
            <div className="botmessage">Let's discuss payment and invoicing:</div>
            <div className="usermessage" onClick={() => { setCounter2(3); }}>When do I receive payment for completed projects?</div>
            <div className="usermessage" onClick={() => { setCounter2(4); }}>How does the invoicing process work?</div>
            {/* Add more sub-questions and answers as needed */}
          </>
        )}

{(counter === 4) && (
          <>
            <div className="botmessage">Sure Here are few steps:
            <br/>Signup to our website and complete your profile with your marvellous portfolio
            <br/>Then start exploring the projects</div>
            {/* Add more sub-questions and answers as needed */}
          </>
        )}
{(counter === 5) && (
          <>
            <div className="botmessage">Ask AI:
            <br/>Ask AI is here to help you with your porfolio building, doubts, preparation and much more. Feel free to ask anything.
            </div>
            {/* Add more sub-questions and answers as needed */}
          </>
        )}

        {(counter2 === 1) && (
          <div className="botmessage">To stand out, make sure to highlight your skills and experience in your project proposals. Clearly communicate how you can add value to the client's project.</div>
        )}

        {(counter2 === 2) && (
          <div className="botmessage">Include relevant details about your expertise, approach to the project, and any relevant work samples. A well-crafted bid increases your chances of getting hired.</div>
        )}

        {(counter2 === 3) && (
          <div className="botmessage">You will receive payment after the client approves and completes the project. Make sure to set up your preferred payment method in your Epicmploy account.</div>
        )}

        {(counter2 === 4) && (
          <div className="botmessage">The invoicing process is straightforward. Once the project is completed and approved, you can generate an invoice through your Epicmploy account and send it to the client for payment.</div>
        )}

      </div>
    </div>
  );
};

export default ChatWindow;
