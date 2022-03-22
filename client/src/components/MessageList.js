import React from "react";

const MessageList = () => {
  return (
    <div className="message_list_cont">
      {/* first div */}
      <div className="account_div">
        <img src="#" alt="profile pictures of account holder" />
        <div className="account_info">
          <p className="account_info_name">Stephen Ehiabhi</p>
          <p className="account_info_p">My account</p>
        </div>
      </div>
      {/* second div */}
      <div className="connected_users_div">
        <div>
          <div className="connected_users_nav">
            <p className="connected_users_nav_h">Online now</p>
            <p className="connected_users_nav_p">10</p>
          </div>
          <div className="connected_users_photos">
            <img src="#" alt="profile pictures of connected user" />
            <img src="#" alt="profile pictures of connected user" />
            <img src="#" alt="profile pictures of connected user" />
            <img src="#" alt="profile pictures of connected user" />
            <img src="#" alt="profile pictures of connected user" />
          </div>
        </div>
        {/* third div */}
        <div className="search_message_div">
          <div>
            <div className="search_message_nav">
              <p className="search_message_nav_h">Messages</p>
            </div>
            <div className="search_message_nav_icons">
              <div>{/*icon*/}</div>
              <div>{/*icon*/}</div>
            </div>
          </div>
          <div className="search_message_box_div">
            <div>{/*icon*/}</div>
            <input
              className="search_message_box_input"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* fourth div */}
        <div className="chat_list_container">
          <div className="chat_list">
            <div className="chat_list_user_photo">
              <img src="#" alt="profile picture of a connected user" />
            </div>
            <div className="chat_list_user_name_div">
              <div className="chat_list_user_name">
                <p className="chat_list_user_name_p">Fatima presidam</p>
              </div>
              <div className="chat_list_decr_div">
                <div>{/*icon*/}</div>
                <p className="chat_list_decr_p">Fatima is typing</p>
              </div>
            </div>
            <div className="chat_list_new_message_icon">
              <div>{/*icon*/}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
