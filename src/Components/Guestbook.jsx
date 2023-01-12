import React from "react";
import { useState, useEffect, useRef } from "react";
// import TimeStamp from "./TimeStamp";

const GuestBook = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      return JSON.parse(savedMessages);
    } else {
      return [];
    }
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (message !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message.trim(),
          time: new Date().toLocaleString(),
        },
      ]);
    }
    setMessage("");
  };

  return (
    <div className="Comment-box">
      <h2>Please Leave a Christmas Greeting</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          name="message"
          type="text"
          placeholder="Write Your Message"
          value={message}
          onChange={handleInputChange}
          className="textboxmsg"
        />

        <input type="submit" value="Post" className="postbtn" />
      </form>
      <div className="messagecontainer">
        <ul className="posted-messages">
          {messages.map((message) => (
            <ul key={message.id} className="message">
              <p className="messagetext">{message.text}</p>
              <p className="timestamp">{message.time}</p>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuestBook;
