import React, { useState } from 'react';
import { Users, UserPlus, Search, Filter, MoreHorizontal, Edit, Trash, Shield, Mail, Check } from 'lucide-react';

const ActivityLogs = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: 'Dr. James Wilson', email: 'jwilson@labsystem.com', role: 'Lab Director', status: 'Active', franchise: 'Central Lab', lastActive: '10 minutes ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sjohnson@labsystem.com', role: 'Lab Technician', status: 'Active', franchise: 'Westside Clinic', lastActive: '2 hours ago' },
    { id: 3, name: 'Michael Chen', email: 'mchen@labsystem.com', role: 'Administrator', status: 'Active', franchise: 'All Locations', lastActive: '5 minutes ago' },
    { id: 4, name: 'Emma Davis', email: 'edavis@labsystem.com', role: 'Receptionist', status: 'Inactive', franchise: 'Northgate Medical', lastActive: '3 days ago' },
    { id: 5, name: 'Robert Smith', email: 'rsmith@labsystem.com', role: 'Lab Technician', status: 'Active', franchise: 'Eastview Diagnostics', lastActive: '1 hour ago' },
  ]);

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All Roles');

  // Handle user edit
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Handle adding new user
  const handleAddUser = () => {
    setCurrentUser(null);
    setShowModal(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would handle API calls here
    const formData = new FormData(e.target);
    const userData = {
      id: currentUser ? currentUser.id : users.length + 1,
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      status: formData.get('status'),
      franchise: formData.get('franchise'),
      lastActive: currentUser ? currentUser.lastActive : 'Just now'
    };

    if (currentUser) {
      // Update existing user
      setUsers(users.map(user => user.id === userData.id ? userData : user));
    } else {
      // Add new user
      setUsers([...users, userData]);
    }

    setShowModal(false);
  };

  // Filter users based on search and role filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All Roles' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // Get unique roles for filter dropdown
  const roles = ['All Roles', ...new Set(users.map(user => user.role))];

  return (
    <div className="bg-gray-100 p-6">
      
        

        {/* Activity Logs Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Activity Logs</h2>
          <p className="text-gray-600">Track user actions and system activities</p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-medium">Recent Activities</h3>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View All Logs</button>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-start border-b pb-3">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-sm"><span className="font-medium">Michael Chen</span> logged in to the system</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start border-b pb-3">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                  <Edit size={16} />
                </div>
                <div>
                  <p className="text-sm"><span className="font-medium">Dr. James Wilson</span> updated patient test results</p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start border-b pb-3">
                <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm"><span className="font-medium">System</span> sent test result notifications to 3 patients</p>
                  <p className="text-xs text-gray-500">30 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start border-b pb-3">
                <div className="p-2 rounded-full bg-red-100 text-red-600 mr-3">
                  <Shield size={16} />
                </div>
                <div>
                  <p className="text-sm"><span className="font-medium">Security Alert</span> Failed login attempt from unknown IP</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default ActivityLogs;