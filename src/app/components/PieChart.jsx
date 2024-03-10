"use client";

// import React, { useContext } from "react";
// import { AppContext } from "../context";

import { Loading } from "./Loading";

// import chart
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const PieChartComponent = () => {
  // const { dataPie, isLoading } = useContext(AppContext);

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
      type: "pie",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // x-axis
        datasets: [
          // y-axis
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
          {
            label: "Revenue",
            data: [2, 1, 3, 2, 4, 3],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
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
    <div className="w-full h-full text-center items-center flex">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChartComponent;
