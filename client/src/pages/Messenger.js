import React from "react";
//import socketIOClient from "socket.io-client";
import Nav from "../components/Nav";
import List from "../components/MessageList";
import Chat from "../components/Chat";

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
