import React from "react";
import "./style.scss";
import Button from "../Button";
import Dropdown from "../Dropdown";
import CreditCard from "../CreditCard";
import ImageMasterCard from "../../static/images/mastercard.png";
import { mockCreditCard } from "../../mock";

const CreditCardContainer = () => {
  return (
    <div className="wrap-credit-card-container">
      <div className="cover-header-credit-card-container">
        <span className="text-title">My cards</span>
        <Dropdown
          label="5880 **** **** 8854"
          isShowBorder={true}
          image={ImageMasterCard}
        />
      </div>

      <div className="cover-card">
        <div className="cover-left">
          <CreditCard />
        </div>

        <div className="cover-right">
          {mockCreditCard.map((item, index) => (
            <>
              <div className="cover-text" key={index}>
                <div className="title">
                  <span>{item?.key}:</span>
                </div>
                <div className="value">
                  <span>{item?.value}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="cover-btn">
        <Button
          icon="icon-plus"
          iconColor={"#0A6EE1"}
          label="Add Card"
          backgroundColor={"#DEE8F3"}
          fontColor={"#0A6EE1"}
          width="auto"
        />
        <div className="cover-btn-right">
          <Button label="Pay Debt" backgroundColor="#0A6EE1" fontColor="#fff" width="100%" />
          <Button label="Cancel" isShowBorder={true} width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default CreditCardContainer;
