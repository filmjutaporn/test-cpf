import React from "react";
import "../styles/dashboard.scss";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import CardRevenueItem from "../components/CardRevenueItem";
import StatisticContainer from "../components/StatisticContainer";
import BalanceContainer from "../components/BalanceContainer";
import CreditCardContainer from "../components/CreditCardContainer";
import TransactionContainer from "../components/TransactionContainer";
import { mockRevenue } from "../mock";
import App from "../App";


const Dashboard = () => {
  return (
    <App>
      <div className="wrap-main">
        <div className="cover-header">
          <div>
            <h4 className="font-weight-500">Overview</h4>
          </div>

          <div className="cover-sort">
            <Button
              icon={"icon-download"}
              backgroundColor={"#fff"}
              iconColor="#3F434A"
            />
            <Dropdown label="Last 7 days" backgroundColor={"#fff"} />
          </div>
        </div>

        <div className="cover-card-revenue">
          {mockRevenue.map((item, index) => (
            <CardRevenueItem
              key={index}
              title={item?.title}
              value={item?.value}
              average={item?.average}
              status={item?.status}
              fill={item?.bg}
            />
          ))}
        </div>

        <div className="cover-statistic">
          <StatisticContainer />
          <BalanceContainer />
        </div>

        <div className="cover-credit-card">
          <CreditCardContainer />
          <TransactionContainer />
        </div>
      </div>
    </App>
  );
};

export default Dashboard;
