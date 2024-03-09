"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import funnel chart

const FunnelChartComponent = () => {
  const { dataFunnel, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">FunnelChart</div>;
};

export default FunnelChartComponent;
