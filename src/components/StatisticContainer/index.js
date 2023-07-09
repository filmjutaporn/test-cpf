import React from "react";
import BarChart from "../BarChart";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./style.scss";
import { ReactComponent as Calendar } from '../../static/images/icons/calendar.svg';


const StatisticContainer = () => {
  return (
    <div className="wrap-statistics">
      <div className="cover-header-statistics">
        <span className="text-title">Statistics</span>
        <Dropdown
          label="19 Aug - 25 Aug"
          isShowBorder={true}
          svg={<Calendar/>}
        />
      </div>

      <div className="cover-revenue">
        <div className="revenue-group">
          <Button
            icon={"icon-max"}
            backgroundColor={"#DEE8F3"}
            iconColor={"#0A6EE1"}
          />
          <div>
            <h6>20.500</h6>
            <span>Income</span>
          </div>
        </div>

        <div className="revenue-group">
          <Button
            icon={"icon-min"}
            backgroundColor={"#E0EEE7"}
            iconColor={"#22AB67"}
          />
          <div>
            <h6>20.500</h6>
            <span>Expense</span>
          </div>
        </div>
      </div>

      <div style={{ height: "280px" }}>
        <BarChart />
      </div>
    </div>
  );
};

export default StatisticContainer;
