import React, { useState } from 'react';
import {MenuIcon,
    XIcon,
} from 'lucide-react';
import { FaHome, FaUsers, FaUserTie, FaBriefcase, FaUser, FaSignOutAlt, FaBars, FaTimes, FaBell, FaChevronDown, FaChevronUp, FaChevronLeft, FaStar, FaMapMarkerAlt, FaBuilding, FaUserInjured, FaChartLine } from 'react-icons/fa';
import logo from "../../assets/img/xt_logo.png"
import { Link } from 'react-router-dom';
import { MdPayment, MdSpaceDashboard } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { PiChartLineUpFill, PiTestTubeFill } from 'react-icons/pi';
import { BsFillBuildingFill, BsFillBuildingsFill } from 'react-icons/bs';
import { GrScorecard } from 'react-icons/gr';
import { FaBuildingUser } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { TbActivity, TbActivityHeartbeat, TbListDetails } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
import { GiTestTubes } from 'react-icons/gi';

const LeftSideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [adminDropdownOpen, setAdminDropdownOpen] = useState(true);
    const [labDropdownOpen, setLabDropdownOpen] = useState(true);
    const [patientDropdownOpen, setPatientDropdownOpen] = useState(true);

    const toggleAdminDropdown = () => {
        setAdminDropdownOpen(!adminDropdownOpen);
    };

    const toggleLabDropdown = () => {
        setLabDropdownOpen(!labDropdownOpen);
    };

    const togglePatientDropdown = () => {
        setPatientDropdownOpen(!patientDropdownOpen);
    };

    return (
        <>
            <div
                className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-50 text-gray-800 transition-all duration-300 border-r-1 border-gray-200 ${isSidebarOpen ? 'w-64' : 'w-16'
                    } md:relative`}
            >
                <div className="flex items-center justify-start h-16 px-4 bg-white ">
                    <img src={logo} className='w-9 h-9' loading='lazy' />
                    {isSidebarOpen && <span className="ml-8 text-xl text-start font-bold">XronLIS</span>}
                    <button
                        className="p-1 rounded-md hover:bg-green-600 md:hidden"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
                    </button>
                </div>

                {/* <div className="overflow-y-auto h-[calc(100%-80px)] "> */}
                <div className="overflow-auto h-[calc(100%-80px)] [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden ">
                    <nav className="mt-6 px-3">
                        <div className="space-y-2">
                            {/* <Link to="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                <MdSpaceDashboard className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                {isSidebarOpen ? <span>Dashboard</span> : null}
                            </Link> */}

                            <div>
                                <button onClick={toggleAdminDropdown} className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md bg-green-100 text-green-700 hover:bg-green-200">
                                    <div className="flex items-center">
                                        <FaUsers className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                        {isSidebarOpen ? <span>Admin</span> : null}
                                    </div>
                                    {labDropdownOpen ? <FaChevronDown className="ml-auto" /> : <FaChevronUp className="ml-auto" />}
                                </button>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Main</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>

                                {adminDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/admin/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <MdSpaceDashboard className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Dashboard</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Reports</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>
                                {adminDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        {/*<Link to="/admin/manage-billing" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">*/}
                                        {/*    <FaBuilding className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />*/}
                                        {/*    {isSidebarOpen ? <span>Billing & Invoices</span> : null}*/}
                                        {/*</Link>*/}
                                        <Link to="/admin/manage-patients" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <HiBuildingOffice2 className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Patient Records</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Manage</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>
                                {adminDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/admin/manage-lab" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaBuilding className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Manage Lab</span> : null}
                                        </Link>
                                        <Link to="/admin/manage-branch" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <HiBuildingOffice2 className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Manage Branch</span> : null}
                                        </Link>
                                        <Link to="/admin/manage-lab-user" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaUsers className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Manage Lab User</span> : null}
                                        </Link>
                                        <Link to="/admin/manage-payment" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <MdPayment className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Manage Payment</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button onClick={toggleLabDropdown} className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md bg-green-100 text-green-700 hover:bg-green-200">
                                    <div className="flex items-center">
                                        <FaUsers className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                        {isSidebarOpen ? <span>Lab</span> : null}
                                    </div>
                                    {labDropdownOpen ? <FaChevronDown className="ml-auto" /> : <FaChevronUp className="ml-auto" />}
                                </button>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Main</span> : <div className='border border-gray-400 w-full
                                    '></div>}
                                </div>

                                {labDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/lab/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <MdSpaceDashboard className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Dashboard</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Process</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>

                                {labDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/lab/billing" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <GrScorecard className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Billing</span> : null}
                                        </Link>
                                        <Link to="/lab/payments" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <MdPayment className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Payments</span> : null}
                                        </Link>
                                        <Link to="/lab/tests" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <GiTestTubes className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Test Reports</span> : null}
                                        </Link>
                                        <Link to="/lab/test-types" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <PiTestTubeFill className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Test Type Details</span> : null}
                                        </Link>
                                        <Link to="/lab/patients" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaUserInjured className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Patient Details</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Manage</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>
                                {labDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/lab/sales" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaBuildingUser className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Branches & Users</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Reports</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>

                                {labDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/lab/sales/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaChartLine className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Sales Reports</span> : null}
                                        </Link>
                                        <Link to="/lab/branch/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <TbListDetails className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Lab Reports</span> : null}
                                        </Link>
                                        <Link to="/lab/test/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <GiTestTubes className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Test Reports</span> : null}
                                        </Link>
                                        <Link to="/lab/test-type/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <PiTestTubeFill className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Test Type Reports</span> : null}
                                        </Link>
                                        <Link to="/lab/patient/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <FaUsers className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Patient Reports</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                    {/* <FaHome className={`${isSidebarOpen ? 'mr-3 ' : ''}`} /> */}
                                    {isSidebarOpen ? <span>Settings</span> : <div className="border border-gray-400 w-full"></div>}
                                </div>
                                {labDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/lab/notifications" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <IoMdNotifications className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Notifications</span> : null}
                                        </Link>
                                        <Link to="/lab/activity-logs" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <TbActivity className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Activity Logs</span> : null}
                                        </Link>
                                        <Link to="/lab/settings" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <IoSettingsSharp className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Settings</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button onClick={togglePatientDropdown} className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md bg-green-100 text-green-700 hover:bg-green-200">
                                    <div className="flex items-center">
                                        <FaUsers className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                        {isSidebarOpen ? <span>Patient</span> : null}
                                    </div>
                                    {patientDropdownOpen ? <FaChevronDown className="ml-auto" /> : <FaChevronUp className="ml-auto" />}
                                </button>

                                {patientDropdownOpen && (
                                    <div className={`${isSidebarOpen ? 'mr-3 pl-2 mt-1 space-y-1 ' : 'mt-1 space-y-1'}`}>
                                        <Link to="/patient/reports" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
                                            <GiTestTubes className={`${isSidebarOpen ? 'mr-3 ' : ''}`} />
                                            {isSidebarOpen ? <span>Reports</span> : null}
                                        </Link>
                                    </div>
                                )}
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="bottom-0 w-full border-t border-gray-200 p-4">
                    <a href="#" className="flex items-center text-sm font-medium text-red-500 hover:text-red-700">
                        <FaSignOutAlt className={`${isSidebarOpen ? 'mr-3 ml-3 ' : 'ml-3'}`} />
                        {isSidebarOpen ? <span>Log Out</span> : null}
                    </a>
                </div>
            </div>
        </>
    );
};

export default LeftSideBar;


