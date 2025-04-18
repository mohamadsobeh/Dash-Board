import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Positive", Likes: 400, Comments: 240 },
  { name: "Neutral", Likes: 300, Comments: 139 },
  { name: "Negative", Likes: 200, Comments: 98 },
];

const EngagementChart = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-center text-[#9f8854] text-lg font-bold mb-4">
          Engagement Analysis by Sentiment
        </h2>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Likes" fill="#82ca9d" />
          <Bar dataKey="Comments" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default EngagementChart;
