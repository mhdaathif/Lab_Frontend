import { useState } from "react";
import { FaBell, FaExclamationTriangle, FaCheckCircle, FaSync } from "react-icons/fa";

const initialNotifications = [
  { id: 1, type: "alert", message: "Server downtime detected!", time: "Just now" },
  { id: 2, type: "test", message: "Patient #12345 test results are ready.", time: "5 mins ago" },
  { id: 3, type: "update", message: "System update scheduled for tonight.", time: "1 hour ago" },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaBell /> Notifications Center
      </h2>

      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Alerts</h3>
          <button onClick={clearNotifications} className="text-red-500 hover:text-red-700 text-sm">
            Clear All
          </button>
        </div>

        {notifications.length === 0 ? (
          <p className="text-gray-500">No new notifications</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="p-3 mb-2 flex items-center gap-3 border-b last:border-none"
              >
                {notification.type === "alert" && <FaExclamationTriangle className="text-red-500" />}
                {notification.type === "test" && <FaCheckCircle className="text-green-500" />}
                {notification.type === "update" && <FaSync className="text-blue-500" />}
                <div>
                  <p className="text-sm">{notification.message}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
