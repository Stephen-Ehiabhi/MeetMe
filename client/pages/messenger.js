import { useEffect, useState } from "react";

//import socketIOClient from "socket.io-client";
import Nav from "./components/Nav";
import List from "./components/MessageList";
import Chat from "./components/Chat";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    //function to fetchuser
    async function fetchUser() {
     const userID = '623b6c291804ece726a6d83a'
      const fetchingData = await fetch(
        `http://localhost:3030/api/user/${userID}`
      );
      const fetchedData = await fetchingData.json();
      setUser(fetchedData.message);
      fetchConversations(userID);
    }
    fetchUser();

    async function fetchConversations(ID) {
      const fetchingData = await fetch(
        `http://localhost:3030/api/conversation/${ID}`
      );
      const fetchedData = await fetchingData.json();
      setConversations(fetchedData.message);
    }
  }, []);

  return (
    <div className="messenger_cont">
      <Nav />
      <List conversations={conversations} currentUser={user}/>
      <Chat />
    </div>
  );
};

export default Messenger;
