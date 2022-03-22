import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiGrid, FiPhoneCall, FiSettings } from "react-icons/fi";
import {
  IoPeopleOutline,
  IoAlertCircleOutline,
  IoExitOutline,
} from "react-icons/io5";
import { BsBookmarkDash } from "react-icons/bs";

import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="main_icons_container">
        <div>
          <FiGrid size={27} color={"grey"}/>
        </div>
        <div>
          <AiOutlineMessage size={27} color={"grey"}/>
        </div>
        <div>
          <IoPeopleOutline size={27} color={"grey"}/>
        </div>
        <div>
          <FiPhoneCall size={27} color={"grey"}/>
        </div>
        <div>
          <BsBookmarkDash size={27} color={"grey"}/>
        </div>
        <div>
          <FiSettings size={27} color={"grey"}/>
        </div>
      </div>
      <div className="sub_icons_container">
        <div>
          <IoAlertCircleOutline size={27} color={"grey"}/>
        </div>
        <div>
          <IoExitOutline size={27} color={"grey"}/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
