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
import p1 from "../images/steevgrey_pp_1.jpg";
import "./Chat.css"

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
            <FiVideo size={27} color={"rgb(83, 145, 83)"}/>
          </div>
          <div>
            <FiPhoneCall size={27} color={"rgb(83, 145, 83)"}/>
          </div>
          <div>
            <IoImageOutline size={27} color={"rgb(83, 145, 83)"}/>
          </div>
          <div>
            <FiFileText size={27} color={"rgb(83, 145, 83)"}/>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="conversations_div">
        <div className="sender_photo-div">
          <img
            className="sender_photo"
            src={p1}
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
          <div>
          <textarea rows="2" className="message-input" placeholder="Message" />         
          </div>
          <div className="send_message_icons">
            <div>
              <FiMic size={27} color={"rgb(83, 145, 83)"}/>
            </div>
            <div>
              <FiPaperclip size={27} color={"rgb(83, 145, 83)"}/>
            </div>
            <div>
              <RiSendPlaneFill size={27} color={"rgb(83, 145, 83)"}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
