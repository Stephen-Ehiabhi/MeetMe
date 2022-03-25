import { useEffect, useState } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Conversation = ({ image, conversation, currentUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userConvo = conversation.members.find((c) => c !== currentUser._id);
    async function fetchUser() {
      const fetching = await fetch(
        "http://localhost:3030/api/user/" + userConvo
      );
      const fetched = await fetching.json();
      setUser(()=>fetched.message);
    }
    fetchUser();
  }, [conversation]);

  return (
    <>
      <div className="chat_list">
        <div className="chat_list_user_photo_div">
          <Image
            className="chat_list_user_photo"
            src={image}
            width={45}
            height={45}
          />
          <BsDot className="online_dot" size={60} color={"yellow"} />
        </div>
        <div className="chat_list_user_name_div">
          <div className="chat_list_user_name">
            <p className="chat_list_user_name_p">{user.fullname}</p>
          </div>
          <div className="chat_list_decr_div">
            <p className="chat_list_decr_p">is typing....</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
