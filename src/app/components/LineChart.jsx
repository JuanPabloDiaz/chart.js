"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import chart

const LineChartComponent = () => {
  const { dataLine, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">Line Chart</div>;
};

export default LineChartComponent;
