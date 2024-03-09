"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import chart

const ScatterChartComponent = () => {
  const { dataScatter, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">ScatterChart</div>;
};

export default ScatterChartComponent;
