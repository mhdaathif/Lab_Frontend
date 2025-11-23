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
import DeleteConfirmation from '../layout/DeleteConfirmation';
import { FaBuilding, FaCalendar, FaIdBadge, FaMale, FaPhone, FaRecycle, FaUser, FaUserInjured } from 'react-icons/fa';
import { RiResetLeftFill } from 'react-icons/ri';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import { TbStatusChange } from 'react-icons/tb';
import { BsCashCoin } from 'react-icons/bs';
import { BiSolidInjection, BiSort } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { PiTestTubeFill } from 'react-icons/pi';
import { IoMdPrint } from 'react-icons/io';

const Billing = () => {
  const billData = [
    { id: 1, billNumber: 'BL2025001', patientName: 'John Smith', date: '2025.01.15', patientMobile: '0761671839', tests: ['Blood Panel', 'Urinalysis'], totalDue: 245.00, status: 'Unpaid' },
    { id: 2, billNumber: 'BL2025002', patientName: 'Sarah Johnson', date: '2025.02.20', patientMobile: '0761671839', tests: ['Lipid Profile', 'Glucose Test'], totalDue: 189.50, status: 'Paid' },
    { id: 3, billNumber: 'BL2025003', patientName: 'Michael Chen', date: '2025.03.10', patientMobile: '0761671839', tests: ['Complete Blood Count', 'Liver Function'], totalDue: 312.75, status: 'Paid' },
    { id: 4, billNumber: 'BL2025004', patientName: 'Michael Chen', date: '2025.03.11', patientMobile: '0761671839', tests: ['Complete Blood Count', 'Liver Function'], totalDue: 312.75, status: 'Paid' }
  ];

  const [bills, setBills] = useState(billData);
  const [showFilters, setShowFilters] = useState(false);
  const [showNewBill, setShowNewBill] = useState(false);
  const [showNewBill1, setShowNewBill1] = useState(false);
  const [activeTab, setActiveTab] = useState('sales');
  const [patientName, setPatientName] = useState('');
  const [patientMobile, setPatientMobile] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
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

  const handleToggleShowNewBill = () => {
    setShowNewBill((prev) => !prev);
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
  // const handleUpdateClick = () => {
  //   setIsUpdateLabModalOpen(true);
  // };

  // const handleNewLabRegistrationClick = () => {
  //   setIsNewLabRegistrationModalOpen(true);
  // };

  // const handleNewLabUserRegistrationClick = () => {
  //   setIsNewLabUserRegistrationModalOpen(true);
  // };

  // const handleLabUserAssignClick = () => {
  //   setIsLabUserAssignModalOpen(true);
  // };

  const handleDeleteConfirmationClick = () => {
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleCreateBill = () => {
    // Create bill functionality
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
      <h1 className="text-xl font-medium text-gray-700 mb-6">Billing</h1>

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
            All
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            UnPaid
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`${activeTab === 'purchase'
              ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none`}
          >
            Paid
          </button>
        </nav>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          {/* Left - Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
              onClick={() => handleToggleShowNewBill()}
            >
              <span className="mr-1">+</span> ADD NEW BILL
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"
            // onClick={() => handleToggleShowNewBill()}
            >
              <span className="mr-1">+</span> ADD NEW PATIENT
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

        {showNewBill1 && (
          <div className="justify-between items-start xl:items-center gap-4 my-6">
            <h1>Create New Bill</h1>
            <div className="flex">

              <div className="flex flex-wrap gap-4 w-full mt-5">
                <div className="w-full sm:w-64">
                  <span className="block mb-2 text-sm font-medium text-gray-900">Find Existing Patient</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaIdBadge className="text-gray-500" />
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Type name or phone number..." />
                  </div>
                </div>

                <div className="w-full sm:w-64">
                  <span className="block mb-2 text-sm font-medium text-gray-900">Patient Name</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaBuilding className="text-gray-500" />
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab" />
                  </div>
                </div>

                <div className="w-full sm:w-64">
                  <span className="block mb-2 text-sm font-medium text-gray-900">Patient Mobile</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaBuilding className="text-gray-500" />
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab" />
                  </div>
                </div>

                <div className="w-full sm:w-64">
                  <span className="block mb-2 text-sm font-medium text-gray-900">Select Test</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <BiSort className="text-gray-500" />
                    </div>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                      <option defaultValue>Choose a Test</option>
                      <option>FBC</option>
                      <option>CRS</option>
                      <option>HB</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="w-full sm:w-54 flex-col gap-x-2 justify-center mt-auto">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-4">Bill Summary</h3>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700">Bill Number:</span>
                      <span className="font-medium text-blue-600">
                        {/* {generateBillNumber()} */}
                      </span>
                    </div>
                    {/* {selectedTestOptions.length > 0 ? ( */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        {/* {selectedTestOptions.map(testName => {
                          const test = testOptions.find(t => t.name === testName);
                          return (
                            <div key={testName} className="flex justify-between">
                              <span>{testName}</span>
                              <span>${test ? test.price.toFixed(2) : '0.00'}</span>
                            </div>
                          );
                        })} */}
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between font-medium">
                          <span>Total Amount:</span>
                          {/* <span className="text-blue-600">${newPatient.totalDue.toFixed(2)}</span> */}
                        </div>
                      </div>
                    </div>
                    {/* ) : (
                    <p className="text-gray-500 text-center py-6">Select tests to generate bill</p>
                  )} */}
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        // setShowAddForm(false);
                        // setNewPatient({
                        //   name: '',
                        //   mobile: '',
                        //   date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
                        //   tests: [],
                        //   totalDue: 0,
                        //   status: 'Unpaid'
                        // });
                        // setSelectedTestOptions([]);
                        // setTestSearchTerm('');
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      // onClick={handleAddPatient}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    // disabled={!newPatient.name || !newPatient.mobile || selectedTestOptions.length === 0}
                    >
                      Create Bill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showNewBill && (
          <div className="bg-white px-6 py-4 mt-4 rounded-lg shadow-sm">
            <h1 className="text-xl font-semibold mb-6">Create New Bill</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Find Existing Patient
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUserInjured className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                      placeholder="Type name or phone number..."
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                    <button className="absolute right-2 top-3 text-gray-400 hover:text-gray-600">
                      <MdCancel className="text-gray-500" />
                    </button>
                  </div>
                  <div className="relative">
                    <div className="mb-4 mt-2 p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-blue-800">patient.name</p>
                          <p className="text-sm text-blue-600">patient.mobile</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          Selected Patient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex gap-3">
                  {/* Patient Name */}
                  <div className="w-1/2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Patient Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                        placeholder="Patient name"
                        disabled
                      // value={patientName}
                      // onChange={(e) => setPatientName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Patient Mobile */}
                  <div className="w-1/2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Patient Mobile
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaPhone className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                        placeholder="Mobile number"
                        disabled
                      // value={patientMobile}
                      // onChange={(e) => setPatientMobile(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Select Test */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Test
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      {/* <PiTestTubeFill className="text-gray-500" /> */}
                      <BiSolidInjection className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                      placeholder="Test name..."
                    // value={patientName}
                    // onChange={(e) => setPatientName(e.target.value)}
                    />
                    <button className="absolute right-2 top-3 text-gray-400 hover:text-gray-600">
                      <MdCancel className="text-gray-500" />
                    </button>
                  </div>
                  {/* <div className="relative">
                    <div className="mb-4 mt-2 p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-blue-800">Complete Blood Count</p>
                          <p className="text-sm text-blue-600">Rs. 1200.00</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          Selected Patient
                        </span>
                      </div>
                    </div>
                  </div> */}
                  <div className="space-y-2 mt-2 max-h-60 overflow-y-auto pr-2 border border-gray-200 rounded-lg p-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="test-1" className="rounded text-blue-600 focus:ring-blue-400" />
                      <label htmlFor="test-1" className="ml-2 text-gray-700 flex-1">
                        Test Name 1
                      </label>
                      <span className="text-gray-600">$50.00</span>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" id="test-2" className="rounded text-blue-600 focus:ring-blue-400" />
                      <label htmlFor="test-2" className="ml-2 text-gray-700 flex-1">
                        Test Name 2
                      </label>
                      <span className="text-gray-600">$40.00</span>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" id="test-3" className="rounded text-blue-600 focus:ring-blue-400" />
                      <label htmlFor="test-3" className="ml-2 text-gray-700 flex-1">
                        Test Name 3
                      </label>
                      <span className="text-gray-600">$30.00</span>
                    </div>

                    <div className="text-center py-3 text-gray-500">No matching tests found</div>
                  </div>
                </div>

              </div>

              <div className="col-span-1 lg:col-span-2">
                {/* Bill Summary */}
                <div className="bg-gray-50 rounded-lg p-6 h-full">
                  <h3 className="text-lg font-medium mb-6">Bill Summary</h3>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Bill Number:</span>
                    <span className="font-medium text-blue-600">B-202503-0001</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Complete Blood Count</span>
                    <span className="font-medium text-blue-600">Rs. 1250.00</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Lipid Profile</span>
                    <span className="font-medium text-blue-600">Rs. 1000.00</span>
                  </div>
                  {/* </div> */}

                  <div className="space-y-3">
                    {/* Test items would go here */}
                    <div className="pt-3 border-t border-gray-200 mt-6">
                      <div className="flex justify-between font-medium">
                        <span>Total Amount:</span>
                        <span className="text-blue-600">$0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowNewBill(false)}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreateBill}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      disabled={!patientName || !patientMobile || !selectedTest}
                    >
                      Create Bill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {showFilters && (
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-5">
              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Bill No</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="BILL_00001" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Patient Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaBuilding className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab" />
                </div>
              </div>

              <div className="w-full sm:w-64">
                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Patient Mobile</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaBuilding className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab" />
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
                    <option>Created Date (ASC)</option>
                    <option>Created Date (DESC)</option>
                    <option>Amount (ASC)</option>
                    <option>Amount (DESC)</option>
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
          <div className="text-xs text-gray-500 mb-1">Total Revenue</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
          <p className="text-xs text-blue-500">From {summaryData.totalSalesOrder || 0} bills</p>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Total Bills</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
          {/* <p className="text-xs text-blue-500">From {summaryData.totalSalesOrder || 0} bills</p> */}
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Paid Bills</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
          <p className="text-xs text-blue-500">Rs.{summaryData.totalSalesOrder || 0}.00 collected</p>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">Unpaid Bills</div>
          <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>
          <p className="text-xs text-blue-500">Rs.{summaryData.totalSalesOrder || 0}.00 pending</p>
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
                Bill No
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Tests
              </th>
              <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
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
            {bills.map((bill) => (
              <tr key={bill.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {bill.id}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {bill.billNumber}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {bill.patientName}
                  <p><strong>{bill.patientMobile}</strong></p>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  {bill.date}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-gray-500">
                  {bill.tests.map((test) => (
                    <span>
                      <span className="font-bold text-gray-500">  {test}</span>,
                    </span>
                  ))}
                  <p>noof : tests</p>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-gray-500">
                  {/* Rs. {bill.totalDue}.00 */}
                  Rs. {bill.totalDue}
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {bill.status}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <div className="flex space-x-2">
                      <button
                        // onClick={() => handlePayment(patient.id, 'full')}
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Pay Full
                      </button>
                      <span className="px-3 inline-flex text-xs leading-5 items-center font-semibold rounded-full bg-green-100 text-green-800">
                        {/* {bill.status} */}
                        Completed
                      </span>
                      <button
                        // onClick={() => handlePinBill(patient.id)}
                        className="inline-flex items-center px-2.5 py-1.5 border border-violet-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-violet-100"
                      >
                        <IoMdPrint className="text-gray-500 w-5 h-5 mr-2" />
                        Pin & Print
                      </button>
                    </div>
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

      {/* ---------- print modal ---------- */}
      {/* <div className="p-4" ref={printRef}>
        <p className="font-medium">Bill No : {pinnedBill.billNumber}</p>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{labData[0].name}</h2>
          <p className="text-gray-500">{labData[0].branch} Branch</p>
          <p className="text-gray-500">Contact: {labData[0].contact}</p>
          <p className="text-gray-500">Email: {labData[0].email}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600 text-sm">Patient Information:</p>
            <p className="font-medium">{pinnedBill.name}</p>
            <p>Phone: {pinnedBill.mobile}</p>
            <p>Patient ID: {pinnedBill.id}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">Bill Information:</p>
            <p className="font-medium">Date: {pinnedBill.date}</p>
            <p>Status: <span className={`${pinnedBill.status === 'Paid' ? 'text-green-600' :
              pinnedBill.status === 'Partial' ? 'text-yellow-600' :
                'text-red-600'
              }`}>{pinnedBill.status}</span>
            </p>
            <p className="font-medium">{pinnedBill.billNumber}</p>

          </div>
        </div>

        <div className="mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border">Test</th>
                <th className="px-4 py-2 text-right border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {pinnedBill.tests.map((testName, idx) => {
                const test = testOptions.find(t => t.name === testName);
                return (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{testName}</td>
                    <td className="px-4 py-2 text-right border">${test ? test.price.toFixed(2) : '0.00'}</td>
                  </tr>
                );
              })}
              <tr className="total">
                <td className="px-4 py-3 border text-right">Total Amount:</td>
                <td className="px-4 py-3 border text-right">${pinnedBill.totalDue.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">Thank you for choosing {labData[0].name} for your laboratory needs.</p>
          <p className="text-center text-gray-400 text-xs mt-2">Please retain this receipt for your records.</p>
        </div>
      </div> */}
      {/* ---------- print modal ---------- */}

      {/* update report details popup */}
      {/* {isUpdateLabModalOpen && (
        <LabUpdate setIsUpdateLabModalOpen={setIsUpdateLabModalOpen} />
      )}

      {isNewLabRegistrationModalOpen && (
        <LabRegistration setIsNewLabRegistrationModalOpen={setIsNewLabRegistrationModalOpen} />
      )}

      {isNewLabUserRegistrationModalOpen && (
        <LabUserRegistration setIsNewLabUserRegistrationModalOpen={setIsNewLabUserRegistrationModalOpen} />
      )}

      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmation setIsDeleteConfirmationModalOpen={setIsDeleteConfirmationModalOpen} />
      )}

      {isLabUserAssignModalOpen && (
        <LabUserAssign setIsLabUserAssignModalOpen={setIsLabUserAssignModalOpen} />
      )} */}

    </div >
  );
};

export default Billing;