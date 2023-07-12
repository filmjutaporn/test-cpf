import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    label = "",
    icon = "",
    isShowBorder = false,
    fontColor = "",
    backgroundColor = "transparent",
    width = "",
    iconColor = "",
    className = "",
    iconClassName = "",
  } = props;

  return (
    <div
      className={`${styles["wrap-button"]} ${styles[className]}`}
      style={{
        background: backgroundColor,
        color: fontColor,
        border: isShowBorder ? "1px solid #E8E9EB" : "none",
        width: width ? width : "fit-content",
      }}
    >
      {icon && (
        <i
          className={`${icon} ${styles[iconClassName]}`}
          style={{ color: iconColor ? iconColor : "#8A9099" }}
        />
      )}
      {label && <span>{label}</span>}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  isShowBorder: PropTypes.bool,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  iconColor: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default Button;
