import React from "react";
import styles from "./style.module.scss";
import { mockSidebar } from "../../mock";
import SidebarItem from "../SidebarItem";
import classNames from "classnames";
import { useSidebar } from "../../hooks/useSidebar";
import PropTypes from "prop-types";

const Sidebar = (props) => {
  const { isShowSideBar = false, screenWidth = 0 } = props;
  const { sidebarSelected } = useSidebar();

  return (
    <div
      className={classNames(
        styles["wrap-side-bar"],
        isShowSideBar && styles["open-side-bar"],
        isShowSideBar && screenWidth <= 767 && styles["side-bar-mobile"]
      )}
    >
      {mockSidebar.map((item, index) => {
        return (
          <SidebarItem
            key={"menuItem" + index}
            label={item?.label}
            isShowBadge={item?.label == "Mail"}
            badge={item?.count}
            isActive={item?.label.toLowerCase() == sidebarSelected}
            icon={item?.icon}
            subMenu={item?.subMenu}
            svg={item?.svg}
          />
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {
  screenWidth: PropTypes.number,
  isShowSideBar: PropTypes.bool,
};

export default Sidebar;
