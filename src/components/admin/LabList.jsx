import React, { useState } from 'react';
import Pagination from "react-js-pagination";
// import "../bootstrap/less/bootstrap.less"
import {
  Filter,
  Download,
  Upload,
  Edit,
  Trash,
  MessageSquare,
  Eye
} from 'lucide-react';
import LabRegistration from './LabRegistration';
import LabUserRegistration from './LabUserRegistration';
import LabSelection from './LabSelection';
import DeleteConfirmation from '../layout/DeleteConfirmation';
import LabUpdate from './LabUpdate';
import { FaBuilding, FaCalendar, FaIdBadge, FaMale, FaPhone, FaRecycle, FaUser } from 'react-icons/fa';
import { RiResetLeftFill } from 'react-icons/ri';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import { TbStatusChange } from 'react-icons/tb';
import { BsCashCoin } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import LabUserAssign from './LabUserAssign';
// import TestReportUpdate from './TestReportUpdate';
// import TestReportRegistration from './TestReportRegistration';
// import TestTypeRegistration from './TestTypeRegistration';
// import DeleteConfirmation from './DeleteConfirmation';
// import PatientRegistration from '../lab/PatientRegistration';

const LabList = () => {
  const labData = [
    {
      id: "1",
      labId: "LAB-001",
      name: "ABC",
      address: "New York, USA",
      date: "2025-02-03",
      patientCount: 5,
      reportCount: 15,
      labUserCount: 1,
      labAdminCount: 1,
      branchCount: 2,
      status: "Active"
    },
    {
      id: "2",
      labId: "LAB-002",
      name: "XYZ",
      address: "Kegalle",
      date: "2025-02-11",
      patientCount: 3,
      reportCount: 6,
      labUserCount: 1,
      labAdminCount: 1,
      branchCount: 2,
      status: "Active"
    },
    {
      id: "3",
      labId: "LAB-003",
      name: "EFG",
      address: "Kandy",
      date: "2025-02-10",
      patientCount: 6,
      reportCount: 9,
      labUserCount: 2,
      labAdminCount: 1,
      branchCount: 1,
      status: "Inactive"
    },
    {
      id: "4",
      labId: "LAB-004",
      name: "CJH",
      address: "Mawanella",
      date: "2025-02-06",
      patientCount: 8,
      reportCount: 8,
      labUserCount: 1,
      labAdminCount: 1,
      branchCount: 2,
      status: "Active"
    },
    {
      id: "5",
      labId: "LAB-005",
      name: "ABC",
      address: "Colombo",
      date: "2025-02-10",
      patientCount: 10,
      reportCount: 13,
      labUserCount: 2,
      labAdminCount: 1,
      branchCount: 1,
      status: "Inactive"
    },
  ];

  const [labs, setLabs] = useState(labData);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('sales');
  const [isUpdateLabModalOpen, setIsUpdateLabModalOpen] = useState(false);
  const [isNewLabRegistrationModalOpen, setIsNewLabRegistrationModalOpen] = useState(false);
  const [isNewLabUserRegistrationModalOpen, setIsNewLabUserRegistrationModalOpen] = useState(false);
  const [isLabUserAssignModalOpen, setIsLabUserAssignModalOpen] = useState(false);
  // const [isNewTestTypeModalOpen, setIsNewTestTypeModalOpen] = useState(false);
  // const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleReset = () => {
    // setFormData({
    //   labId: "",
    //   labName: "",
    //   branchId: "",
    //   branchName: "",
    //   mobile: "",
    //   status: "",
    //   fromDate: "",
    //   toDate: "",
    //   sorting: "",
    // });
  };
  const handleUpdateClick = () => {
    setIsUpdateLabModalOpen(true);
  };

  const handleNewLabRegistrationClick = () => {
    setIsNewLabRegistrationModalOpen(true);
  };

  const handleNewLabUserRegistrationClick = () => {
    setIsNewLabUserRegistrationModalOpen(true);
  };

  const handleLabUserAssignClick = () => {
    setIsLabUserAssignModalOpen(true);
  };

  const handleDeleteConfirmationClick = () => {
    setIsDeleteConfirmationModalOpen(true);
  };

  // Summary data
  const summaryData = {
    totalSalesOrder: 43,
    pendingToFulfilled: 15,
    waitingForPayment: 20,
    waitingForDelivery: 20,
    totalOrderValue: 'IDR 29,924,500'
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-xl font-medium text-gray-700 mb-6">Manage Labs</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            onClick={() => setActiveTab('sales')}
            className={`${activeTab === 'sales'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Approved & Paid Labs
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            UnPaid Labs
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Annual Subsc
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Monthly Subsc
          </button>
        </nav>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Left - Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewLabRegistrationClick()}>
              <span className="mr-1">+</span> ADD NEW LAB
            </button>
            {/* <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewLabUserRegistrationClick()}>
              <span className="mr-1">+</span> ADD NEW LAB USER
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleLabUserAssignClick()}>
              <span className="mr-1">+</span> ASSIGN USER
            </button> */}
            <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md text-sm flex items-center justify-center">
              EXPORT
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="w-full sm:w-54 flex gap-x-2 justify-center mt-auto">
              <div className="w-1/2">
                <button className="border w-full border-gray-300 px-3 py-2 rounded-md text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer"
                  onClick={handleToggleFilters} >
                  <Filter size={16} />
                  <span className="ml-1">Filter</span>
                </button>
              </div>

              <div className="w-1/2">
                <button className="border w-full border-gray-300 px-3 py-2 rounded-md text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer"
                  onClick={handleReset} >
                  <RiResetLeftFill size={16} />
                  <span className="ml-1">Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {showFilters && (
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-5">
              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Lab ID</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="LAB_00001" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Lab Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaBuilding className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Status</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <TbStatusChange className="text-gray-500" />
                  </div>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                    <option defaultValue>Choose a Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">From</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaCalendar className="text-gray-500" />
                  </div>
                  <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">To</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaCalendar className="text-gray-500" />
                  </div>
                  <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Sort By</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BiSort className="text-gray-500" />
                  </div>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                    <option defaultValue>Choose a Sorting</option>
                    <option>Reg Date (ASC)</option>
                    <option>Reg Date (DESC)</option>
                    <option>Report Count (ASC)</option>
                    <option>Report Count (DESC)</option>
                    <option>Patient Count (ASC)</option>
                    <option>Patient Count (DESC)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count & Date Range */}
      <div className="bg-white py-3 px-4 flex flex-col sm:flex-row justify-between text-xs text-gray-500">
        <span>44 result found</span>
        <div className="flex justify-between mt-2 sm:mt-0">
          {/* <span>Created Period 29 Jun 2024 - 29 Jul 2024</span> */}
          {/* <button className="text-gray-500 ml-4 hover:text-gray-700">Reset Filters</button> */}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="bg-white py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Labs</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Patients</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Reports</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Waiting for Payment</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Inactive Labs</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white -mt-2 p-4 overflow-x-auto">
        <table className="min-w-full rounded-xl p-4 bg-green-300/20">
          <thead className=" border-b-emerald-400 border-b-3">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab ID
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab Details
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab User
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab Admin
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Branches
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Patients
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Reports
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Registred Date
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {labs.map((lab) => (
              <tr key={lab.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {lab.id}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {lab.labId}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <p><strong>{lab.name}</strong></p>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.labUserCount}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.branchCount}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.labAdminCount}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.patientCount}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.reportCount}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {lab.status}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {lab.date}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="hover:text-green-500"
                      onClick={() => handleUpdateClick()}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="hover:text-green-500">
                      <Trash size={16}
                        onClick={() => handleDeleteConfirmationClick()}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination or footer can be added here if needed */}
        <div className="px-4 py-3">
          {/* <div></div> */}
          {/* <div className="text-xs text-gray-500">10 Entries</div> */}
          {/* <Pagination
            // activePage={currentPage}
            // itemsCountPerPage={booksResPerPage}
            // totalItemsCount={totalItems}
            // onChange={handlePageChange}
            activePage="1"
            itemsCountPerPage="3"
            totalItemsCount="7"
            // onChange={handlePageChange}
            nextPageText={'Next'}
            prevPageText={'Previous'}
            itemClass="page-item"
            linkClass="page-link" /> */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* update report details popup */}
      {isUpdateLabModalOpen && (
        <LabUpdate setIsUpdateLabModalOpen={setIsUpdateLabModalOpen} />
      )}

      {isNewLabRegistrationModalOpen && (
        <LabRegistration setIsNewLabRegistrationModalOpen={setIsNewLabRegistrationModalOpen} />
      )}

      {isNewLabUserRegistrationModalOpen && (
        <LabUserRegistration setIsNewLabUserRegistrationModalOpen={setIsNewLabUserRegistrationModalOpen} />
      )}

      {/* {isNewTestTypeModalOpen && (
        <TestTypeRegistration setIsNewTestTypeModalOpen={setIsNewTestTypeModalOpen} />
      )} */}

      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmation setIsDeleteConfirmationModalOpen={setIsDeleteConfirmationModalOpen} />
      )}

      {isLabUserAssignModalOpen && (
        <LabUserAssign setIsLabUserAssignModalOpen={setIsLabUserAssignModalOpen} />
      )}

    </div>
  );
};

export default LabList;