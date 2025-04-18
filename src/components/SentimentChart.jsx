import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = () => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Distribution",
        data: [32.4, 62.2, 5.4],
        backgroundColor: ["#10b981", "#64748b", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-center text-[#9f8854] text-lg font-bold mb-2">
          Sentiment Distribution
        </h2>
        <div className="h-64">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;
