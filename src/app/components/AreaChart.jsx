"use client";

import React, { useContext } from "react";
import { AppContext } from "../context";

import { Loading } from "./Loading";

// import chart

const AreaChartComponent = () => {
  const { dataArea, isLoading } = useContext(AppContext);

  if (!isLoading) {
    return <Loading />;
  }

  return <div className="w-full h-96">Chart goes here</div>;
};

export default AreaChartComponent;
