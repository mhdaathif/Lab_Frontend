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
import TestReportUpdate from './TestReportUpdate';
import TestTypeRegistration from './TestTypeRegistration';
import DeleteConfirmation from '../layout/DeleteConfirmation';
import TestTypeUpdate from './TestTypeUpdate';
import { RiResetLeftFill } from 'react-icons/ri';
import { FaIdBadge } from 'react-icons/fa';
import { PiTestTubeFill } from 'react-icons/pi';
import { TbStatusChange } from 'react-icons/tb';
import { BiSort } from 'react-icons/bi';

const TestTypeList = () => {
  const testData = [
    {
      id: "1",
      testTypeId: "TST-001",
      name: "FBC",
      price: "500.00",
      status: "Inactive"
    },
    {
      id: "2",
      testTypeId: "TST-002",
      name: "FBC",
      price: "620.00",
      status: "Active"
    },
    {
      id: "3",
      testTypeId: "TST-003",
      name: "FBC",
      price: "750.00",
      status: "Active"
    },
    {
      id: "4",
      testTypeId: "TST-004",
      name: "FBC",
      price: "1230.00",
      status: "Inactive"
    },
    {
      id: "5",
      testTypeId: "TST-005",
      name: "FBC",
      price: "1200.00",
      status: "Active"
    },

  ];

  const [testTypes, setTestTypes] = useState(testData);
  const [showFilters, setShowFilters] = useState(false);
  const [isUpdateTestTypeModalOpen, setIsUpdateTestTypeModalOpen] = useState(false);
  const [isNewTestTypeModalOpen, setIsNewTestTypeModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [selectedTestType, setSelectedTestType] = useState(null);

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
    // setSelectedTestType(testTypes);
    setIsUpdateTestTypeModalOpen(true);
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
      <h1 className="text-xl font-medium text-gray-700 mb-6">Test Types</h1>

      <div className="border-b border-gray-200"></div>

      {/* Action Bar */}
      <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Left - Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
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
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Test Type ID</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="TYP_00001" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Test Type Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PiTestTubeFill className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Test Type Name" />
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
                <span className="block mb-2 text-sm font-medium text-gray-900">Sort By</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BiSort className="text-gray-500" />
                  </div>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                    <option defaultValue>Choose a Sorting</option>
                    <option>Test Type (ASC)</option>
                    <option>Test Type (DESC)</option>
                    <option>Price (ASC)</option>
                    <option>Price (DESC)</option>
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
          <div className="text-xs text-gray-500 mb-1">Total Test Types</div>
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
                <div className="flex items-center">
                  Test Type ID
                </div>
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Price
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
            {testTypes.map((testType) => (
              <tr key={testType.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {testType.id}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {testType.testTypeId}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {testType.name}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {testType.price}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {testType.status}
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
                      onClick={() => handleUpdateClick()}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="hover:text-green-500">
                      <Trash size={16}
                        onClick={() => handleDeleteConfirmationClick(testType)}
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
      {isUpdateTestTypeModalOpen && (
        <TestTypeUpdate setIsUpdateTestTypeModalOpen={setIsUpdateTestTypeModalOpen} />
      )}

      {isNewTestTypeModalOpen && (
        <TestTypeRegistration setIsNewTestTypeModalOpen={setIsNewTestTypeModalOpen}
        />
      )}

      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmation setIsDeleteConfirmationModalOpen={setIsDeleteConfirmationModalOpen} />
      )}
    </div>
  );
};

export default TestTypeList;