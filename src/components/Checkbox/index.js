import classNames from "classnames";
import React, { useState } from "react";
import "./style.scss";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="wrap-checkbox">
      <div
        className={classNames("checkmark", checked && "icon-checkbox checked")}
        onClick={() => setChecked(!checked)}
      ></div>
    </div>
  );
};

export default Checkbox;
