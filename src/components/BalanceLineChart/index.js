import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomResponsiveContainer from "../CustomResponsiveContainer";
import "./style.scss";

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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const BalanceLineChart = () => {
  return (
    <CustomResponsiveContainer width={"100%"} height={150} isLineChart={true}>
      <LineChart width={500} height={170} data={data}>
        <CartesianGrid strokeDasharray="10 10" vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#FFF"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="rgba(255,255,255, 0.3)"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </CustomResponsiveContainer>
  );
};

export default BalanceLineChart;
