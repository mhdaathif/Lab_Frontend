import React, { useState, useMemo } from 'react';
import {
  Filter,
  Download,
  Upload,
  Edit,
  Trash,
  MessageSquare,
  Eye
} from 'lucide-react';

function FranchiseManagement() {
  const [franchises, setFranchises] = useState([
    {
      id: 1,
      name: 'Central Lab',
      address: '123 Main St, Anytown, AN 12345',
      manager: 'Dr. Jane Smith',
      staff: 12,
      testsToday: 42,
      revenue: '$1,250',
      status: 'Active'
    },
    {
      id: 2,
      name: 'North Branch',
      address: '456 North Ave, Northville, AN 23456',
      manager: 'Dr. Robert Johnson',
      staff: 8,
      testsToday: 35,
      revenue: '$1,050',
      status: 'Active'
    },
    {
      id: 3,
      name: 'South Branch',
      address: '789 South Blvd, Southport, AN 34567',
      manager: 'Dr. Emily Chen',
      staff: 6,
      testsToday: 28,
      revenue: '$840',
      status: 'Active'
    },
    {
      id: 4,
      name: 'East Branch',
      address: '321 East Road, Eastville, AN 45678',
      manager: 'Dr. Michael Brown',
      staff: 5,
      testsToday: 19,
      revenue: '$570',
      status: 'Maintenance'
    },
    {
      id: 5,
      name: 'West Branch',
      address: '654 West Way, Westfield, AN 56789',
      manager: 'Dr. Sarah Wilson',
      staff: 7,
      testsToday: 0,
      revenue: '$0',
      status: 'Inactive'
    }
  ]);

  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  

  const handleDeleteConfirmationClick = () => {
    setIsDeleteConfirmationModalOpen(true);
  };
  const handleUpdateClick = (patient) => {
    setSelectedReport(patient);
    setIsUpdateReportModalOpen(true);
  };
  

  // Filter franchises based on status
  const filteredFranchises = useMemo(() => {
    return statusFilter === 'All' 
      ? franchises 
      : franchises.filter(f => f.status === statusFilter);
  }, [franchises, statusFilter]);

  const openFranchiseDetails = (franchise) => {
    setSelectedFranchise(franchise);
    setShowModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Count franchises by status
  const franchiseCounts = {
    Active: franchises.filter(f => f.status === 'Active').length,
    Maintenance: franchises.filter(f => f.status === 'Maintenance').length,
    Inactive: franchises.filter(f => f.status === 'Inactive').length
  };

  return (
    <div className="w-full bg-gray-50 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Franchise Management</h1>
      </div>

      {/* Status Filter */}
      <div className="mb-6 flex items-center space-x-4">
        <label className="text-gray-700 font-medium">Filter by Status:</label>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="All">All Franchises</option>
          <option value="Active">Active</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Franchise Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Total Franchises</h2>
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold">{franchises.length}</p>
              <p className="text-gray-500">Total Locations</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Active Franchises</h2>
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold">{franchiseCounts.Active}</p>
              <p className="text-gray-500">Currently Operating</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Franchises in Maintenance</h2>
          <div className="flex items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold">{franchiseCounts.Maintenance}</p>
              <p className="text-gray-500">Maintenance Status</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Inactive Franchises</h2>
          <div className="flex items-center">
            <div className="bg-red-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-3xl font-bold">{franchiseCounts.Inactive}</p>
              <p className="text-gray-500">Temporarily Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franchise Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 ">
          <h2 className="text-lg font-medium">Franchise List</h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-300/20 border-green-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tests Today</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Today</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFranchises.map((franchise) => (
              <tr key={franchise.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{franchise.name}</div>
                  <div className="text-sm text-gray-500">{franchise.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{franchise.manager}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {franchise.staff}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {franchise.testsToday}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {franchise.revenue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(franchise.status)}`}>
                    {franchise.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2 ">
                    <button 
                      className="hover:text-blue-500"
                      onClick={() => openFranchiseDetails(franchise)}
                    >
                      <Eye size={17} />
                    </button>
                    <button className="hover:text-green-500"
                      onClick={() => handleUpdateClick(report)}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="hover:text-green-500">
                      <Trash size={16}
                        onClick={() => handleDeleteConfirmationClick(report)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Franchise Details Modal */}
      {showModal && selectedFranchise && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{selectedFranchise.name} Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{selectedFranchise.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Manager</p>
                  <p className="font-medium">{selectedFranchise.manager}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Staff Count</p>
                  <p className="font-medium">{selectedFranchise.staff}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedFranchise.status)}`}>
                    {selectedFranchise.status}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Performance Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Tests Performed</p>
                    <p className="text-2xl font-bold">{selectedFranchise.testsToday}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Revenue Generated</p>
                    <p className="text-2xl font-bold">{selectedFranchise.revenue}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Avg. Tests per Staff</p>
                    <p className="text-2xl font-bold">
                      {selectedFranchise.staff > 0
                        ? (selectedFranchise.testsToday / selectedFranchise.staff).toFixed(1)
                        : '0'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                {/* <Link to="/lab/dashboard/edit" className="text-white hover:text-gray-300">PatientReport</Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FranchiseManagement;