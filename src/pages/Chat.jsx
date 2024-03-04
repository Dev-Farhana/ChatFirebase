import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (currentMessage) {
      socket.emit('message', currentMessage);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    // Cleanup socket listeners on component unmount
    return () => {
      socket.off('message');
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="container">
      <p className="msg"> Chat  Messages:</p>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="msgCtn">
            {message}
          </div>
        ))}
      </div>
      <form className="msgForm">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
