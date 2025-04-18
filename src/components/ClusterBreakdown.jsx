import React from "react";

const ClusterBreakdown = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <h2
          className="text-start text-lg font-bold m-4"
          style={{ color: "#9f8854", fontFamily: "'Arial', sans-serif" }}
        >
          Cluster Breakdown
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate text-sm">
            <thead className="bg-[#9f8854] text-[#0a0a0abd]">
              <tr>
                <th className="p-3 text-left">Cluster</th>
                <th className="p-3 text-left">Likes (mean)</th>
                <th className="p-3 text-left">Likes (max)</th>
                <th className="p-3 text-left">Likes (min)</th>
                <th className="p-3 text-left">CommentCount (mean)</th>
                <th className="p-3 text-left">Comment count (max)</th>
                <th className="p-3 text-left">Comment count (min)</th>
                <th className="p-3 text-left">Engagement rate (mean)</th>
                <th className="p-3 text-left">Engagement rate (max)</th>
                <th className="p-3 text-left">Engagement rate (min)</th>
                <th className="p-3 text-left">PostCount (count)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t text-center">0</td>
                <td className="p-3 border-t text-center">37.87</td>
                <td className="p-3 border-t text-center">318.0</td>
                <td className="p-3 border-t text-center">2.0</td>
                <td className="p-3 border-t text-center">0.37</td>
                <td className="p-3 border-t text-center">4.0</td>
                <td className="p-3 border-t text-center">0.0</td>
                <td className="p-3 border-t text-center">0.04</td>
                <td className="p-3 border-t text-center">0.33</td>
                <td className="p-3 border-t text-center">0.0</td>
                <td className="p-3 border-t text-center">146.0</td>
              </tr>
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t text-center">1</td>
                <td className="p-3 border-t text-center">619.08</td>
                <td className="p-3 border-t text-center">961.0</td>
                <td className="p-3 border-t text-center">366.0</td>
                <td className="p-3 border-t text-center">0.96</td>
                <td className="p-3 border-t text-center">6.0</td>
                <td className="p-3 border-t text-center">0.0</td>
                <td className="p-3 border-t text-center">0.64</td>
                <td className="p-3 border-t text-center">1.0</td>
                <td className="p-3 border-t text-center">0.38</td>
                <td className="p-3 border-t text-center">24.0</td>
              </tr>
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t text-center">2</td>
                <td className="p-3 border-t text-center">18.0</td>
                <td className="p-3 border-t text-center">18.0</td>
                <td className="p-3 border-t text-center">18.0</td>
                <td className="p-3 border-t text-center">15.0</td>
                <td className="p-3 border-t text-center">15.0</td>
                <td className="p-3 border-t text-center">15.0</td>
                <td className="p-3 border-t text-center">0.02</td>
                <td className="p-3 border-t text-center">0.02</td>
                <td className="p-3 border-t text-center">0.02</td>
                <td className="p-3 border-t text-center">1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClusterBreakdown;
