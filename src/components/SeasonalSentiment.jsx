import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SeasonalSentiment = () => {
  const data = {
    labels: [
      "Apr", "Jul", "Oct", "Jan 2024", "Apr", "Jul", "Oct",
    ],
    datasets: [
      {
        label: "Negative",
        data: [2, 0, 0, 10, 0, 0, 2],
        borderColor: "#ef4444", 
        backgroundColor: "rgba(245, 158, 11, 0.3)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ef4444",
        pointHoverRadius: 5,
        tension: 0,
      },
      {
        label: "Neutral",
        data: [6, 8, 6, 4, 6, 0, 8],
        borderColor: "#64748b", 
        backgroundColor: "rgba(251, 113, 133, 0.3)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#64748b",
        pointBorderColor: "#64748b",
        pointHoverRadius: 5,
        tension: 0,
      },
      {
        label: "Positive",
        data: [0, 2, 0, 6, 0, 8, 0],
        borderColor: "#10b981", 
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#10b981",
        pointHoverRadius: 5,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      title: {
        display: true,
        text: "Monthly Sentiment Trends Over Time",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          color:"#9f8854",
          font: {
            size: 16,
          },
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Posts",
          color:"#9f8854",
          font: {
            size: 16,
          },
        },
        ticks: {
          stepSize: 2,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-center text-[#9f8854] text-lg font-bold mb-2">
        Seasonal Sentiment Trends
      </h2>
      <div style={{ height: "400px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SeasonalSentiment;
