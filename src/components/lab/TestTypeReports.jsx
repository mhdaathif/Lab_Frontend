import React, { useState } from "react";
import { Edit, Filter, MessageSquare, Trash } from "lucide-react";
import TestTypeUpdate from "./TestTypeUpdate.jsx";
import TestTypeRegistration from "./TestTypeRegistration.jsx";
import DeleteConfirmation from "../layout/DeleteConfirmation.jsx";
import { FaCalendar, FaIdBadge } from "react-icons/fa";
import { IoPricetagSharp } from "react-icons/io5";
import { SiNamecheap } from "react-icons/si";
import { TbStatusChange } from "react-icons/tb";
import { BiSort } from "react-icons/bi";
import { RiResetLeftFill } from "react-icons/ri";

const TestTypeReports = () => {
    const testData = [
        {
            id: "1",
            testTypeId: "TST-001",
            name: "Complete Blood Count",
            price: "500.00",
            status: "Inactive"
        },
        {
            id: "2",
            testTypeId: "TST-002",
            name: "Basic Metabolic Panel",
            price: "620.00",
            status: "Active"
        },
        {
            id: "3",
            testTypeId: "TST-003",
            name: "Lipid Profile",
            price: "1750.00",
            status: "Active"
        },
        {
            id: "4",
            testTypeId: "TST-004",
            name: "Thyroid Function Tests",
            price: "1230.00",
            status: "Inactive"
        },
        {
            id: "5",
            testTypeId: "TST-005",
            name: "Vitamin & Mineral Tests",
            price: "1000.00",
            status: "Active"
        },
        {
            id: "6",
            testTypeId: "TST-006",
            name: "Urine Culture",
            price: "1800.00",
            status: "Active"
        },
        {
            id: "7",
            testTypeId: "TST-007",
            name: "Blood Culture",
            price: "950.00",
            status: "Active"
        },
        {
            id: "8",
            testTypeId: "TST-008",
            name: "Cortisol Test",
            price: "1350.00",
            status: "Active"
        },

    ];

    const [testTypes, setTestTypes] = useState(testData);
    const [showFilters, setShowFilters] = useState(false);


    // Summary data
    const summaryData = {
        totalSalesOrder: 43,
        pendingToFulfilled: 15,
        waitingForPayment: 20,
        waitingForDelivery: 20,
        totalOrderValue: 'IDR 29,924,500'
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

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-xl font-medium text-gray-700 mb-6">Test Types Reports</h1>

            <div className="border-b border-gray-200"></div>

            {/* Action Bar */}
            <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    {/* Left - Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {/*<button*/}
                        {/*    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"*/}
                        {/*    onClick={() => handleNewTestTypeClick()}>*/}
                        {/*    <span className="mr-1">+</span> ADD TEST TYPE*/}
                        {/*</button>*/}
                        <button
                            className="border border-green-500 text-green-500 px-4 py-2 rounded-md text-sm flex items-center justify-center">
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
                        <div className="flex flex-wrap gap-5 w-full sm:w-auto mt-5">

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Test Type ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="TST-001" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Name</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <SiNamecheap className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="Test Type Name" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Price</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoPricetagSharp className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="Price" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Status</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <TbStatusChange className="text-gray-500" />
                                    </div>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                                        <option defaultValue>Choose a Status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Sort By</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiSort className="text-gray-500" />
                                    </div>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
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
                </div>
            </div>

            {/* Summary Cards */}
            <div
                className="bg-white py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 border-t border-gray-200">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Total Test Types</div>
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
                                Test Type ID
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
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination or footer can be added here if needed */}
                <div className="px-4 py-3">

                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <button
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                Previous
                            </button>
                            <button
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                Next
                            </button>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to <span
                                        className="font-medium">8</span> of <span className="font-medium">24</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                    <button
                                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                                        1
                                    </button>
                                    <button
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        2
                                    </button>
                                    <button
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        3
                                    </button>
                                    <button
                                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TestTypeReports