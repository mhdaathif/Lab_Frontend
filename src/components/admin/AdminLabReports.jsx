import React, { useState } from "react";
import { FaCalendar, FaIdBadge } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiGenderIntersexFill } from "react-icons/pi";
import { TbStatusChange } from "react-icons/tb";
import { BiSort } from "react-icons/bi";
import { Filter } from "lucide-react";
import { FaCodeBranch } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
// import {BranchRegistration} from "./BranchRegistration.jsx";

const AdminLabReports = () => {
    const initialData = [
        {
            id: "1",
            code: "LAB-001",
            name: "ABC",
            branch: "Mawanella",
            branchId: "BR_001",
            // dob: "2001-02-24",
            mobile: "0777514445",
            email: "abcmawanella@gmail.com",
            address: "114 Main Road, Mawanella",
            registerDate: "2025-02-20",
            status: "Active",
            paymentStatus: "Paid",
            lastRenewal: "2025-03-18",
            lastRenewalPeriod: "1 Month",
            expiry: "2025-04-20",
        },
        {
            id: "2",
            code: "LAB-002",
            name: "ABC",
            branch: "Kegalla",
            branchId: "BR_002",
            // dob: "1995-08-15",
            mobile: "0712345678",
            email: "abckegalle@gmail.com",
            address: "221B Baker Street, Kagella",
            registerDate: "2025-02-18",
            status: "Active",
            paymentStatus: "UnPaid",
            lastRenewal: "2025-01-18",
            lastRenewalPeriod: "3 Month",
            expiry: "2025-03-10",
        },
    ];
    const [branch, setBranch] = useState(initialData);
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
            <h1 className="text-xl font-medium text-gray-700 mb-6">Lab Reports</h1>

            <div className="border-b border-gray-200"></div>

            {/* Action Bar */}
            <div className="bg-white rounded-t-md mt-4 px-4 py-6 border-b border-gray-200">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    {/* Left - Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {/*<button*/}
                        {/*    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center"*/}
                        {/*    onClick={() => handleAddBranchClick()}>*/}
                        {/*    <span className="mr-1">+</span> ADD NEW LAB*/}
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
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by LAB ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="LAB-2025-001" />
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Branch</span>
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
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Mobile</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoCall className="text-gray-500" />
                                    </div>
                                    <input type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                        placeholder="##########" />
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

                </div>
            </div>

            {/* Summary Cards */
            }
            <div
                className="bg-white py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 border-t border-gray-200">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Total Branch</div>
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
                                Lab Details
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Branch Details
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Branch Contact
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Payment Status
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Last Renewal
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Expiry
                            </th>
                            <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Registered Date
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {branch.map((branch) => (
                            <tr key={branch.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {branch.id}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <div>
                                        <p><strong>{branch.code}</strong></p>
                                        <p className="text-xs text-gray-500">{branch.name}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <div>
                                        <p><strong>{branch.branchId}</strong></p>
                                        <p className="text-xs text-gray-500">{branch.branch}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <div>
                                        <p><strong>{branch.mobile}</strong></p>
                                        <p className="text-xs text-gray-500">{branch.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {branch.address}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {branch.paymentStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {branch.lastRenewal}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {branch.expiry}
                                </td>
                                <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    {branch.registerDate}
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

export default AdminLabReports;