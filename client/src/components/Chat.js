import React from "react";
import {
  FiVideo,
  FiPhoneCall,
  FiFileText,
  FiMic,
  FiPaperclip,
} from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const Chat = () => {
  return (
    <div className="chat_cont">
      {/* first div */}
      <div className="chat_nav">
        <div className="chat_nav_p_div">
          <p className="chat_nav_p">Chat</p>
        </div>
        <div className="chat_nav_icons">
          <div>
            <FiVideo />
          </div>
          <div>
            <FiPhoneCall />
          </div>
          <div>
            <IoImageOutline />
          </div>
          <div>
            <FiFileText />
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="conversations_div">
        <div className="sender_photo-div">
          <img
            className="sender_photo"
            src="#"
            alt="profile of connected user"
          />
          <div className="sender_message_div">
            <p className="sender_message_p">Hello there I'm grey</p>
          </div>
        </div>
      </div>
      {/* third div */}
      <div className="send_message_div">
        <form className="send_message">
          <input className="message-input" placeholder="Your message" />
          <div className="send_message_icons">
            <div>
              <FiMic />
            </div>
            <div>
              <FiPaperclip />
            </div>
            <div>
              <RiSendPlaneFill />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
