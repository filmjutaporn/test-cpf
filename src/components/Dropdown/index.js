import React from "react";
import "./style.scss";

const Dropdown = (props) => {
  const {
    label = "",
    icon = "",
    backgroundColor = "transparent",
    isShowBorder = false,
    image = null,
    svg = null
  } = props;

  return (
    <div
      className="wrap-dropdown"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        border: isShowBorder ? "1px solid #E8E9EB" : "none",
      }}
    >
      {/* image */}
      {image && <img src={image} alt={"img-dropdown"} />}

      {/* icon */}
      {icon && <i className={`icon ${icon}`} />}

      {/* svg */}
      {svg && svg}

      {/* label */}
      <span>{label}</span>

      <i className="icon-arrow-down icon" />
    </div>
  );
};

export default Dropdown;
