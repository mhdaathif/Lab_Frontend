import React, {useState} from "react";
import {Filter} from "lucide-react";
import {RiResetLeftFill} from "react-icons/ri";
import {FaCalendar, FaIdBadge} from "react-icons/fa";
import {IoCall} from "react-icons/io5";
import {PiGenderIntersexFill} from "react-icons/pi";
import {TbStatusChange} from "react-icons/tb";
import {BiSort} from "react-icons/bi";

export const PatientRecords = () => {
    const initialData = [
        {
            id: "1",
            code: "PAT-2025-001",
            name: "John Doe",
            gender: "Male",
            // dob: "2001-02-24",
            mobile: "0777514445",
            address: "114 yyaghhh",
            registerDate: "2025-02-20",
            status: "Active",
            labId: "LAB-001",
            labName: "ABC",
            branchId: "BRC-001",
            branchName: "Mawanella"
        },
        {
            id: "2",
            code: "PAT-2025-002",
            name: "Jane Smith",
            gender: "Female",
            // dob: "1995-08-15",
            mobile: "0712345678",
            address: "221B Baker Street",
            registerDate: "2025-02-18",
            status: "Active",
            labId: "LAB-001",
            labName: "ABC",
            branchId: "BRC-002",
            branchName: "Kegalla"
        },
    ];
    const [patients, setPatients] = useState(initialData);
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
            <h1 className="text-xl font-medium text-gray-700 mb-6">Patient Reports</h1>

            <div className="border-b border-gray-200"></div>

            {/* Action Bar */}
            <div className="bg-white rounded-t-md mt-4 px-4 py-6 border-b border-gray-200">
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
                                <span
                                    className="block mb-2 text-sm font-medium text-gray-900">Search by Lab ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500"/>
                                    </div>
                                    <input type="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                           placeholder="LAB-001"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span
                                    className="block mb-2 text-sm font-medium text-gray-900">Search by Lab Name</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500"/>
                                    </div>
                                    <input type="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                           placeholder="Search by Lab Name"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span
                                    className="block mb-2 text-sm font-medium text-gray-900">Search by Branch ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500"/>
                                    </div>
                                    <input type="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                           placeholder="BRC-001"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span
                                    className="block mb-2 text-sm font-medium text-gray-900">Search by Patient ID</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaIdBadge className="text-gray-500"/>
                                    </div>
                                    <input type="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                           placeholder="PAT-2025-001"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Search by Mobile</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoCall className="text-gray-500"/>
                                    </div>
                                    <input type="text"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                           placeholder="##########"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Gender</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <PiGenderIntersexFill className="text-gray-500"/>
                                    </div>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5">
                                        <option defaultValue>Choose a Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Status</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <TbStatusChange className="text-gray-500"/>
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
                                <span className="block mb-2 text-sm font-medium text-gray-900">From</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendar className="text-gray-500"/>
                                    </div>
                                    <input type="date"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">To</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaCalendar className="text-gray-500"/>
                                    </div>
                                    <input type="date"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"/>
                                </div>
                            </div>

                            <div className="w-full sm:w-54">
                                <span className="block mb-2 text-sm font-medium text-gray-900">Sort By</span>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiSort className="text-gray-500"/>
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
                    <div className="text-xs text-gray-500 mb-1">Total Patients</div>
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
                            Lab
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Branch
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Patient ID
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Gender
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Mobile
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-4 py-2 border-l-1 border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Created Time
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {patients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.id}
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                <p><strong>{patient.labId}</strong></p>
                                <span>{patient.labName}</span>
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                <p><strong>{patient.branchId}</strong></p>
                                <span>{patient.branchName}</span>
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.code}
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.name}
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.gender}
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                <div className="text-sm text-gray-500">{patient.mobile}</div>
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.address}
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                        className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {patient.status}
                                    </span>
                            </td>
                            <td className="px-4 py-3 border border-gray-200 whitespace-nowrap text-sm text-gray-500">
                                {patient.registerDate}
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