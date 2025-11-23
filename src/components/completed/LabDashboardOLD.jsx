import React from "react";
import Dashboard from "../lab/Dashboard/Dashboard";
import FranchiseManagement from "../lab/Dashboard/FranchiseManagement";
import FranchiseTimeFilter from "../lab/Dashboard/FranchiseTimeFilter";
import EditFranchise from "../lab/Dashboard/EditFranchise";
import Notifications from "../lab/Notifications/Notifications";
import NotificationsCenter from "../lab/Notifications/NotificationsCenter";
import AllNotifications from "../lab/Notifications/AllNotifications";
import ActivityLogs from "../lab/Dashboard/ActivityLogs";
import LatteGrowthDashboard from "../lab/Dashboard/LatteGrowthDashboard";

const LabDashboard = () => {
  return (
    <div className=" bg-blue-50">

      <div className="flex bg-gray-100">
        <Dashboard />
      </div>
      <div className="flex my-8 bg-gray-100">
        <FranchiseManagement />
      </div>

      <div className="flex my-8 bg-gray-100">
        <FranchiseTimeFilter />
      </div>
      <div className="flex my-8 bg-gray-100">
        <EditFranchise />
      </div>
      <div className="flex my-8 bg-gray-100">
        <ActivityLogs />
      </div>
      <div className="flex my-8 bg-gray-100">
        <Notifications />
      </div>
      <div className="flex my-8 bg-gray-100">
        <NotificationsCenter />
      </div>
      <div className="flex my-8 bg-gray-100">
        <AllNotifications />
      </div>
      <div className="flex my-8 bg-gray-100">
        <LatteGrowthDashboard />
      </div>
      <div className="flex my-8 bg-gray-100">
        <ActivityLogs />
      </div>

    </div>
  );
};

export default LabDashboard;
