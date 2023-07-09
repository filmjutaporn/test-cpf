import React from "react";
import { AreaChart as AreaCharts, Area } from "recharts";
import CustomResponsiveContainer from "../CustomResponsiveContainer";

const AreaChart = (props) => {
  const {
    data = [],
    width = "100%",
    height = "100%",
    fill = "",
    stroke = "",
  } = props;

  return (
    <CustomResponsiveContainer width={width} height={height}>
      <AreaCharts width={200} height={170} data={data}>
        <defs>
          <linearGradient
            id={`colorUV-${fill}`}
            x1="60"
            y1="1"
            x2="60"
            y2="47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={fill} />
            <stop offset="1" stopColor={fill} stopOpacity="0" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke={stroke}
          dot={false}
          fill={`url(#colorUV-${fill})`}
        />
      </AreaCharts>
    </CustomResponsiveContainer>
  );
};

export default AreaChart;
