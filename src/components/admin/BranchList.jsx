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
import { FaBuilding, FaCalendar, FaChevronDown, FaChevronUp, FaEdit, FaIdBadge, FaTrash } from 'react-icons/fa';
import LabUserUpdate from './LabUserUpdate';
import { GiCardExchange } from 'react-icons/gi';
import { RiExchangeBoxFill, RiResetLeftFill } from 'react-icons/ri';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import { TbStatusChange } from 'react-icons/tb';
import { BsCashCoin } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import LabAdminSelection from './UserSelection';
import LabUserAssign from './LabUserAssign';
import BranchRegistration from './BranchRegistration';
import BranchUpdate from './BranchUpdate';
// import TestReportUpdate from './TestReportUpdate';
// import TestReportRegistration from './TestReportRegistration';
// import TestTypeRegistration from './TestTypeRegistration';
// import DeleteConfirmation from './DeleteConfirmation';
// import PatientRegistration from '../lab/PatientRegistration';

const BranchList = () => {

  const labData = [
    {
      id: "LAB-001",
      name: "ABC",
      branches: [
        {
          id: "1",
          name: "Mawanella", phone: "079-161-1234", email: "abcmawanela@example.com", status: "Active", address: "No 31, Mawanella", registeredDate: "2025-02-03",
          paymentStatus: "Paid",
          subscription: "Annual",
          patientCount: 5,
          reportCount: 15,
          labUserCount: 1,
          labAdminCount: 1,
        },
        {
          id: "2",
          name: "Kegalle", phone: "079-161-1234", email: "abckegalle@example.com", status: "Active", address: "No 31, Mawanella", registeredDate: "2025-02-03",
          paymentStatus: "Paid",
          subscription: "Annual",
          patientCount: 5,
          reportCount: 15,
          labUserCount: 1,
          labAdminCount: 1,
        },
      ],
      status: "Active",
      registeredDate: "2025-02-03"
    },
    {
      id: "LAB-002",
      name: "XYZ",
      branches: [
        {
          id: "1",
          name: "Mawanella", phone: "079-161-1234", email: "abcmawanela@example.com", status: "Active", address: "No 31, Mawanella", registeredDate: "2025-02-03",
          paymentStatus: "Paid",
          subscription: "Annual",
          patientCount: 5,
          reportCount: 15,
          labUserCount: 1,
          labAdminCount: 1,
        },
        {
          id: "2",
          name: "Kegalle", phone: "079-161-1234", email: "abckegalle@example.com", status: "Active", address: "No 31, Mawanella", registeredDate: "2025-02-03",
          paymentStatus: "Paid",
          subscription: "Annual",
          patientCount: 5,
          reportCount: 15,
          labUserCount: 1,
          labAdminCount: 1,
        },
      ],
      status: "Inactive",
      registeredDate: "2025-02-10",
    },
  ];

  const [expandedRows, setExpandedRows] = useState({});

  const [showFilters, setShowFilters] = useState(false);
  const [expandedLab, setExpandedLab] = useState(null);
  const [activeTab, setActiveTab] = useState('sales');
  const [isUpdateBranchModalOpen, setIsUpdateBranchModalOpen] = useState(false);
  const [isNewLabRegistrationModalOpen, setIsNewLabRegistrationModalOpen] = useState(false);
  const [isNewLabUserRegistrationModalOpen, setIsNewLabUserRegistrationModalOpen] = useState(false);
  const [isBranchRegistrationModalOpen, setIsBranchRegistrationModalOpen] = useState(false);
  const [isNewLabAdminSelectionModalOpen, setIsNewLabAdminSelectionModalOpen] = useState(false);
  const [isLabUserAssignModalOpen, setIsLabUserAssignModalOpen] = useState(false);
  // const [isNewTestTypeModalOpen, setIsNewTestTypeModalOpen] = useState(false);
  // const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);

  const toggleRow = (id) => {
    setExpandedRows({
      ...expandedRows,
      [id]: !expandedRows[id]
    });
  };

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

  const handleUpdateBranchClick = () => {
    setIsUpdateBranchModalOpen(true);
  };

  const handleNewLabRegistrationClick = () => {
    setIsNewLabRegistrationModalOpen(true);
  };

  const handleNewLabUserRegistrationClick = () => {
    setIsNewLabUserRegistrationModalOpen(true);
  };

  const handleBranchRegistrationClick = () => {
    setIsBranchRegistrationModalOpen(true);
  };

  const handleNewLabAdminSelectionClick = () => {
    setIsNewLabAdminSelectionModalOpen(true);
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
      <h1 className="text-xl font-medium text-gray-700 mb-6">Manage Branches</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200"></div>

      {/* Action Bar */}
      <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Left - Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewLabRegistrationClick()}>
              <span className="mr-1">+</span> ADD NEW LAB
            </button> */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleBranchRegistrationClick()}>
              <span className="mr-1">+</span> ADD NEW BRANCH
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewLabUserRegistrationClick()}>
              <span className="mr-1">+</span> ADD NEW LAB USER
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleLabUserAssignClick()}>
              <span className="mr-1">+</span> ASSIGN USER
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleLabUserAssignClick()}>
              <span className="mr-1">+</span> ASSIGN ADMIN
            </button>
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
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Lab Branch</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiMiniBuildingOffice2 className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Branch" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Mobile</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoCall className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="###-###-####" />
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
                <span className="block mb-2 text-sm font-medium text-gray-900">Payment Status</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BsCashCoin className="text-gray-500" />
                  </div>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                    <option defaultValue>Choose a Status</option>
                    <option>Paid</option>
                    <option>Unpaid</option>
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
            <tr className="">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Lab ID</th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Lab Details</th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Users</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((lab, index) => (
              <React.Fragment key={lab.id}>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200 text-sm">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-200 text-sm">{lab.id}</td>
                  <td className="px-4 py-2 border border-gray-200 text-sm">
                    <div className="font-bold">{lab.name}</div>
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    <button
                      onClick={() => toggleRow(lab.id)}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {expandedRows[lab.id] ? 'Hide Details' : 'View Details'}
                    </button>
                  </td>
                </tr>
                {expandedRows[lab.id] && (
                  <tr>
                    <td colSpan="4" className="p-0 border border-gray-200">
                      <div className="p-4 bg-gray-50">
                        <div className="mb-4">
                          <h3 className="text-sm font-bold mb-2 text-gray-700">Branch Details</h3>
                          <div className="bg-white rounded shadow overflow-x-auto">
                            <table className="min-w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">#</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Name</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Phone</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Email</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Address</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Lab User</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Lab Admin</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Patients</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Reports</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Subscription</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Payment Status</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Status</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Registered Date</th>
                                  <th className="px-4 py-2 border border-gray-200 text-left text-xs font-medium text-gray-500">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {lab.branches.map((branch, branchIndex) => (
                                  <tr key={`user-${branch.id}-${branchIndex}`} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.id}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.name}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.phone}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.email}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.address}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.labUserCount}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.labAdminCount}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.patientCount}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.reportCount}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.subscription}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.paymentStatus}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs ">
                                      <div className='flex justify-center items-center gap-x-3'>
                                        <span className={`px-2 py-1 text-xs font-medium ${branch.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                          {branch.status}
                                        </span>
                                        <button className="hover:text-green-500 "
                                        // onClick={() => handleUpdateLabUserClick()}
                                        >
                                          <RiExchangeBoxFill size={20} />
                                        </button>
                                      </div>

                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">{branch.registeredDate}</td>
                                    <td className="px-4 py-2 border border-gray-200 text-xs">
                                      <div className="flex space-x-2">
                                        <button className="hover:text-green-500"
                                          onClick={() => handleUpdateBranchClick()}
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
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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
      {isUpdateBranchModalOpen && (
        <BranchUpdate setIsUpdateBranchModalOpen={setIsUpdateBranchModalOpen} />
      )}

      {isNewLabRegistrationModalOpen && (
        <LabRegistration setIsNewLabRegistrationModalOpen={setIsNewLabRegistrationModalOpen} />
      )}

      {isNewLabUserRegistrationModalOpen && (
        <LabUserRegistration setIsNewLabUserRegistrationModalOpen={setIsNewLabUserRegistrationModalOpen} />
      )}

      {isBranchRegistrationModalOpen && (
        <BranchRegistration setIsBranchRegistrationModalOpen={setIsBranchRegistrationModalOpen} />
      )}

      {isLabUserAssignModalOpen && (
        <LabUserAssign setIsLabUserAssignModalOpen={setIsLabUserAssignModalOpen} />
      )}

      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmation setIsDeleteConfirmationModalOpen={setIsDeleteConfirmationModalOpen} />
      )}
    </div>
  );
};

export default BranchList;