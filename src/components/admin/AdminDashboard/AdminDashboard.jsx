import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, ChevronDown, DollarSign, FileText, Users, Activity, Layers, Home, Search, Bell, Menu, X, AlertCircle, Calendar as CalendarIcon, Filter, ArrowUp, ChevronRight, ArrowDown } from 'lucide-react';
import { FaBuilding, FaCalendar, FaHome, FaIdBadge, FaMoneyBill } from 'react-icons/fa';
import { HiBuildingOffice2, HiMiniArrowTurnDownRight } from 'react-icons/hi2';
import { IoCard, IoDocumentText } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi';
import { TbStatusChange } from 'react-icons/tb';
import { RiResetLeftFill } from 'react-icons/ri';
import Payments from './Payments';

// Sample data structure
const labsData = [
    {
        id: 1,
        name: "MediLab Plus",
        totalBranches: 4,
        totalUsers: 4,
        totalAdmins: 2,
        totalPatients: 25,
        totalReports: 34,
        status: "Active",
        totalEarnings: 18750,
        branches: [
            {
                id: 101, name: "MediLab Plus - North", patients: 542, reports: 687, earnings: 58700,
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-10"
            },
            { id: 102, name: "MediLab Plus - South", patients: 623, reports: 784, earnings: 67450, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-15" },
            { id: 103, name: "MediLab Plus - East", patients: 680, reports: 896, earnings: 61500, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-12" }
        ],
        monthlyTrends: [
            { month: 'Jan', patients: 145, reports: 184, earnings: 15200, commission: 2280, commissionPaid: 2280, commissionDue: 0 },
            { month: 'Feb', patients: 152, reports: 192, earnings: 15800, commission: 2370, commissionPaid: 2370, commissionDue: 0 },
            { month: 'Mar', patients: 168, reports: 212, earnings: 16900, commission: 2535, commissionPaid: 2535, commissionDue: 0 },
            { month: 'Apr', patients: 156, reports: 201, earnings: 15700, commission: 2355, commissionPaid: 2355, commissionDue: 0 },
            { month: 'May', patients: 164, reports: 210, earnings: 16400, commission: 2460, commissionPaid: 2460, commissionDue: 0 },
            { month: 'Jun', patients: 172, reports: 224, earnings: 17200, commission: 2580, commissionPaid: 2000, commissionDue: 580 }
        ]
    },
    {
        id: 2,
        name: "HealthScan Diagnostics",
        totalBranches: 4,
        totalUsers: 4,
        totalAdmins: 2,
        totalPatients: 21,
        totalReports: 31,
        status: "Active",
        totalEarnings: 17650,
        branches: [
            { id: 201, name: "HealthScan - Central", patients: 732, reports: 945, earnings: 73200, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-01-20" },
            { id: 202, name: "HealthScan - West", patients: 698, reports: 876, earnings: 69800, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-01-15" },
            { id: 203, name: "HealthScan - Airport", patients: 726, reports: 968, earnings: 72600, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-01-18" }
        ],
        monthlyTrends: [
            { month: 'Jan', patients: 172, reports: 218, earnings: 17200, commission: 2580, commissionPaid: 2580, commissionDue: 0 },
            { month: 'Feb', patients: 178, reports: 225, earnings: 17800, commission: 2670, commissionPaid: 2670, commissionDue: 0 },
            { month: 'Mar', patients: 187, reports: 242, earnings: 18700, commission: 2805, commissionPaid: 2805, commissionDue: 0 },
            { month: 'Apr', patients: 176, reports: 235, earnings: 17600, commission: 2640, commissionPaid: 2640, commissionDue: 0 },
            { month: 'May', patients: 182, reports: 238, earnings: 18200, commission: 2730, commissionPaid: 2730, commissionDue: 0 },
            { month: 'Jun', patients: 191, reports: 254, earnings: 19100, commission: 2865, commissionPaid: 1500, commissionDue: 1365 }
        ]
    },
    {
        id: 3,
        name: "PrecisionLabs",
        totalBranches: 6,
        totalUsers: 6,
        totalAdmins: 2,
        totalPatients: 43,
        totalReports: 76,
        status: "Active",
        totalEarnings: 25860,
        branches: [
            { id: 301, name: "PrecisionLabs - Downtown", patients: 542, reports: 695, earnings: 54200, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-05" },
            { id: 302, name: "PrecisionLabs - Uptown", patients: 512, reports: 663, earnings: 51200, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-01" },
            { id: 303, name: "PrecisionLabs - Riverside", patients: 578, reports: 747, earnings: 57800, 
                status: "Active",
                monthlyFee: 14000,
                totalUsers: 4,
                totalAdmins: 2,
                paymentStatus: "Paid", lastPaymentDate: "2025-02-03" }
        ],
        monthlyTrends: [
            { month: 'Jan', patients: 128, reports: 165, earnings: 12800, commission: 1920, commissionPaid: 1920, commissionDue: 0 },
            { month: 'Feb', patients: 132, reports: 172, earnings: 13200, commission: 1980, commissionPaid: 1980, commissionDue: 0 },
            { month: 'Mar', patients: 142, reports: 186, earnings: 14200, commission: 2130, commissionPaid: 2130, commissionDue: 0 },
            { month: 'Apr', patients: 135, reports: 174, earnings: 13500, commission: 2025, commissionPaid: 2025, commissionDue: 0 },
            { month: 'May', patients: 138, reports: 178, earnings: 13800, commission: 2070, commissionPaid: 2070, commissionDue: 0 },
            { month: 'Jun', patients: 145, reports: 190, earnings: 14500, commission: 2175, commissionPaid: 875, commissionDue: 1300 }
        ]
    }
];
// const mockData = {
//     labs: [
//       {
//         id: 1,
//         name: "Metro Lab",
//         totalBranches: 3,
//         totalOwners: 2,
//         totalReports: 1240,
//         monthlyFee: 2500,
//         reportIncome: 6200,
//         branches: [
//           { id: 101, name: "Downtown Branch", owners: 1, reports: 450, monthlyFee: 1000, reportIncome: 2250 },
//           { id: 102, name: "Westside Branch", owners: 1, reports: 390, monthlyFee: 1000, reportIncome: 1950 },
//           { id: 103, name: "Eastside Branch", owners: 1, reports: 400, monthlyFee: 500, reportIncome: 2000 }
//         ],
//         paymentStatus: "Paid",
//         paymentDate: "2025-03-05",
//         paymentHistory: [
//           { month: "Oct", date: "2024-10-05", revenue: 8200, monthlyFee: 2500, reportIncome: 5700, status: "Paid", date: "2024-10-05" },
//           { month: "Nov", date: "2024-11-06", revenue: 8500, monthlyFee: 2500, reportIncome: 6000, status: "Paid", date: "2024-11-06" },
//           { month: "Dec", date: "2024-12-04", revenue: 8100, monthlyFee: 2500, reportIncome: 5600, status: "Paid", date: "2024-12-04" },
//           { month: "Jan", date: "2025-01-03", revenue: 8700, monthlyFee: 2500, reportIncome: 6200, status: "Paid", date: "2025-01-03" },
//           { month: "Feb", date: "2025-02-05", revenue: 8400, monthlyFee: 2500, reportIncome: 5900, status: "Paid", date: "2025-02-05" },
//           { month: "Mar", date: "2025-03-05", revenue: 8700, monthlyFee: 2500, reportIncome: 6200, status: "Paid", date: "2025-03-05" }
//         ]
//       },
//       {
//         id: 2,
//         name: "City Central Lab",
//         totalBranches: 2,
//         totalOwners: 3,
//         totalReports: 980,
//         monthlyFee: 3000,
//         reportIncome: 4900,
//         branches: [
//           { id: 201, name: "Main Branch", owners: 2, reports: 580, monthlyFee: 2000, reportIncome: 2900 },
//           { id: 202, name: "Suburban Branch", owners: 1, reports: 400, monthlyFee: 1000, reportIncome: 2000 }
//         ],
//         paymentStatus: "Pending",
//         paymentDate: "",
//         paymentHistory: [
//           { month: "Oct", date: "2024-10-10", revenue: 7500, monthlyFee: 3000, reportIncome: 4500, status: "Paid", date: "2024-10-10" },
//           { month: "Nov", date: "2024-11-12", revenue: 7800, monthlyFee: 3000, reportIncome: 4800, status: "Paid", date: "2024-11-12" },
//           { month: "Dec", date: "2024-12-08", revenue: 7900, monthlyFee: 3000, reportIncome: 4900, status: "Paid", date: "2024-12-08" },
//           { month: "Jan", date: "2025-01-09", revenue: 8200, monthlyFee: 3000, reportIncome: 5200, status: "Paid", date: "2025-01-09" },
//           { month: "Feb", date: "2025-02-11", revenue: 7800, monthlyFee: 3000, reportIncome: 4800, status: "Paid", date: "2025-02-11" },
//           { month: "Mar", date: "2025-03-00", revenue: 7900, monthlyFee: 3000, reportIncome: 4900, status: "Pending", date: "" }
//         ]
//       },
//       {
//         id: 3,
//         name: "HealthFirst Lab",
//         totalBranches: 4,
//         totalOwners: 4,
//         totalReports: 1560,
//         monthlyFee: 4000,
//         reportIncome: 7800,
//         branches: [
//           { id: 301, name: "North Branch", owners: 1, reports: 380, monthlyFee: 1000, reportIncome: 1900 },
//           { id: 302, name: "South Branch", owners: 1, reports: 420, monthlyFee: 1000, reportIncome: 2100 },
//           { id: 303, name: "East Branch", owners: 1, reports: 390, monthlyFee: 1000, reportIncome: 1950 },
//           { id: 304, name: "West Branch", owners: 1, reports: 370, monthlyFee: 1000, reportIncome: 1850 }
//         ],
//         paymentStatus: "Overdue",
//         paymentDate: "2025-02-10",
//         paymentHistory: [
//           { month: "Oct", date: "2024-10-06", revenue: 11500, monthlyFee: 4000, reportIncome: 7500, status: "Paid" },
//           { month: "Nov", date: "2024-11-07", revenue: 11900, monthlyFee: 4000, reportIncome: 7900, status: "Paid" },
//           { month: "Dec", date: "2024-12-12", revenue: 11700, monthlyFee: 4000, reportIncome: 7700, status: "Paid" },
//           { month: "Jan", date: "2025-01-10", revenue: 12000, monthlyFee: 4000, reportIncome: 8000, status: "Paid" },
//           { month: "Feb", date: "2025-02-10", revenue: 11800, monthlyFee: 4000, reportIncome: 7800, status: "Overdue" },
//           { month: "Mar", date: "2025-03-00", revenue: 11800, monthlyFee: 4000, reportIncome: 7800, status: "Overdue" }
//         ]
//       }
//     ]
//   };
// Time filters for selection
const timeFilters = [
    "All Day",
    "Last day",
    "Last 7 days",
    "Last 30 days",
    "Last month",
    "This year",
    "Last year",
];

// Dashboard component
const AdminDashboard = () => {
    const [expandedLabs, setExpandedLabs] = useState({});
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [selectedLab, setSelectedLab] = useState(labsData[0]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [viewMode, setViewMode] = useState('overview'); // 'overview', 'branches', 'reports', 'commission'
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLabs, setFilteredLabs] = useState(labsData);
    const [timeFilter, setTimeFilter] = useState(timeFilters[2]); // Default to "Last 30 days"
    const [showTimeFilterDropdown, setShowTimeFilterDropdown] = useState(false);
    const [commissionNote, setCommissionNote] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    // Colors for charts
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    // Calculate summary data
    const totalPatients = labsData.reduce((sum, lab) => sum + lab.totalPatients, 0);
    const totalReports = labsData.reduce((sum, lab) => sum + lab.totalReports, 0);
    const totalEarnings = labsData.reduce((sum, lab) => sum + lab.totalEarnings, 0);
    const totalCommission = labsData.reduce((sum, lab) => sum + lab.commission, 0);
    const totalCommissionPaid = labsData.reduce((sum, lab) => sum + lab.commissionPaid, 0);
    const totalCommissionDue = labsData.reduce((sum, lab) => sum + lab.commissionDue, 0);

    // Data for lab comparison chart
    const labComparisonData = labsData.map(lab => ({
        name: lab.name,
        patients: lab.totalPatients,
        reports: lab.totalReports,
        earnings: lab.totalEarnings / 1000, // Divide by 1000 to keep scale reasonable
        commission: lab.commission / 1000,
        commissionDue: lab.commissionDue / 1000
    }));

    // Pie chart data for commission distribution
    const commissionDistribution = labsData.map(lab => ({
        name: lab.name,
        value: lab.commission
    }));

    // Commission due pie chart data
    const commissionDueDistribution = labsData.map(lab => ({
        name: lab.name,
        value: lab.commissionDue
    }));

    // Handle search
    useEffect(() => {
        const filtered = labsData.filter(lab =>
            lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lab.branches.some(branch => branch.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredLabs(filtered);

        // If current selected lab is not in filtered results and there are results, select the first lab
        if (filtered.length > 0 && !filtered.some(lab => lab.id === selectedLab.id)) {
            setSelectedLab(filtered[0]);
        }
    }, [searchTerm, selectedLab.id]);

    // Handle lab selection
    const handleLabChange = (labId) => {
        const lab = labsData.find(lab => lab.id === labId);
        if (lab) setSelectedLab(lab);
    };

    // Handle commission payment
    const handleCommissionPayment = (e) => {
        e.preventDefault();
        setIsProcessingPayment(true);

        // Simulate processing delay
        setTimeout(() => {
            // Here you would typically make an API call to process the payment
            alert(`Payment of $${paymentAmount} processed for ${selectedLab.name} with note: ${commissionNote}`);
            setIsProcessingPayment(false);
            setPaymentAmount('');
            setCommissionNote('');
        }, 1000);
    };

    const toggleLabExpansion = (labId) => {
        setExpandedLabs(prev => ({
            ...prev,
            [labId]: !prev[labId]
        }));
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });

        const sortedLabs = [...filteredLabs].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setFilteredLabs(sortedLabs);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Dashboard</h1>

                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <button
                            onClick={() => setViewMode('overview')}
                            className={`${viewMode === 'overview'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <FaHome className="h-4 w-4 mr-2" />
                            <span>Overview</span>
                        </button>

                        <button
                            onClick={() => setViewMode('branches')}
                            className={`${viewMode === 'branches'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <HiBuildingOffice2 className="h-4 w-4 mr-2" />
                            <span>Labs & Branchs</span>
                        </button>

                        <button
                            onClick={() => setViewMode('reports')}
                            className={`${viewMode === 'reports'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <IoDocumentText className="h-4 w-4 mr-2" />
                            <span>Reports & Analytics</span>
                        </button>

                        <button
                            onClick={() => setViewMode('commission')}
                            className={`${viewMode === 'commission'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <HiBuildingOffice2 className="h-4 w-4 mr-2" />
                            <span>Commission</span>
                        </button>

                        <button
                            onClick={() => setViewMode('commissionTracking')}
                            className={`${viewMode === 'commissionTracking'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <FaMoneyBill className="h-5 w-5 mr-2" />
                            <span>Commission Tracking</span>
                        </button>

                        <button
                            onClick={() => setViewMode('allBranches')}
                            className={`${viewMode === 'allBranches'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center space-x-2`}
                        >
                            <IoCard className="h-5 w-5 text-current" />
                            <span>Payments</span>
                        </button>

                    </nav>
                </div>

                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-5">

                        <div className="w-full sm:w-64">
                            <span className="block mb-2 text-sm font-medium text-gray-900">Search by Lab</span>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaBuilding className="text-gray-500" />
                                </div>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Lab"
                                // value={searchTerm}
                                // onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-64">
                            <span className="block mb-2 text-sm font-medium text-gray-900">Search by Branch</span>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaBuilding className="text-gray-500" />
                                </div>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5" placeholder="Branch"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full sm:w-64">
                            <span className="block mb-2 text-sm font-medium text-gray-900">Search by Period</span>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaCalendar className="text-gray-500" />
                                </div>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                    onClick={() => setShowTimeFilterDropdown(!showTimeFilterDropdown)}
                                >
                                    <option defaultValue>All</option>
                                    <option>Last Day</option>
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Last Month</option>
                                    <option>This Year</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full sm:w-64">
                            <span className="block mb-2 text-sm font-medium text-gray-900">Labs</span>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <BiSort className="text-gray-500" />
                                </div>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"
                                    onChange={(e) => handleLabChange(parseInt(e.target.value))}
                                    value={selectedLab.id}
                                >
                                    {labsData.map((lab) => (
                                        <option key={lab.id} value={lab.id}>{lab.name}</option>
                                    ))}
                                    <option defaultValue>Choose a Sorting</option>
                                    <option>ABC</option>
                                    <option>CHD</option>
                                    <option>XYZ</option>
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
                                    <option>Reg Date (ASC)</option>
                                    <option>Reg Date (DESC)</option>
                                    <option>Report Count (ASC)</option>
                                    <option>Report Count (DESC)</option>
                                    <option>Patient Count (ASC)</option>
                                    <option>Patient Count (DESC)</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full sm:w-54 flex gap-x-2 justify-center mt-auto">
                            <div className="w-1/2">
                                <button className="border w-full border-gray-300 px-3 py-2 rounded-md text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer"
                                // onClick={handleToggleFilters} 
                                >
                                    <Filter size={16} />
                                    <span className="ml-1">Filter</span>
                                </button>
                            </div>

                            <div className="w-1/2">
                                <button className="border w-full border-gray-300 px-3 py-2 rounded-md text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer"
                                // onClick={handleReset} 
                                >
                                    <RiResetLeftFill size={16} />
                                    <span className="ml-1">Reset</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>



                {/* Dashboard Content */}
                <main className="p-6">
                    {/* Overview Section */}
                    {viewMode === 'overview' && (
                        <>
                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-gray-600">Monitoring all lab franchises and their performance</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Total Patients</p>
                                            <h3 className="text-3xl font-bold">{totalPatients.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Users className="h-6 w-6 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>+5.2% from last month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Total Reports</p>
                                            <h3 className="text-3xl font-bold">{totalReports.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                            <FileText className="h-6 w-6 text-purple-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>+3.8% from last month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Total Earnings</p>
                                            <h3 className="text-3xl font-bold">${totalEarnings.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-green-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>+7.1% from last month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Commission Due</p>
                                            <h3 className="text-3xl font-bold">${totalCommissionDue.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-red-500 flex items-center">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        <span>{((totalCommissionDue / totalCommission) * 100).toFixed(1)}% of total commission</span>
                                    </div>
                                </div>
                            </div>

                            {/* Charts */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Lab Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={labComparisonData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="patients" fill="#8884d8" name="Patients" />
                                            <Bar dataKey="reports" fill="#82ca9d" name="Reports" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Lab Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={labComparisonData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="earnings" fill="#ffc658" name="Earnings (K)" />
                                            <Bar dataKey="commission" fill="#ff7300" name="Commission (K)" />
                                            <Bar dataKey="commissionDue" fill="#FF4560" name="Commission Due (K)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Selected Lab Details */}
                            <div className="bg-white rounded-lg shadow p-6 mb-6">

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <p className="text-blue-500 text-sm">Total Patients</p>
                                        <p className="text-2xl font-bold">{selectedLab.totalPatients.toLocaleString()}</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 rounded-lg">
                                        <p className="text-purple-500 text-sm">Total Reports</p>
                                        <p className="text-2xl font-bold">{selectedLab.totalReports.toLocaleString()}</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-lg">
                                        <p className="text-green-500 text-sm">Total Earnings</p>
                                        <p className="text-2xl font-bold">${selectedLab.totalEarnings.toLocaleString()}</p>
                                    </div>
                                    <div className="p-4 bg-orange-50 rounded-lg">
                                        <p className="text-orange-500 text-sm">Commission Due</p>
                                        {/* <p className="text-2xl font-bold">${selectedLab.commissionDue.toLocaleString()}</p> */}
                                        {/* <p className="text-xs text-gray-500">Last payment: {new Date(selectedLab.lastPaymentDate).toLocaleDateString()}</p> */}
                                    </div>
                                </div>

                                <h4 className="text-lg font-semibold mb-4">Monthly Trends</h4>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={selectedLab.monthlyTrends}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis yAxisId="left" />
                                        <YAxis yAxisId="right" orientation="right" />
                                        <Tooltip />
                                        <Legend />
                                        <Line yAxisId="left" type="monotone" dataKey="patients" stroke="#8884d8" name="Patients" />
                                        <Line yAxisId="left" type="monotone" dataKey="reports" stroke="#82ca9d" name="Reports" />
                                        <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#ffc658" name="Earnings ($)" />
                                        <Line yAxisId="right" type="monotone" dataKey="commissionDue" stroke="#FF4560" name="Commission Due ($)" strokeDasharray="3 3" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </>
                    )}

                    {/* Branches Section */}
                    {viewMode === 'branches' && (
                        <>

                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Labs & Branchs</h1>
                            </div>
                            <div className="mb-6">

                                <p className="text-gray-600">Monitor and manage individual branches for {selectedLab.name}</p>
                            </div>

                            <>
                                {/* Summary Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Total Labs</p>
                                        <p className="text-2xl font-bold">
                                            {/* {totalSummary.labs} */}
                                            10
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Total Branches</p>
                                        <p className="text-2xl font-bold">
                                            {/* {totalSummary.branches} */}
                                            18
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Total Users</p>
                                        <p className="text-2xl font-bold">
                                            {/* {totalSummary.owners} */}
                                            16
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Total Admins</p>
                                        <p className="text-2xl font-bold">
                                            {/* {totalSummary.owners} */}
                                            16
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Total Reports</p>
                                        <p className="text-2xl font-bold">
                                            {/* {totalSummary.reports} */}
                                            3000
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Monthly Income</p>
                                        <p className="text-2xl font-bold">
                                            {/* ${totalSummary.monthlyFee} */}
                                            LKR. 24000
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <p className="text-gray-500 text-sm">Report Expenses</p>
                                        <p className="text-2xl font-bold">
                                            {/* ${totalSummary.reportIncome} */}
                                            LKR. 1300
                                        </p>
                                    </div>
                                </div>

                                {/* Labs List */}
                                <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-green-300/20 border-green-300">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Details
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('name')}
                                                >
                                                    Lab & Branch
                                                    {sortConfig.key === 'name' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('totalBranches')}
                                                >
                                                    Branches
                                                    {sortConfig.key === 'totalBranches' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('totalUsers')}
                                                >
                                                    Users
                                                    {sortConfig.key === 'totalUsers' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('totalAdmins')}
                                                >
                                                    Admins
                                                    {sortConfig.key === 'totalAdmins' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('totalPatients')}
                                                >
                                                    Patients
                                                    {sortConfig.key === 'totalPatients' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('totalReports')}
                                                >
                                                    Reports
                                                    {sortConfig.key === 'totalReports' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('subscription')}
                                                >
                                                    Subscription
                                                    {sortConfig.key === 'subscription' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('monthlyFee')}
                                                >
                                                    Monthly Fee
                                                    {sortConfig.key === 'monthlyFee' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('regDate')}
                                                >
                                                    Registered Date
                                                    {sortConfig.key === 'regDate' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('status')}
                                                >
                                                    Status
                                                    {sortConfig.key === 'status' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                                <th
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                                    onClick={() => handleSort('paymentStatus')}
                                                >
                                                    Payment
                                                    {sortConfig.key === 'paymentStatus' && (
                                                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                                                    )}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredLabs.map((lab) => (
                                                <React.Fragment key={lab.id}>
                                                    <tr>
                                                        <td className="px-6 py-4">
                                                            <button
                                                                onClick={() => toggleLabExpansion(lab.id)}
                                                                className="focus:outline-none"
                                                            >
                                                                {expandedLabs[lab.id] ? (
                                                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                                                ) : (
                                                                    <ChevronRight className="h-5 w-5 text-gray-500" />
                                                                )}
                                                            </button>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lab.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalBranches}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalUsers}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalAdmins}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalPatients}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalReports}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                                                    </tr>
                                                    {expandedLabs[lab.id] && lab.branches.map((branch) => (
                                                        <tr key={branch.id} className="bg-gray-50">
                                                            <td className="px-6 py-4"></td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 pl-10">└ {branch.name}</td>
                                                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 pl-10"><HiMiniArrowTurnDownRight className='h-3 w-3' /> {branch.name}</td> */}
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.totalUsers}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.totalAdmins}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${branch.monthlyFee}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${branch.reportIncome}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                                        </tr>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>

                            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-green-300/20 border-green-300">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Lab & Branch
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Lab Users
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Lab Admins
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Patients
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Reports
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Subscription
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Registered Date
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {selectedLab.branches.map((branch) => (
                                                <tr key={branch.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-gray-900">{branch.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">2</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">1</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">48</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">120</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Annual
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{new Date(branch.lastPaymentDate).toLocaleDateString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                                                        <button className="text-green-600 hover:text-green-900">Pay</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Branch Performance Charts */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Branch Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={selectedLab.branches.map(branch => ({
                                                name: branch.name.replace(`${selectedLab.name} - `, ''),
                                                patients: branch.patients,
                                                reports: branch.reports, // Divide by 1000 to keep scale reasonable
                                            }))}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="patients" fill="#8884d8" name="Patients" />
                                            <Bar dataKey="reports" fill="#82ca9d" name="Reports" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Branch Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={selectedLab.branches.map(branch => ({
                                                name: branch.name.replace(`${selectedLab.name} - `, ''),
                                                earnings: branch.earnings,
                                                commission: branch.commission,
                                            }))}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="earnings" fill="#28203f" name="Earnings (K)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>


                            </div>
                        </>
                    )}

                    {/* Branches Section */}
                    {viewMode === 'commission' && (
                        <>

                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Branches</h1>
                            </div>
                            <div className="mb-6">

                                <p className="text-gray-600">Monitor and manage individual branches for {selectedLab.name}</p>
                            </div>

                            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-green-300/20 border-green-300">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Branch Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Patients
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Reports
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Earnings
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Commission
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Commission Due
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Payment
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {selectedLab.branches.map((branch) => (
                                                <tr key={branch.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-gray-900">{branch.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{branch.patients.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{branch.reports.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${branch.earnings.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${branch.commission.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-red-600">${branch.commissionDue.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{new Date(branch.lastPaymentDate).toLocaleDateString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                                                        <button className="text-green-600 hover:text-green-900">Pay</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Branch Performance Charts */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Branch Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={selectedLab.branches.map(branch => ({
                                                name: branch.name.replace(`${selectedLab.name} - `, ''),
                                                patients: branch.patients,
                                                reports: branch.reports, // Divide by 1000 to keep scale reasonable
                                            }))}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="patients" fill="#8884d8" name="Patients" />
                                            <Bar dataKey="reports" fill="#82ca9d" name="Reports" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-semibold mb-4">Branch Comparison</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={selectedLab.branches.map(branch => ({
                                                name: branch.name.replace(`${selectedLab.name} - `, ''),
                                                earnings: branch.earnings,
                                                commission: branch.commission,
                                            }))}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="earnings" fill="#28203f" name="Earnings (K)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>


                            </div>
                        </>
                    )}
                    {/* Reports & Analytics Section */}
                    {viewMode === 'reports' && (
                        <>

                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-600">Detailed reporting and analytics for {selectedLab.name}</p>
                            </div>

                            {/* Summary Statistics Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Patient Growth</p>
                                            <h3 className="text-3xl font-bold">+5.2%</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Users className="h-6 w-6 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>Average over last 6 months</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Reports per Patient</p>
                                            <h3 className="text-3xl font-bold">1.28</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                            <FileText className="h-6 w-6 text-purple-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>+0.1 from last month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Avg. Revenue per Report</p>
                                            <h3 className="text-3xl font-bold">$87.40</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-green-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>+2.3% from last month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Commission Rate</p>
                                            <h3 className="text-3xl font-bold">15%</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Layers className="h-6 w-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-blue-500 flex items-center">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        <span>Standard across all branches</span>
                                    </div>
                                </div>
                            </div>

                            {/* Monthly Trend Charts */}
                            <div className="bg-white rounded-lg shadow p-6 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold">Monthly Performance Trends</h3>
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                                            Print Report
                                        </button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
                                            Export CSV
                                        </button>
                                    </div>
                                </div>

                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={selectedLab.monthlyTrends}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis yAxisId="left" />
                                        <YAxis yAxisId="right" orientation="right" />
                                        <Tooltip />
                                        <Legend />
                                        <Line yAxisId="left" type="monotone" dataKey="patients" stroke="#8884d8" name="Patients" />
                                        <Line yAxisId="left" type="monotone" dataKey="reports" stroke="#82ca9d" name="Reports" />
                                        <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#ffc658" name="Earnings ($)" />
                                        <Line yAxisId="right" type="monotone" dataKey="commission" stroke="#ff7300" name="Commission ($)" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Reports Table */}
                            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                                <div className="p-4 flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">Monthly Reports</h3>
                                    <div className="relative">
                                        <div className="flex items-center bg-gray-100 rounded-md p-2">
                                            <Search className="h-5 w-5 text-gray-400 mr-2" />
                                            <input
                                                type="text"
                                                placeholder="Search reports..."
                                                className="bg-transparent border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-green-300/20 border-green-300">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Month
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Patients
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Reports
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Earnings
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Commission
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Commission Paid
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Commission Due
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {selectedLab.monthlyTrends.map((month, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-gray-900">{month.month} 2025</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{month.patients}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{month.reports}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${month.earnings.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${month.commission.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${month.commissionPaid.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-red-600">${month.commissionDue.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">View Details</button>
                                                        <button className="text-green-600 hover:text-green-900">Download</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Report Generator */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold mb-4">Generate Custom Report</h3>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <option value="financial">Financial Summary</option>
                                                <option value="patient">Patient Analytics</option>
                                                <option value="commission">Commission Report</option>
                                                <option value="branch">Branch Performance</option>
                                                <option value="custom">Custom Report</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                                            <div className="flex space-x-2">
                                                <div className="relative flex-1">
                                                    <input
                                                        type="date"
                                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    />
                                                    <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                                                </div>
                                                <div className="relative flex-1">
                                                    <input
                                                        type="date"
                                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    />
                                                    <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <option value="pdf">PDF</option>
                                                <option value="excel">Excel</option>
                                                <option value="csv">CSV</option>
                                                <option value="doc">Word Document</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Include Sections</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" defaultChecked />
                                                <label className="ml-2 text-sm text-gray-700">Summary</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" defaultChecked />
                                                <label className="ml-2 text-sm text-gray-700">Financial Details</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" defaultChecked />
                                                <label className="ml-2 text-sm text-gray-700">Graphs & Charts</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" defaultChecked />
                                                <label className="ml-2 text-sm text-gray-700">Branch Breakdown</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" />
                                                <label className="ml-2 text-sm text-gray-700">Patient Demographics</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" />
                                                <label className="ml-2 text-sm text-gray-700">Test Categories</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" />
                                                <label className="ml-2 text-sm text-gray-700">Commission Analysis</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded" />
                                                <label className="ml-2 text-sm text-gray-700">Future Projections</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300">
                                            Cancel
                                        </button>
                                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                                            Generate Report
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}

                    {/* Commission Tracking Section */}
                    {viewMode === 'commissionTracking' && (
                        <>

                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Commission</h1>
                            </div>


                            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                                <div className="flex flex-row flex-wrap gap-2 w-auto mt-5">

                                    {viewMode === 'commission' && (
                                        <div className="rounded-md">
                                            <p className="text-sm font-semibold text-gray-700 mb-1">Select Lab</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                                {filteredLabs.map(lab => (
                                                    <button
                                                        key={lab.id}
                                                        className={`px-3 py-2 rounded-md transition ${selectedLab.id === lab.id
                                                            ? 'bg-green-50 border border-green-500'
                                                            : 'hover:bg-gray-50 border border-gray-200'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm">{lab.name}</span>
                                                            {lab.commissionDue > 0 && (
                                                                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                                                    ${lab.commissionDue.toLocaleString()}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-600">Track and manage commission payments for {selectedLab.name}</p>
                            </div>

                            {/* Commission Summary Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-1">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Total Commission</p>
                                            <h3 className="text-3xl font-bold">${selectedLab.commission.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-indigo-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>15% of total earnings</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Commission Paid</p>
                                            <h3 className="text-3xl font-bold">${selectedLab.commissionPaid.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-green-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-green-500 flex items-center">
                                        <Activity className="h-4 w-4 mr-1" />
                                        <span>{((selectedLab.commissionPaid / selectedLab.commission) * 100).toFixed(1)}% of total commission</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500">Commission Due</p>
                                            <h3 className="text-3xl font-bold">${selectedLab.commissionDue.toLocaleString()}</h3>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                                            <DollarSign className="h-6 w-6 text-red-500" />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-red-500 flex items-center">
                                        <AlertCircle className="h-4 w-4 mr-1" />
                                        <span>{((selectedLab.commissionDue / selectedLab.commission) * 100).toFixed(1)}% pending payment</span>
                                    </div>
                                </div>
                            </div>


                            {/* Commission Payment Form */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-semibold mb-4">Process Commission Payment</h3>
                                    <form onSubmit={handleCommissionPayment}>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Lab</label>
                                            <select
                                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                onChange={(e) => handleLabChange(parseInt(e.target.value))}
                                                value={selectedLab.id}
                                            >
                                                {labsData.map(lab => (
                                                    <option key={lab.id} value={lab.id}>{lab.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Amount ($)</label>
                                            <input
                                                type="number"
                                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter payment amount"
                                                value={paymentAmount}
                                                onChange={(e) => setPaymentAmount(e.target.value)}
                                                required
                                                min="0"
                                                max={selectedLab.commissionDue}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Maximum payment: ${selectedLab.commissionDue.toLocaleString()}</p>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <option value="bank">Bank Transfer</option>
                                                <option value="check">Check</option>
                                                <option value="cash">Cash</option>
                                                <option value="credit">Credit Card</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    defaultValue={new Date().toISOString().split('T')[0]}
                                                />
                                                <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                            <textarea
                                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Add payment notes"
                                                rows="3"
                                                value={commissionNote}
                                                onChange={(e) => setCommissionNote(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center"
                                                disabled={isProcessingPayment || !paymentAmount}
                                            >
                                                {isProcessingPayment ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                                                        Processing...
                                                    </>
                                                ) : (
                                                    'Process Payment'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-semibold mb-4">Commission History</h3>
                                    <div className="overflow-y-auto max-h-96">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-green-300/20 border-green-300">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Date
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Amount
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Method
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {/* Sample payment history data */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        2025-02-15
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        $4,500.00
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Bank Transfer
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Completed
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        2025-01-20
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        $3,200.00
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Check
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Completed
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        2024-12-15
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        $5,000.00
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        Bank Transfer
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Completed
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Commission Analysis */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-semibold mb-4">Commission Trends</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart
                                            data={selectedLab.monthlyTrends}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                            <Legend />
                                            <Line type="monotone" dataKey="commission" stroke="#8884d8" name="Commission" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="commissionPaid" stroke="#82ca9d" name="Paid" />
                                            <Line type="monotone" dataKey="commissionDue" stroke="#ff7300" name="Due" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-semibold mb-4">Commission by Branch</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart
                                            data={selectedLab.branches.map(branch => ({
                                                name: branch.name.replace(`${selectedLab.name} - `, ''),
                                                commission: branch.commission,
                                                commissionPaid: branch.commissionPaid,
                                                commissionDue: branch.commissionDue
                                            }))}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                            <Legend />
                                            <Bar dataKey="commission" fill="#8884d8" name="Total Commission" />
                                            <Bar dataKey="commissionPaid" fill="#82ca9d" name="Paid" />
                                            <Bar dataKey="commissionDue" fill="#ff7300" name="Due" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Commission Settings */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-semibold mb-4">Commission Settings</h3>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Default Commission Rate (%)</label>
                                            <input
                                                type="number"
                                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Enter commission rate"
                                                defaultValue="15"
                                                min="0"
                                                max="100"
                                                step="0.5"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Schedule</label>
                                            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <option value="monthly">Monthly</option>
                                                <option value="quarterly">Quarterly</option>
                                                <option value="biannual">Bi-Annual</option>
                                                <option value="annual">Annual</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Instructions</label>
                                        <textarea
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Enter payment instructions"
                                            rows="3"
                                            defaultValue="Commission payments are processed according to the selected schedule. All payments require approval from management."
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                                        >
                                            Save Settings
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}

                    {viewMode === 'allBranches' && (
                        <Payments />
                    )}

                </main>
            </div>
        </div>
    );
};

// Export the component
export default AdminDashboard;
