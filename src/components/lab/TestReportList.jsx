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
import PatientRegistration from './PatientRegistration';
import TestReportUpdate from './TestReportUpdate';
import TestReportRegistration from './TestReportRegistration';
import TestTypeRegistration from './TestTypeRegistration';
import DeleteConfirmation from '../layout/DeleteConfirmation';
import { RiResetLeftFill } from 'react-icons/ri';
import { FaCalendar, FaIdBadge, FaMobile, FaUser } from 'react-icons/fa';
import { TbStatusChange } from 'react-icons/tb';
import { BiSort } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi2';
import { PiTestTubeFill } from 'react-icons/pi';

const TestReportList = () => {
  const reportData = [
    {
      id: "1",
      patientId: "PST-001",
      reportId: "RPT-1001",
      name: "John Doe",
      age: 35,
      gender: "Male",
      mobile: "123-456-7890",
      address: "New York, USA",
      phone: "555-7890",
      date: "2025-02-10",
      testType: "Lipid Profile",
      price: "100.00",
      status: "Sent",
      lab: { name: "MediLab", branch: "Downtown", contact: "555-1234", email: "medilab@example.com" },
      sendHistory: [],
    },
    {
      id: "2",
      patientId: "PST-002",
      reportId: "RPT-1002",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Sent",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
    {
      id: "3",
      patientId: "PST-003",
      reportId: "RPT-1003",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Sent",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
    {
      id: "4",
      patientId: "PST-004",
      reportId: "RPT-1004",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Sent",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
    {
      id: "5",
      patientId: "PST-005",
      reportId: "RPT-1005",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Pending",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
    {
      id: "6",
      patientId: "PST-006",
      reportId: "RPT-1006",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Sent",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
    {
      id: "7",
      patientId: "PST-007",
      reportId: "RPT-1007",
      name: "Jane Smith",
      age: 35,
      gender: "Female",
      mobile: "987-654-3210",
      address: "Los Angeles, USA",
      phone: "555-4321",
      date: "2025-02-11",
      testType: "Blood Sugar Test",
      price: "100.00",
      status: "Pending",
      lab: { name: "CityHealth Lab", branch: "Westside", contact: "555-5678", email: "cityhealth@example.com" },
      sendHistory: [],
    },
  ];

  const [reports, setReports] = useState(reportData);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('sales');
  const [isUpdateReportModalOpen, setIsUpdateReportModalOpen] = useState(false);
  const [isNewReportModalOpen, setIsNewReportModalOpen] = useState(false);
  const [isNewTestTypeModalOpen, setIsNewTestTypeModalOpen] = useState(false);
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

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
  const handleUpdateClick = (patient) => {
    setSelectedReport(patient);
    setIsUpdateReportModalOpen(true);
  };

  const handleAddPatientClick = () => {
    setIsAddPatientModalOpen(true);
  };

  const handleNewReportClick = () => {
    setIsNewReportModalOpen(true);
  };

  const handleNewTestTypeClick = () => {
    setIsNewTestTypeModalOpen(true);
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
      <h1 className="text-xl font-medium text-gray-700 mb-6">Test Reports</h1>

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
            Submited Test Reports
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Not Submited
          </button>
        </nav>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Left - Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleAddPatientClick()}>
              <span className="mr-1">+</span> ADD NEW PATIENT
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewReportClick()}>
              <span className="mr-1">+</span> ADD NEW REPORT
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleNewTestTypeClick()}>
              <span className="mr-1">+</span> ADD TEST TYPE
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
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Report ID</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="RPT_00001" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Test Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PiTestTubeFill className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Test Name" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Patient Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Patient Name" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Patient Mobile</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiPhone className="text-gray-500" />
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
                    <option>Sent</option>
                    <option>Not Sent</option>
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
          <div className="text-xs text-gray-500 mb-1">Total Reports</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
        </div>
        {/* <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Pending to Fulfilled</div>
          <div className="text-xl font-semibold">{summaryData.pendingToFulfilled}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Waiting for Payment</div>
          <div className="text-xl font-semibold">{summaryData.waitingForPayment}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Waiting for Delivery</div>
          <div className="text-xl font-semibold">{summaryData.waitingForDelivery}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Sales Order Value</div>
          <div className="text-xl font-semibold">{summaryData.totalOrderValue}</div>
        </div> */}
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
                  Patient ID
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Report ID
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Test Report
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab Details
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {report.id}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {report.patientId}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div>
                    <p><strong>{report.reportId}</strong></p>

                    <button
                      // onClick={() => navigate(`/PatientReportTable/PatientReport/${row.original.reportId}`)}
                      className="flex items-center px-1 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View RPT
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">

                  <p>{report.name}</p>
                  <p>Age: {report.age} Gender: {report.gender}</p>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div className="text-sm text-gray-900">{report.mobile}</div>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div>
                    <p><strong>{report.testType}</strong></p>
                    <p className="text-gray-500">${report.price} | {report.date}</p>
                  </div>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div>
                    <p><strong>{report.lab.name}</strong> - {report.lab.branch}</p>
                    <p className="text-xs text-gray-500">📞 {report.lab.contact} 📧 {report.lab.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {/* <div className="flex items-center gap-2"> 
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      onClick={() => navigate(`/PatientReportTable/PatientReportUpdate/${row.original.reportId}`)}
                    >
                      Update 🛠
                    </button>

                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => setSelectedPatient(row.original)}
                    >
                      Send 📩
                    </button>
                  </div> */}
                  <div className="flex space-x-2">
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
      {isUpdateReportModalOpen && selectedReport && (
        <TestReportUpdate setIsUpdateReportModalOpen={setIsUpdateReportModalOpen} />
      )}

      {isAddPatientModalOpen && (
        <PatientRegistration setIsAddPatientModalOpen={setIsAddPatientModalOpen} />
      )}

      {isNewReportModalOpen && (
        <TestReportRegistration setIsNewReportModalOpen={setIsNewReportModalOpen} setIsNewTestTypeModalOpen={setIsNewTestTypeModalOpen}
        // setIsAddPatientModalOpen={setIsAddPatientModalOpen} 
        />
      )}

      {isNewTestTypeModalOpen && (
        <TestTypeRegistration setIsNewTestTypeModalOpen={setIsNewTestTypeModalOpen} />
      )}

      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmation setIsDeleteConfirmationModalOpen={setIsDeleteConfirmationModalOpen} />
      )}
    </div>
  );
};

export default TestReportList;