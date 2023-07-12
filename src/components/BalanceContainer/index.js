import React from "react";
import Badge from "../Badge";
import BalanceLineChart from "../BalanceLineChart";
import styles from "./style.module.scss";

const BalanceContainer = () => {
  return (
    <div className={styles["wrap-balance-container"]}>
      <div className={styles["cover-balance-header"]}>
        <h5 className="font-weight-500">Balance</h5>
        <i className="icon-more cursor-pointer" />
      </div>

      <span className={styles["total-balance"]}>$27,500.00</span>

      <div className={styles["cover-tab"]}>
        <Badge label="Income" backgroundColor={"rgba(255,255,255,0.25)"} />
        <Badge label="Expenses" fontColor={"rgba(255,255,255,0.6)"} />
      </div>

      <div className="d-flex w-100 " style={{ minHeight: "180px" }}>
        <BalanceLineChart />
      </div>

      <div className={styles["cover-text-summary"]}>
        <div>
          <span className={styles.key}>Income:</span>
          <span className={styles.value}>$500</span>
        </div>

        <div>
          <span className={styles.key}>Spending::</span>
          <span className={styles.value}>$200</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceContainer;
