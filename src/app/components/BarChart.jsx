"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import bar chart

const BarChartComponent = () => {
  const { dataBar, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">BarChart</div>;
};

export default BarChartComponent;
