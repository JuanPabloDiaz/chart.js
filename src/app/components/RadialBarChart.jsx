"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

// import chart

const RadialBarChartComponent = () => {
  const { dataRadialBar, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">RadialBarChart</div>;
};

export default RadialBarChartComponent;
