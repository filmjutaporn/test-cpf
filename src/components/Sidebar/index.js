import React from "react";
import "./style.scss";
import { mockSidebar } from "../../mock";
import MenuItem from "../MenuItem";
import classNames from "classnames";
import { useSidebar } from "../../hooks/useSidebar";

const Sidebar = (props) => {
  const { isShowSideBar = false, screenWidth = 0 } = props;
  const { sidebarSelected } = useSidebar();

  return (
    <div
      className={classNames(
        "wrap-side-bar",
        isShowSideBar && "open-side-bar",
        isShowSideBar && screenWidth <= 767 && "side-bar-mobile"
      )}
    >
      {mockSidebar.map((item, index) => {
        return (
          <MenuItem
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

export default Sidebar;
