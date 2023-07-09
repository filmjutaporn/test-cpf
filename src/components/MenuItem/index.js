import React, { useEffect, useState } from "react";
import "./style.scss";
import classNames from "classnames";

const MenuItem = (props) => {
  const {
    isActive = false,
    icon = "",
    label = "",
    badge = "",
    subMenu = [],
    svg = null
  } = props;

  const new_label = label?.toLowerCase();
  const url = new_label == "e-commerce" ? `${new_label}/products` : new_label;

  const path = window?.location?.pathname?.split("/");
  const [showSubmenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    if (path[1] == "e-commerce") {
      setShowSubmenu(true);
    }
  }, []);

  return (
    <div className="wrap-menu-item">
      <div
        className={classNames("sidebar-item", isActive && "wrap-active")}
        onClick={() => setShowSubmenu(!showSubmenu)}
      >
        {isActive && <div className="item-active"></div>}

        <div className="cover-icon-text">
          {icon && <i className={`${icon}`} />}
          {svg && svg}
          <a href={`/${url}`}>{label}</a>
        </div>

        {new_label === "e-commerce" && <i className={classNames('icon-sidebar icon-arrow-right', showSubmenu && 'arrow-down')} />}

        {badge && (
          <div className="badge">
            <span>{badge}</span>
          </div>
        )}
      </div>

      {path[1] === "e-commerce" && (
        <div
          className={classNames(
            "dropdown-container",
            showSubmenu && "showSubmenu"
          )}
        >
          {subMenu.map((item) => {
            const activeSubmenu =
              path[path.length - 1] == item?.label.toLowerCase();

            return (
              <div
                className={classNames(
                  "cover-subMenu",
                  activeSubmenu && "subMenu-active"
                )}
              >
                <span
                  className={classNames(
                    "circle",
                    activeSubmenu && "circle-active"
                  )}
                ></span>
                <a className="subMenu" href="#">
                  {item?.label}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
