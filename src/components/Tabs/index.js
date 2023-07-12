import React, { useState } from "react";
import Badge from "../Badge";
import styles from "./style.module.scss";
import classNames from "classnames";
import { mockTabList, mockDisplayType } from "../../mock";

const Tabs = () => {
  const [type, setType] = useState("list");

  return (
    <div className={styles["wrap-tabs"]}>
      <div className={styles["cover-tab-list"]}>
        {mockTabList.map((item, index) => (
          <div
            className={classNames(`${styles["cover-tabs"]}`, index == 0 && `${styles["tabs-active"]}`)}
            key={index}
          >
            <span className={classNames("", index == 0 &&  `${styles.active}`)}>
              {item?.name}
            </span>
            <Badge
              label={item?.value}
              backgroundColor={index === 0 ? "#0A6EE1" : "#E8E9EB"}
              fontColor={index == 0 ? "#ffffff" : "#8A9099"}
              fontWeight={600}
            />
          </div>
        ))}
      </div>

      <div className={styles["cover-icon"]}>
        {mockDisplayType.map((item, index) => (
          <i
            key={index}
            className={classNames(
              "cursor-pointer",
              item?.icon,
              item?.name == type && `${styles.active}`
            )}
            onClick={() => setType(item?.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
