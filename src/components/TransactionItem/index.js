import React from "react";
import "./style.scss";

const TransactionItem = (props) => {
  const { name = "", date = '', total = 0 } = props;
  return (
    <div className="wrap-transaction-item">
      <div className="cover-left-side">
        <div className="cover-icon-item">
          <i className="icon-cart" />
        </div>

        <div className="cover-type">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </div>
      </div>

      <div className="cover-total">
        <span>-${total}</span>
      </div>
    </div>
  );
};

export default TransactionItem;
