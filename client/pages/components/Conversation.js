import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Conversation = ({ image, name }) => {
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
            <p className="chat_list_user_name_p">{name}</p>
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
