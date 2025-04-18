import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineBarChart,
  AiOutlineTable,
  AiOutlineFileText,
} from "react-icons/ai";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#0a0a0abd] text-white w-64 p-6 shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
    >
      <button
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={toggleSidebar}
      >
        ✖
      </button>

      {/* Header */}
      <h2 className="text-3xl font-bold mb-10 text-[#9f8854] text-center">
        Swiss Choice
      </h2>
      {/* Menu Items */}
      <ul className="space-y-8">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 text-lg font-medium hover:text-[#9f8854] transition duration-300 ease-in-out"
          >
            <AiOutlineDashboard className="text-2xl" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="flex items-center space-x-4 text-lg font-medium hover:text-[#9f8854] transition duration-300 ease-in-out"
          >
            <AiOutlineUser className="text-2xl" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/report"
            className="flex items-center space-x-4 text-lg font-medium hover:text-[#9f8854] transition duration-300 ease-in-out"
          >
            <AiOutlineFileText className="text-2xl" />
            <span>Report</span>
          </Link>
        </li>
        <li>
          <Link
            to="/chart"
            className="flex items-center space-x-4 text-lg font-medium hover:text-[#9f8854] transition duration-300 ease-in-out"
          >
            <AiOutlineBarChart className="text-2xl" />
            <span>Chart</span>
          </Link>
        </li>
        <li>
          <Link
            to="/tables"
            className="flex items-center space-x-4 text-lg font-medium hover:text-[#9f8854] transition duration-300 ease-in-out"
          >
            <AiOutlineTable className="text-2xl" />
            <span>Tables</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
