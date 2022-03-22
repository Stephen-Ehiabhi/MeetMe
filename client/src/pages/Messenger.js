import React from "react";
import socketIOClient from "socket.io-client";
import Nav from "../components/Nav"

const Messenger = () => {
  return (
    <>
    <Nav />
    
      <p className="status"></p>
      <div className="chat-box"></div>
      <form className="send-message">
        <input className="message-input" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Messenger;
