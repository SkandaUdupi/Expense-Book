import React from "react";
import "./Chart.css";

const ChartBar = (props) => {
  let chart_height = "0%";

  if (props.max > 0) {
    chart_height = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chart_height }}></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
