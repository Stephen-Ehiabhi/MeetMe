import React from "react";
//import Img from 'react-optimized-image';
import p1 from "../images/steevgrey_pp_1.jpg";

import "./MessageList.css";

const MessageList = () => {
  return (
    <>
      <div className="message_list_cont">
        {/* first div */}
        <div className="account_div">
          <img className="round_photo" src={p1} />
          <div className="account_info">
            <p className="account_info_name">Stephen Ehiabhi</p>
            <p className="account_info_p">My account</p>
          </div>
        </div>
        {/* second div */}
        <div className="connected_users_main">
          <div className="connected_users_div">
            <div>
              <div className="connected_users_nav">
                <p className="connected_users_nav_h">Online now</p>
                <p className="connected_users_nav_p">10</p>
              </div>
              <div className="connected_users_photos">
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
                <img className="round_photo" src={p1} />
              </div>
            </div>
            {/* third div */}
            <div className="search_message_div">
              <div>
                <div className="search_message_nav_icons">
                  <div>{/*icon*/}</div>
                  <div>{/*icon*/}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="search_message_box_div">
            <div>{/*icon*/}</div>
            <textarea
              rows="1"
              className="search_message_box_input"
              placeholder="Search"
              style={{ resize: "none" }}
            />
          </div>
        </div>

        {/* fourth div */}
        <div className="chat_list_container">
          <div className="chat_list">
            <div className="chat_list_user_photo">{/* <Img src={p1} />*/}</div>
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
    </>
  );
};

export default MessageList;
