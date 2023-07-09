import React from "react";
import "./style.scss";

const Button = (props) => {
  const {
    label = "",
    icon = "",
    isShowBorder = false,
    fontColor = "",
    backgroundColor = "transparent",
    width = "",
    iconColor = "",
  } = props;

  return (
    <div className="wrap-button" style={{ background: backgroundColor, color: fontColor, border: isShowBorder ? '1px solid #E8E9EB' : 'none', width: width ? width : 'fit-content' }}>
      {icon && (
        <i
          className={icon}
          style={{ color: iconColor ? iconColor : "#8A9099" }}
        />
      )}
      {label && <span>{label}</span>}
    </div>
  );
};

export default Button;
