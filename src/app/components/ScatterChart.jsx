"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

<ScatterChart
  width={730}
  height={250}
  margin={{
    top: 20,
    right: 20,
    bottom: 10,
    left: 10,
  }}
></ScatterChart>;

const ScatterChartComponent = () => {
  const { dataScatter, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={730}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" name="stature" unit="cm" />
        <YAxis dataKey="y" type="number" name="weight" unit="kg" />
        <ZAxis
          dataKey="z"
          type="number"
          range={[64, 144]}
          name="score"
          unit="km"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={dataScatter.data01} fill="#8884d8" />
        <Scatter name="B school" data={dataScatter.data02} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
