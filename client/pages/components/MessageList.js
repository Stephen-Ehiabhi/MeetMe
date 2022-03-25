import { useState } from "react";
import Image from "next/image";
import Conversation from "./Conversation";
import Chat from "./Chat";

export default function MessageList({ conversations, currentUser }) {
  const [message, setMessage ] = useState({});

  async function getMessages(id) {
    const fetching = await fetch("http://localhost:3030/api/message/" + id);
    const fetched = await fetching.json();
    setMessage(()=>fetched.message );
    console.log(message);
    <Chat message={message} />;
  }

  return (
    <>
      <div className="message_list_cont">
        {/* first div */}
        <div className="account_div">
          <Image
            className="round_photo"
            src="/p1.jpg"
            alt="Vercel Logo"
            width={45}
            height={45}
          />
          <div className="account_info">
            <p className="account_info_name">{currentUser.fullname}</p>
            <p className="account_info_p">My account</p>
          </div>
        </div>
        <div className="chat_list_container">
          {conversations.map((e) => (
            <div key={e._id} onClick={() => getMessages(e._id)}>
              <Conversation
                conversation={e}
                currentUser={currentUser}
                image={"/p1.jpg"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
