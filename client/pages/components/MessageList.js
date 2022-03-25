import Image from "next/image";
import Conversation from "./Conversation";

export default function MessageList({data}) {
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
            <p className="account_info_name">Stephen Ehiabhi</p>
            <p className="account_info_p">My account</p>
          </div>
        </div>
          {/* second div */}
          {/* <div className="connected_users_main">
          <div className="connected_users_div">
            <div className="connected_users_nav">
              <p className="connected_users_nav_h">Online now</p>
              <p className="connected_users_nav_p">10</p>
            </div>
              <div className="connected_users_photos">
                <Image
                  className="round_photo"
                  src="/p1.jpg"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
                <Image
                  className="round_photo"
                  src="/p1.jpg"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
            </div>
        
            <div className="search_message_div">
              <div>
                <div className="search_message_nav_icons">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="search_message_box_div">
            <div></div>
            <textarea
              rows="1"
              className="search_message_box_input"
              placeholder="Search Message..."
              style={{ resize: "none" }}
            />
          </div>
        </div> */}
          <div className="chat_list_container">
            {
              data.map(e=>(
                <Conversation key={e._id} name={"Stephen Ehiabhi"} image={"/p1.jpg"} />
              ))
            }
            </div>
      </div>
    </>
  );
}
