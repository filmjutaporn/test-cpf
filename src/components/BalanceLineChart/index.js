import React from "react";
import { LineChart, Line, CartesianGrid, Tooltip } from "recharts";
import CustomResponsiveContainer from "../CustomResponsiveContainer";
import styles from "./style.module.scss";
import { mockBalanceLineChart } from "../../mock";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles["custom-tooltip"]}>
        <p>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const BalanceLineChart = () => {
  return (
    <CustomResponsiveContainer width={"100%"} height={150}>
      <LineChart width={500} height={170} data={mockBalanceLineChart}>
        <CartesianGrid strokeDasharray="10 10" vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#FFF"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="rgba(255,255,255, 0.3)"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </CustomResponsiveContainer>
  );
};

export default BalanceLineChart;
