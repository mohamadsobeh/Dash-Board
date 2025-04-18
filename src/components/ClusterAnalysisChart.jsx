import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

const ClusterAnalysisChart = () => {
  const data = {
    datasets: [
      {
        label: "Cluster 0",
        data: [
          { x: 100, y: 2 },
          { x: 200, y: 1 },
          { x: 300, y: 3 },
        ],
        backgroundColor: "#facc15",
        borderColor: "#facc15",
        borderWidth: 4,
      },
      {
        label: "Cluster 1",
        data: [
          { x: 400, y: 2 },
          { x: 600, y: 6 },
          { x: 800, y: 8 },
        ],
        backgroundColor: "#f43f5e",
        borderColor: "#f43f5e",
        borderWidth: 4,
      },
      {
        label: "Cluster 2",
        data: [
          { x: 700, y: 14 },
          { x: 900, y: 12 },
          { x: 1000, y: 10 },
        ],
        backgroundColor: "#22c55e",
        borderColor: "#22c55e",
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Clustered Engagement Patterns",
        color: "#9f8854",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Likes",
          font: {
            size: 16,
          },
        },
        min: 0, // الحد الأدنى للمحور السيني
        max: 1200, // الحد الأقصى للمحور السيني
        ticks: {
          stepSize: 100, // المسافة بين كل نقطة في المحور السيني
        },
      },
      y: {
        title: {
          display: true,
          text: "Comment Count",
          font: {
            size: 16,
          },
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 p-6">
      <h2
        className="text-center text-[#0a0a0abd] text-xl font-bold mb-6"
      >
        Cluster Analysis of Engagement Patterns
      </h2>
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ClusterAnalysisChart;
