import React, { useState } from "react";
// import Dashboard from "./Dashboard";
import FranchiseManagement from "./FranchiseManagement";
import FranchiseTimeFilter from "./FranchiseTimeFilter";
import ActivityLogs from "./ActivityLogs";
import LatteGrowthDashboard from "./LatteGrowthDashboard";
import Dashboard from "./Dashboard";
import Notifications from "../Notifications/Notifications";
import NotificationsCenter from "../Notifications/NotificationsCenter";
import AllNotifications from "../Notifications/AllNotifications";

const LabDashboard = () => {
  const [activeTab, setActiveTab] = useState('mainDashboard');

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Dashboard</h1>
        <div className="flex gap-2">
          <span className="text-gray-600">
            Today: {new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}
          </span>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            onClick={() => setActiveTab('mainDashboard')}
            className={`${activeTab === 'mainDashboard'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Main Dashboard
          </button>
          <button
            onClick={() => setActiveTab('franchiseManagement')}
            className={`${activeTab === 'franchiseManagement'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Franchise Management
          </button>
          <button
            onClick={() => setActiveTab('franchiseFilter')}
            className={`${activeTab === 'franchiseFilter'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Franchise Filter
          </button>
          <button
            onClick={() => setActiveTab('latteGrowthDashboard')}
            className={`${activeTab === 'latteGrowthDashboard'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Latte Growth Dashboard
          </button>
        </nav>
      </div>

      <div className="border-b border-gray-200"></div>

      {activeTab === 'mainDashboard' && (
        <div className="bg-gray-50 rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <Dashboard />
          </div>
        </div>
      )}

      {activeTab === 'franchiseManagement' && (
        <div className="bg-gray-50 rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <FranchiseManagement />
          </div>
        </div>
      )}

      {activeTab === 'franchiseFilter' && (
        <div className="bg-gray-50 rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <FranchiseTimeFilter />
          </div>
        </div>
      )}
      {activeTab === 'latteGrowthDashboard' && (
        <div className="bg-gray-50 rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <LatteGrowthDashboard />
          </div>
        </div>
      )}

    </div>
  );
};

export default LabDashboard;
