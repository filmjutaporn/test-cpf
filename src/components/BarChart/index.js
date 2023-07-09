import React, { useState } from "react";

import {
  BarChart as BarCharts,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./style.scss";
import CustomResponsiveContainer from '../CustomResponsiveContainer'

const BarChart = () => {
  const [position, setPosition] = useState({});

  const data = [
    {
      name: "Mon",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  function formatYAxis(value) {
    return `${value}K`;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="cover-value">
            <div className="item">
              <span
                className="color"
                style={{ background: payload[0]?.fill }}
              ></span>
              <span className="label">{`${payload[0].value}`}</span>
            </div>
            <div className="item">
              <span
                className="color"
                style={{ background: payload[1]?.fill }}
              ></span>
              <span className="label">{`${payload[1].value}`}</span>
            </div>
          </div>

          <span className="date">23 August, 2020</span>
        </div>
      );
    }

    return null;
  };
  return (
    <CustomResponsiveContainer
      width={'100%'}
      height={280}
      className="wrap-bar-chart"
    >
      <BarCharts width={300} height={250} data={data} barSize={20}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickMargin={10} tickLine={false} />
        <YAxis tickLine={false} axisLine={false} tickFormatter={formatYAxis} />
        <Tooltip
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
          position={{ x: position.x - 70, y: position.y - 80 }}
        />
        <Bar
          dataKey="pv"
          fill="#0A6EE1"
          onMouseOver={(data) => {
            setPosition(data);
          }}
        />
        <Bar
          dataKey="uv"
          fill="#22AB67"
          onMouseOver={(data) => {
            setPosition(data);
          }}
        />
      </BarCharts>
    </CustomResponsiveContainer>
  );
};

export default BarChart;
