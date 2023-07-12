import React from "react";
import styles from "./style.module.scss";
import Logo from "../../static/images/logo.png";
import Bell from "../../static/images/bell.png";
import Avatar from "../../static/images/avatar.png";
import PropTypes from "prop-types";

const MenuBar = (props) => {
  const { handleToggleSidebar } = props;

  return (
    <div className={styles["wrap-menu-bar"]}>
      <div className={styles["cover-left"]}>
        <i
          className="icon-hamburger cursor-pointer"
          onClick={() => handleToggleSidebar()}
        />
        <img src={Logo} />
      </div>

      <div className={styles["cover-right"]}>
        <i className="icon-search cursor-pointer" />
        <img
          className={`${styles["icon-noti"]} icon-bell cursor-pointer`}
          src={Bell}
        />
        <div className={styles.divider}></div>
        <img className={styles.avatar} src={Avatar} />

        <div className={styles["cover-username"]}>
          <span className={styles.username}>ArtTemplate</span>
          <i className="icon-arrow-down cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  handleToggleSidebar: PropTypes.func
}

export default MenuBar;
