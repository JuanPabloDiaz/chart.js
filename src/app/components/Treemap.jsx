"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

// Treemap component

const TreemapComponent = () => {
  const { dataTreemap, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-96">
      <div>Treemap goes here</div>
    </div>
  );
};

export default TreemapComponent;
