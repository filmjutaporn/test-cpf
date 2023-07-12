import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const Badge = (props) => {
  const {
    backgroundColor = "",
    fontColor = "",
    label = "",
    fontWeight = 400,
  } = props;

  return (
    <div
      className={styles["cover-badge"]}
      style={{ background: backgroundColor ? backgroundColor : "transparent" }}
    >
      <span
        style={{
          color: fontColor ? fontColor : "#fff",
          fontWeight: fontWeight,
        }}
      >
        {label}
      </span>
    </div>
  );
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  label: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default Badge;
