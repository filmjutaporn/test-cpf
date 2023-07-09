import React from "react";
import TransactionItem from "../TransactionItem";
import { mockTransaction } from "../../mock";
import "./style.scss";

const TransactionContainer = () => {
  return (
    <div className="wrap-transaction-container">
      <div className="cover-transaction-header">
        <h5 className="font-weight-500">Transactions</h5>
        <i className=" icon-more cursor-pointer" />
      </div>

      <div className="cover-display-item">
        {mockTransaction.map((item, index) => (
          <TransactionItem
            key={index}
            name={item?.name}
            date={item?.date}
            total={item?.total}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionContainer;
