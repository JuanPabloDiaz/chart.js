"use client";

// import React, { useContext } from "react";
// import { AppContext } from "../context";

import { Loading } from "./Loading";

// import chart
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const AreaChartComponent = () => {
  // const { dataArea, isLoading } = useContext(AppContext);

  // if (!isLoading) {
  //   return <Loading />;
  // }

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Add this line

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the old chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [3, 2, 1, 5, 4, 6],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
          {
            label: "Orders",
            data: [1, 3, 2, 4, 3, 5],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart">
      <canvas ref={chartRef} />
    </div>
  );
};

export default AreaChartComponent;
