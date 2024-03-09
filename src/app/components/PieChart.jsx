"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import pie chart

const PieChartComponent = () => {
  const { dataPie, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-96">
      <div>Pie</div>
    </div>
  );
};

export default PieChartComponent;
