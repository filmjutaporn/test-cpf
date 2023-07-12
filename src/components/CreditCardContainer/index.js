import React from "react";
import styles from "./style.module.scss";
import Button from "../Button";
import Dropdown from "../Dropdown";
import CreditCard from "../CreditCard";
import ImageMasterCard from "../../static/images/mastercard.png";
import { mockCreditCard } from "../../mock";

const CreditCardContainer = () => {
  return (
    <div className={styles["wrap-credit-card-container"]}>
      <div className={styles["cover-header-credit-card-container"]}>
        <span className={styles["text-title"]}>My cards</span>
        <Dropdown
          label="5880 **** **** 8854"
          isShowBorder={true}
          image={ImageMasterCard}
        />
      </div>

      <div className={styles["cover-card"]}>
        <div className={styles["cover-left"]}>
          <CreditCard />
        </div>

        <div className={styles["cover-right"]}>
          {mockCreditCard.map((item, index) => (
            <>
              <div className={styles["cover-text"]} key={index}>
                <div className={styles.title}>
                  <span>{item?.key}:</span>
                </div>
                <div className={styles.value}>
                  <span>{item?.value}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className={styles["cover-btn"]}>
        <Button
          icon="icon-plus"
          iconColor={"#0A6EE1"}
          label="Add Card"
          backgroundColor={"#DEE8F3"}
          fontColor={"#0A6EE1"}
          width="auto"
        />
        <div className={styles["cover-btn-right"]}>
          <Button
            label="Pay Debt"
            backgroundColor="#0A6EE1"
            fontColor="#fff"
            width="100%"
          />
          <Button label="Cancel" isShowBorder={true} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default CreditCardContainer;
