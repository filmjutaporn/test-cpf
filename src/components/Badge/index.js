import React from "react";
import "./style.scss";

const Badge = (props) => {
  const { backgroundColor = "", fontColor = "", label = "", fontWeight = 400 } = props;

  return (
    <div
      className="cover-badge"
      style={{ background: backgroundColor ? backgroundColor : "transparent" }}
    >
      <span style={{ color: fontColor ? fontColor : "#fff", fontWeight: fontWeight }}>{label}</span>
    </div>
  );
};

export default Badge;
