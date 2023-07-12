import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const TransactionItem = (props) => {
  const { name = "", date = "", total = 0, icon = "" } = props;
  return (
    <div className={styles["wrap-transaction-item"]}>
      <div className={styles["cover-left-side"]}>
        {icon}

        <div className={styles["cover-type"]}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>

      <div className={styles["cover-total"]}>
        <span>-${total}</span>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  total: PropTypes.number,
  icon: PropTypes.string,
};

export default TransactionItem;
