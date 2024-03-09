"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

import { PieChart, Pie, ResponsiveContainer } from "recharts";

const PieChartComponent = () => {
  const { dataPie, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={dataPie.data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={dataPie.data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
