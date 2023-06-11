import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  let dataPointValues = props.dataPoints.map((dataPoints) => dataPoints.values);
  let maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          id={datapoint.label}
          value={datapoint.value}
          max={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
