import React, { useState } from 'react';
import {
    MenuIcon,
    XIcon,
} from 'lucide-react';
import { FaHome, FaUsers, FaUserTie, FaBriefcase, FaUser, FaSignOutAlt, FaBars, FaTimes, FaBell, FaChevronDown, FaChevronUp, FaChevronLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const TopNavbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const [mentorsDropdownOpen, setMentorsDropdownOpen] = useState(true);

    const toggleMentorsDropdown = () => {
        setMentorsDropdownOpen(!mentorsDropdownOpen);
    };

    return (
        <>
            <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
                <div className="flex items-center">
                    <button
                        className="p-1 mr-4 rounded-md text-gray-500 hover:bg-gray-100 hidden md:block"
                        // onClick={toggleSidebar}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <MenuIcon size={24} />
                    </button>
                    <h1 className="text-xl font-semibold">Xron LAB</h1>
                </div>


                <div className="ml-auto flex items-center space-x-4">
                    <div className="text-sm">
                        {/* <span className="font-medium">Annual</span> */}
                        <span className="bg-purple-200 text-purple-800 text-xs me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 font-bold">Annual</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <FaBell size={20} />
                    </button>

                    <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
                    </button>

                    <div className="flex items-center space-x-3">
                        {/* <QuestionMarkCircleIcon size={20} className="text-gray-500" /> */}
                        <div className="relative">
                            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                            <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-200">
                                <div className="flex items-center justify-center h-full text-sm font-medium">AH</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="https://placeholder.pics/svg/36x36/DEDEDE-DEDEDE/777777/F"
                            alt="User Avatar"
                            className="h-8 w-8 rounded-full"
                        />
                        <div className="ml-2 hidden md:block">
                            <div className="text-sm font-medium">Favor Sunday</div>
                            <div className="text-xs text-gray-500">Mentee</div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default TopNavbar;
