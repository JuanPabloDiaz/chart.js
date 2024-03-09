"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import radar chart

const RadarChartComponent = () => {
  const { dataRadar, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">radar chart goes here</div>;
};

export default RadarChartComponent;
