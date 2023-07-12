import classNames from "classnames";
import React, { useState } from "react";
import styles from "./style.module.scss";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles["wrap-checkbox"]}>
      <div
        className={classNames(
          `${styles.checkmark}`,checked && `${styles.checked} icon-checkbox`
        )}
        onClick={() => setChecked(!checked)}
      ></div>
    </div>
  );
};

export default Checkbox;
