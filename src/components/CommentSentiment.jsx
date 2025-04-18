import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Neutral", Likes: 250, Comments: 150 },
  { name: "Negative", Likes: 10, Comments: 10 },
];

const CommentSentiment = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-100">
        <h2
          className="text-center text-[#9f8854] text-xlg font-bold mb-10 mt-5"
        >
          Comment Sentiment Analysis
        </h2>
        <BarChart
          width={400}
          height={350}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Likes" fill="#64748b" />
          <Bar dataKey="Comments" fill="#ef4444" />
        </BarChart>
      </div>
    </div>
  );
};

export default CommentSentiment;
