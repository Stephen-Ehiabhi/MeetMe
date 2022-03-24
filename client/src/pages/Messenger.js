import React from "react";
//import socketIOClient from "socket.io-client";
import Nav from "../components/Nav.js";
import List from "../components/MessageList.js";
import Chat from "../components/Chat.js";

import "./Messenger.css"

const Messenger = () => {
  return (
    <div className="messenger_cont">
      <Nav />
      <List />
      <Chat />
    </div>
  );
};

export default Messenger;
