import React, { useState } from "react";
import { Mail, MessageSquare, Calendar, Bell, Trash } from "lucide-react";

const AllNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "message", title: "New Message", description: "You have a message from John", timestamp: "10 mins ago", read: false },
    { id: 2, type: "email", title: "New Email", description: "Your invoice is ready", timestamp: "1 hour ago", read: false },
    { id: 3, type: "calendar", title: "Meeting Reminder", description: "Meeting at 3 PM", timestamp: "2 hours ago", read: true },
    { id: 4, type: "other", title: "System Alert", description: "Server maintenance scheduled", timestamp: "Yesterday", read: true },
  ]);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map((notif) =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  // Function to delete a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Header with Notification Count */}
      <div className="w-full max-w-3xl bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center">
          All Notifications ({notifications.length})
        </h2>
      </div>

      {/* Notification List */}
      <div className="w-full max-w-3xl mt-6 space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center">No notifications available.</p>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`flex items-start p-4 border rounded-lg shadow-sm justify-between ${
                notif.read ? "bg-gray-200" : "bg-blue-50 border-blue-400"
              }`}
            >
              {/* Icon based on type */}
              <div className="text-blue-500">
                {notif.type === "message" && <MessageSquare className="w-6 h-6" />}
                {notif.type === "email" && <Mail className="w-6 h-6" />}
                {notif.type === "calendar" && <Calendar className="w-6 h-6" />}
                {notif.type === "other" && <Bell className="w-6 h-6" />}
              </div>

              {/* Notification Content */}
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">{notif.title}</h3>
                <p className="text-sm text-gray-600">{notif.description}</p>
                <span className="text-xs text-gray-500">{notif.timestamp}</span>
              </div>

              {/* Actions: Mark as Read & Delete */}
              <div className="flex items-center space-x-2">
                {!notif.read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllNotifications;
