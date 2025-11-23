import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationsCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [replyingTo, setReplyingTo] = useState(null);
  const navigate = useNavigate();

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Simulate fetching notifications
    const fetchNotifications = () => {
      const mockNotifications = [
        {
          id: 1,
          type: 'message',
          content: 'John Doe sent you a message',
          message: 'Hey there, just checking in on the project status!',
          senderId: 'john123',
          senderName: 'John Doe',
          timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 mins ago
          read: false
        },
        {
          id: 2,
          type: 'alert',
          content: 'Your subscription will expire soon',
          timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
          read: false
        },
        {
          id: 3,
          type: 'update',
          content: 'System maintenance scheduled for tomorrow',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
          read: true
        },
        {
          id: 4,
          type: 'message',
          content: 'Jane Smith mentioned you in a comment',
          message: 'I think @you would be perfect for this task!',
          senderId: 'jane456',
          senderName: 'Jane Smith',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
          read: true
        }
      ];
      
      setNotifications(mockNotifications);
      setUnreadCount(mockNotifications.filter(notif => !notif.read).length);
    };

    fetchNotifications();
    
    // Set up interval to periodically check for new notifications
    const intervalId = setInterval(fetchNotifications, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notif => ({ ...notif, read: true }))
    );
    setUnreadCount(0);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} min${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'message':
        return '💬';
      case 'alert':
        return '⚠️';
      case 'update':
        return '🔄';
      default:
        return '📢';
    }
  };

  const handleOpenReply = (notification) => {
    markAsRead(notification.id);
    setReplyingTo(notification);
  };

  const handleCloseReply = () => {
    setReplyingTo(null);
  };

  const handleSendReply = (replyData) => {
    // Here you would typically send the reply to your API
    console.log('Sending reply:', replyData);
    
    // For demonstration purposes, we'll just show a success message
    alert(`Reply sent to ${replyingTo.senderName}`);
  };

  const handleViewAllNotifications = () => {
    setIsOpen(false);
    navigate('/notifications');
  };

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    
    if (notification.type === 'message') {
      handleOpenReply(notification);
    } else {
      // Handle other notification types as needed
      console.log('Clicked notification:', notification);
    }
  };

  return (
    <div className="relative left-100">
      {/* Notification Bell Icon */}
      <button
        onClick={toggleNotifications}
        className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
          <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Mark all as read
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <span className="text-xl">{getTypeIcon(notification.type)}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{notification.content}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTime(notification.timestamp)}
                      </p>
                      {notification.type === 'message' && (
                        <button 
                          className="text-xs text-blue-600 hover:text-blue-800 mt-2 flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenReply(notification);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                          Reply
                        </button>
                      )}
                    </div>
                    {!notification.read && (
                      <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleViewAllNotifications}
              className="w-full text-center text-sm text-blue-600 hover:text-blue-800"
            >
              View all notifications
            </button>
          </div>
        </div>
      )}

      {/* Message Reply Modal */}
      {replyingTo && (
        <MessageReplyPage 
          notification={replyingTo}
          onClose={handleCloseReply}
          onSend={handleSendReply}
        />
      )}
    </div>
  );
};

export default NotificationsCenter;