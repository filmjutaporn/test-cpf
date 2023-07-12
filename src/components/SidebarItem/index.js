import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const SidebarItem = (props) => {
  const {
    isActive = false,
    icon = "",
    label = "",
    badge = "",
    subMenu = [],
    svg = null,
  } = props;

  const path = window?.location?.pathname?.split("/");
  const [showSubmenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    if (path[1] == "e-commerce") {
      setShowSubmenu(true);
    }
  }, []);

  return (
    <div className={styles["wrap-menu-item"]}>
      <div
        className={classNames(
          `${styles["sidebar-item"]}`,
          isActive && `${styles["wrap-active"]}`
        )}
      >
        {isActive && <div className={styles["item-active"]}></div>}

        <div className={styles["cover-icon-text"]}>
          {icon && <i className={`${icon}`} />}

          {svg && svg}

          {label === "e-commerce" ? (
            <a
              className="cursor-pointer"
              onClick={() => setShowSubmenu(!showSubmenu)}
            >
              {label}
            </a>
          ) : (
            <a href={`/${label}`}>{label}</a>
          )}
        </div>

        {label === "e-commerce" && (
          <i
            className={classNames(
              `${styles["icon-sidebar"]} icon-arrow-right`,
              showSubmenu && `${styles["arrow-down"]}`
            )}
            onClick={() => setShowSubmenu(!showSubmenu)}
          />
        )}

        {badge && (
          <div className={styles.badge}>
            <span>{badge}</span>
          </div>
        )}
      </div>

      {showSubmenu && (
        <div
          className={classNames(
            `${styles["dropdown-container"]}`,
            showSubmenu && `${styles["showSubmenu"]}`
          )}
        >
          {subMenu.map((item) => {
            const activeSubmenu = path[path.length - 1] == item?.label;

            return (
              <div
                className={classNames(
                  `${styles["cover-subMenu"]}`,
                  activeSubmenu && `${styles["subMenu-active"]}`
                )}
              >
                <span
                  className={classNames(
                    `${styles.circle}`,
                    activeSubmenu && `${styles["circle-active"]}`
                  )}
                ></span>
                <a className={styles.subMenu} href={`/${label}/${item?.label}`}>
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

SidebarItem.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  badge: PropTypes.string,
  subMenu: PropTypes.array,
  svg: PropTypes.string,
};

export default SidebarItem;
