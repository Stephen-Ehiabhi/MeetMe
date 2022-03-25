import { useEffect, useState } from "react";

//import socketIOClient from "socket.io-client";
import Nav from "./components/Nav";
import List from "./components/MessageList";
import Chat from "./components/Chat";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function fetchConversations() {
      const fetchingData = await fetch(
        "http://localhost:3030/api/conversation/623b6c291804ece726a6d83a"
      );
      const fetchedData = await fetchingData.json();
      setConversations(fetchedData.message)
    }
    fetchConversations();
  }, []);

  return (
    <div className="messenger_cont">
      <Nav />
      <List data={conversations}/>
      <Chat />
    </div>
  );
};

export default Messenger;
