import React from "react";
import { ResponsiveContainer } from "recharts";

const CustomResponsiveContainer = (props) => {
  const { isLineChart = false } = props;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ResponsiveContainer {...props} />
      </div>
    </div>
  );
};

export default CustomResponsiveContainer;
