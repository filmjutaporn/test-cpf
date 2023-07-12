import React from "react";
import TransactionItem from "../TransactionItem";
import { mockTransaction } from "../../mock";
import styles from "./style.module.scss";

const TransactionContainer = () => {
  return (
    <div className={styles["wrap-transaction-container"]}>
      <div className={styles["cover-transaction-header"]}>
        <h5 className="font-weight-500">Transactions</h5>
        <i className="icon-more cursor-pointer" />
      </div>

      <div className={styles["cover-display-item"]}>
        {mockTransaction.map((item, index) => (
          <TransactionItem
            key={index}
            name={item?.name}
            date={item?.date}
            total={item?.total}
            icon={item?.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionContainer;
