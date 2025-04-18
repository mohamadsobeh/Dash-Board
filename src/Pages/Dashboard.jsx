import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SentimentChart from "../components/SentimentChart";
import EngagementChart from "../components/EngagementChart";
import ClusterAnalysisChart from "../components/ClusterAnalysisChart";
import ClusterBreakdown from "../components/ClusterBreakdown";
import TableSimple from "../components/TableSimple";
import SeasonalSentiment from "../components/SeasonalSentiment";
import CommentSentiment from "../components/CommentSentiment";
import DetailedPostsTables from "../components/DetailedPostsTables";
import LastMonthSentiment from "../components/LastMonthSentiment";
import TableLastMonth from "../components/TableLastMonth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const auth = Cookies.get("authToken");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!auth) {
    return ( <div className="flex flex-col items-center justify-center md:flex-row min-h-screen bg-gray-100">
      <p className="font-bold text-5xl text-red-500 ">No Token</p>
    </div>);
    // navigate('/')
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-gray-800 text-white rounded-md mb-4"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#9f8854]">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Overview of key metrics and reports.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-[#0a0a0abd] p-4 rounded-md shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-gray-50 w-full p-4 rounded-2xl shadow">
                <SentimentChart />
              </div>
              <div className="bg-gray-50 w-full p-4 rounded-2xl shadow">
                <EngagementChart />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-[#9f8854] p-4 rounded-md shadow-sm">
            <div className="bg-gray-50 w-full p-4 rounded-2xl shadow">
              <ClusterAnalysisChart />
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-[#0a0a0abd] w-full p-4 rounded-lg shadow-xl">
            <ClusterBreakdown />
          </div>

          {/* Section 4 */}
          <div className="bg-[#9f8854] w-full p-4 rounded-lg shadow-xl">
            <TableSimple />
          </div>

          {/* Section 5 */}
          <div className="bg-[#0a0a0abd] p-4 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 w-full p-4 rounded-2xl shadow">
                <SeasonalSentiment />
              </div>
              <div className="bg-gray-50 w-full p-4 rounded-2xl shadow">
                <CommentSentiment />
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-[#9f8854] w-full p-4 rounded-lg shadow-xl">
            <DetailedPostsTables />
          </div>

          {/* Section 7 */}
          <div className="bg-[#0a0a0abd] w-full p-4 rounded-lg shadow-xl">
            <LastMonthSentiment />
          </div>

          {/* Section 8 */}
          <div className="bg-[#9f8854] w-full p-4 rounded-lg shadow-xl">
            <TableLastMonth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
