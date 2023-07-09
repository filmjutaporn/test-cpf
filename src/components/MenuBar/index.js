import React from "react";
import "./style.scss";
import Logo from "../../static/images/logo.png";
import Bell from "../../static/images/bell.png";
import Avatar from "../../static/images/avatar.png";

const MenuBar = (props) => {
  const { handleToggleSidebar } = props;

  return (
    <div className="wrap-menu-bar">
      <div className="cover-left">
        <i
          className="icon-hamburger cursor-pointer"
          onClick={() => handleToggleSidebar()}
        />
        <img src={Logo} />
      </div>

      <div className="cover-right">
        <i className="icon-search cursor-pointer" />
        <img className="icon-bell cursor-pointer" src={Bell} />
        <div className="divider"></div>
        <img className="avatar" src={Avatar} />

        <div className="cover-username">
          <span className="username cursor-pointer">ArtTemplate</span>
          <i className="icon-arrow-down cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
