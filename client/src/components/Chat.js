import React from "react";

const Chat = () => {
  return (
    <div className="chat_cont">
      {/* first div */}
      <div className="chat_nav">
        <div className="chat_nav_p_div">
          <p className="chat_nav_p">Chat</p>
        </div>
        <div className="chat_nav_icons">
          <div>{/* video chat icon*/}</div>
          <div>{/* call icon*/}</div>
          <div>{/* image icon*/}</div>
          <div>{/* dcument icon*/}</div>
        </div>
      </div>
      {/* second div */}
      <div className="conversations_div">
        <div className="sender_photo-div">
          <img
            className="sender_photo"
            src="#"
            alt="profile pictures of connected user"
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
            <div>{/* voice note icon*/}</div>
            <div>{/* attach icon*/}</div>
            <div>{/*send icon*/}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
