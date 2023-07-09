import React from "react";
import "./style.scss";
import ImageVisa from "../../static/images/visa.png";

const CreditCard = () => {
  return (
    <div className="wrap-credit-card">
      <div>
        <div className="d-flex justify-between">
          <span className="header">Current Balance</span>
          <img src={ImageVisa} width={50} />
        </div>
        <h4 className="color-white">80,700.00</h4>
      </div>

      <div className="d-flex flex-col">
        <span className="name">Felecia Brown</span>

        <div className="d-flex justify-between">
          <span className="credit-number">•••• •••• •••• 8854</span>
          <span className="expire-date">12/19</span>
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default CreditCard;
