"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

// import chart

const ComposedChartComponent = () => {
  const { dataComposed, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-96">ComposedChart</div>;
};

export default ComposedChartComponent;
