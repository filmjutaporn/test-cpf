import React from "react";
import "./style.scss";
import AreaChart from "../AreaChart";
import classNames from "classnames";

const CardRevenueItem = (props) => {
  const {
    title = "",
    value = "",
    average = 0,
    status = "up",
    fill = "",
  } = props;

  const data = [
    {
      name: "Page A",
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 5100,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="wrap-card-revenue-item">
      <div className="cover-text">
        <span className="title">{title}</span>
        <div className="cover-total">
          <span className="total">${value}</span>
          <div className={classNames("cover-trade", status == "up" && "up")}>
            <i className={status == "up" ? "icon-max" : "icon-min"} />
            <span className="trade">{average}%</span>
          </div>
        </div>
      </div>

      <AreaChart data={data} width="100%" stroke={fill} fill={fill} />
    </div>
  );
};

export default CardRevenueItem;
