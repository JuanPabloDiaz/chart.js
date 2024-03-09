"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

import { ResponsiveContainer, Treemap } from "recharts";

const TreemapComponent = () => {
  const { dataTreemap, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        width={730}
        height={250}
        data={dataTreemap.data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      />
    </ResponsiveContainer>
  );
};

export default TreemapComponent;
