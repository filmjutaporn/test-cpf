import React from "react";
import styles from "./style.module.scss";
import ImageVisa from "../../static/images/visa.png";

const CreditCard = () => {
  return (
    <div className={styles["wrap-credit-card"]}>
      <div>
        <div className="d-flex justify-between">
          <span className={styles.header}>Current Balance</span>
          <img src={ImageVisa} width={50} />
        </div>
        <h4 className="color-white">80,700.00</h4>
      </div>

      <div className="d-flex flex-col">
        <span className={styles.name}>Felecia Brown</span>

        <div className="d-flex justify-between">
          <span className={styles["credit-number"]}>•••• •••• •••• 8854</span>
          <span className={styles["expire-date"]}>12/19</span>
        </div>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default CreditCard;
