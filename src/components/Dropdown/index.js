import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const {
    label = "",
    icon = "",
    backgroundColor = "transparent",
    isShowBorder = false,
    image = "",
    svg = "",
  } = props;

  return (
    <div
      className={styles["wrap-dropdown"]}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        border: isShowBorder ? "1px solid #E8E9EB" : "none",
      }}
    >
      {/* image */}
      {image && <img src={image} alt={"img-dropdown"} />}

      {/* icon */}
      {icon && <i className={`${styles.icon} ${icon}`} />}

      {/* svg */}
      {svg && svg}

      {/* label */}
      <span>{label}</span>

      <i className={`icon-arrow-down ${styles.icon}`} />
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  isShowBorder: PropTypes.bool,
  image: PropTypes.string,
  svg: PropTypes.string,
};

export default Dropdown;
