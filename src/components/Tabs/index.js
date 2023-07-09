import React, { useState } from "react";
import Badge from "../Badge";
import "./style.scss";
import classNames from "classnames";
import { mockTabList, mockDisplayType } from "../../mock";

const Tabs = () => {
  const [type, setType] = useState("list");

  return (
    <div className="wrap-tabs">
      <div className="cover-tab-list">
        {mockTabList.map((item, index) => (
          <div
            className={classNames("cover-tabs", index == 0 && "tabs-active")}
            key={index}
          >
            <span className={classNames("", index == 0 && "active")}>
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

      <div className="cover-icon">
        {mockDisplayType.map((item, index) => (
          <i
            key={index}
            className={classNames(item?.icon, item?.name == type && "active")}
            onClick={() => setType(item?.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
