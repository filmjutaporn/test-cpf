import React from "react";
import Badge from "../Badge";
import BalanceLineChart from "../BalanceLineChart";
import "./style.scss";

const BalanceContainer = () => {
  return (
    <div className="wrap-balance-container">
      <div className="cover-balance-header">
        <h5 className="font-weight-500">Balance</h5>
        <i className=" icon-more cursor-pointer" />
      </div>

      <span className="total-balance">$27,500.00</span>

      <div className="cover-tab">
        <Badge label="Income" backgroundColor={"rgba(255,255,255,0.25)"} />
        <Badge label="Expenses" fontColor={"rgba(255,255,255,0.6)"} />
      </div>

      <BalanceLineChart />

      <div className="cover-text-summary">
        <div>
          <span className="key">Income:</span>
          <span className="value">$500</span>
        </div>

        <div>
          <span className="key">Spending::</span>
          <span className="value">$200</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceContainer;
