import React, { useState } from "react";
import {
  BarChart as BarCharts,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "./style.module.scss";
import CustomResponsiveContainer from "../CustomResponsiveContainer";
import { mockBarChart } from "../../mock";

const BarChart = () => {
  const [position, setPosition] = useState({});

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles["custom-tooltip"]}>
          <div className={styles["cover-value"]}>
            <div className={styles.item}>
              <span
                className={styles.color}
                style={{ background: payload[0]?.fill }}
              ></span>
              <span className={styles.label}>{`${payload[0].value}`}</span>
            </div>
            <div className={styles.item}>
              <span
                className={styles.color}
                style={{ background: payload[1]?.fill }}
              ></span>
              <span className={styles.label}>{`${payload[1].value}`}</span>
            </div>
          </div>

          <span className={styles.date}>23 August, 2020</span>
        </div>
      );
    }

    return null;
  };

  const customTick = (value) => {
    return value === 0 ? 0 : `${value}K`;
  };

  return (
    <CustomResponsiveContainer
      className={styles["wrap-bar-chart"]}
    >
      <BarCharts
        width={350}
        height={250}
        data={mockBarChart}
        barSize={20}
        barGap={0}
      >
        <CartesianGrid vertical={false} stroke="#E8E9EB" />
        <XAxis
          dataKey="day"
          tickMargin={10}
          tickLine={false}
          tick={{ fill: "#8A9099" }}
          axisLine={{ stroke: "#E8E9EB" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#8A9099" }}
          tickFormatter={customTick}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
          position={{ x: position.x - 70, y: position.y - 80 }}
        />
        <Bar
          dataKey="income"
          fill="#0A6EE1"
          onMouseOver={(data) => {
            setPosition(data);
          }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="expense"
          fill="#22AB67"
          onMouseOver={(data) => {
            setPosition(data);
          }}
          radius={[10, 10, 0, 0]}
        />
      </BarCharts>
    </CustomResponsiveContainer>
  );
};

export default BarChart;
