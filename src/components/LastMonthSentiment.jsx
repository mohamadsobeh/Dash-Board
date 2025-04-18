import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LastMonthSentiment = () => {
  const data = {
    labels: ["Positive", "Neutral"], 
    datasets: [
      {
        label: "Sentiment Distribution",
        data: [65.7, 34.3], 
        backgroundColor: ["#10b981", "#64748b"], 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
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
    <div className="flex flex-col md:flex-row justify-between rounded-3xl bg-gray-50 p-6 sm:p-10">
      <div className="w-full sm:w-1/2 p-4">
        <h1 className="text-3xl mb-5 font-bold" style={{ color: "#9f8854" }}>
          Last Month Trend Analysis - 2024-12
        </h1>
        <p className="text-xl">
          The following section provides an analysis of sentiment and engagement patterns observed in the last month. This highlights the most recent performance trends, helping to shape immediate content strategies.
        </p>
      </div>

      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center items-center">
        <h2 className="text-center text-[#9f8854] text-lg sm:text-xl font-bold mb-4">
          Sentiment Distribution
        </h2>
        <div className="flex justify-center items-center max-Width-[250px] max-Height-[250px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LastMonthSentiment;
