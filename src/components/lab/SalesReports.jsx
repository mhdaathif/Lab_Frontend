import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaCalendar, FaIdBadge } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { PiGenderIntersexFill } from "react-icons/pi";
import { BiSort } from "react-icons/bi";
import { Filter } from "lucide-react";
import { RiResetLeftFill } from "react-icons/ri";

const SalesReports = () => {
    const initialData = [
        {
            id: "1",
            branch: "Mawanella",
            branchId: "BR_001",
            mobile: "0777514445",
            reportCount: "23",
            testTypes: [
                {
                    name: "FBC",
                    count: "5"
                },
                {
                    name: "CSG",
                    count: "5"
                },
                {
                    name: "LMF",
                    count: "4"
                },
                {
                    name: "HB",
                    count: "8"
                },
            ],
            amount: "12500.00"
        },
        {
            id: "2",
            branch: "Kegalla",
            branchId: "BR_002",
            mobile: "0712345678",
            reportCount: "14",
            testTypes: [
                {
                    name: "FBC",
                    count: "5"
                },
                {
                    name: "CSG",
                    count: "7"
                },
                {
                    name: "LMF",
                    count: "2"
                }
            ],
            amount: "20000.00"
        },
    ];

    const [salesReports, setSalesReports] = useState(initialData);
    const [showFilters, setShowFilters] = useState(false);

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
            <h1 className="text-xl font-medium text-gray-700 mb-6">Sales Reports</h1>

            <div className="border-b border-gray-200"></div>

            {/* Action Bar */}
            <div className="bg-white rounded-t-md mt-4 py-6 px-4 border-b border-gray-200">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    {/* Left - Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {/*<button*/}
                        {/*    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"*/}
                        {/*    onClick={() => handleAddPatientClick()}>*/}
                        {/*    <span className="mr-1">+</span> ADD NEW PATIENT*/}
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
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Branch ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="LAB-001" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Branch Name</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCodeBranch className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="Branch Name" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">From</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendar className="text-gray-500" />
                                    </div>
                                    <input type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">To</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendar className="text-gray-500" />
                                    </div>
                                    <input type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" />
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
            {/*<div className="bg-white py-3 px-4 flex flex-col sm:flex-row justify-between text-xs text-gray-500">*/}
            {/*    <span>44 result found</span>*/}
            {/*    <div className="flex justify-between mt-2 sm:mt-0">*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/* Summary Cards */
            }
            {/*<div*/}
            {/*    className="bg-white py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 border-t border-gray-200">*/}
            {/*    <div className="text-center">*/}
            {/*        <div className="text-xs text-gray-500 mb-1">Total Patients</div>*/}
            {/*        <div className="text-xl font-semibold">{summaryData.totalSalesOrder}</div>*/}
            {/*    </div>*/}

            {/*</div>*/}

            <div className="bg-white p-4 border-b border-gray-200">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    <div className="w-full sm:w-54">
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSort className="text-gray-500" />
                            </div>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                                <option defaultValue>All Day</option>
                                <option>Last day</option>
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last month</option>
                                <option>This year</option>
                                <option>Last year</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */
            }
            <div className="bg-white -mt-2 p-4 overflow-x-auto">
                <table className="min-w-full rounded-xl p-4 bg-green-300/20">
                    <thead className=" border-b-emerald-400 border-b-3">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                No
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Branch ID
                                </div>
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Branch Details
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Report Count
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Tests
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {salesReports.map((salesReport) => (
                            <tr key={salesReport.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {salesReport.id}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {salesReport.branchId}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <p>{salesReport.branch}</p>
                                    <p>{salesReport.mobile}</p>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {salesReport.reportCount}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {/* {salesReport.reportCount} */}
                                    {salesReport.testTypes.map((testType) => (
                                        <span>
                                            <span>  {testType.name} : </span>
                                            <span className="font-bold">  {testType.count}</span>, 
                                        </span>
                                    ))}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {salesReport.amount}
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

export default SalesReports;