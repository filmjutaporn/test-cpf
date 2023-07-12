import React from "react";
import styles from "./style.module.scss";
import AreaChart from "../AreaChart";
import classNames from "classnames";
import { mockAreaChart } from "../../mock";

const CardRevenueItem = (props) => {
  const {
    title = "",
    value = "",
    average = 0,
    status = "up",
    fill = "",
  } = props;

  return (
    <div className={styles["wrap-card-revenue-item"]}>
      <div className={styles["cover-text"]}>
        <span className={styles.title}>{title}</span>
        <div className={styles["cover-total"]}>
          <span className={styles.total}>{`${
            title == "Total Income" ? `$${value}` : value
          }`}</span>
          <div
            className={classNames(
              `${styles["cover-trade"]}`,
              status == "up" && `${styles.up}`
            )}
          >
            <i className={status == "up" ? "icon-max" : "icon-min"} />
            <span className={styles.trade}>{average}%</span>
          </div>
        </div>
      </div>

      <AreaChart data={mockAreaChart} width="100%" stroke={fill} fill={fill} />
    </div>
  );
};

export default CardRevenueItem;
