"use client";
import React, { useContext } from "react";
import { AppContext } from "../context";

// import chart

const AreaChartComponent = () => {
  const { dataArea, isLoading } = useContext(AppContext);

  if (!isLoading) {
    return (
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    );
  }

  return <div className="w-full h-96">Chart goes here</div>;
};

export default AreaChartComponent;
