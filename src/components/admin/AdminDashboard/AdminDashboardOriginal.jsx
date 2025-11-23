import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, ChevronDown, DollarSign, FileText, Users, Activity, Layers, Home, Search, Bell, Menu, X, AlertCircle, Calendar as CalendarIcon, Filter } from 'lucide-react';
import Overview from './Payments';

// Sample data structure
const labsData = [
    {
        id: 1,
        name: "MediLab Plus",
        totalPatients: 1845,
        totalReports: 2367,
        totalEarnings: 187650,
        commission: 28147.5,
        commissionPaid: 14000,
        commissionDue: 14147.5,
        lastPaymentDate: "2025-02-15",
        branches: [
            { id: 101, name: "MediLab Plus - North", patients: 542, reports: 687, earnings: 58700, commission: 8805, commissionPaid: 4400, commissionDue: 4405, lastPaymentDate: "2025-02-10" },
            { id: 102, name: "MediLab Plus - South", patients: 623, reports: 784, earnings: 67450, commission: 10117.5, commissionPaid: 5100, commissionDue: 5017.5, lastPaymentDate: "2025-02-15" },
            { id: 103, name: "MediLab Plus - East", patients: 680, reports: 896, earnings: 61500, commission: 9225, commissionPaid: 4500, commissionDue: 4725, lastPaymentDate: "2025-02-12" }
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
        totalPatients: 2156,
        totalReports: 2789,
        totalEarnings: 215600,
        commission: 32340,
        commissionPaid: 18000,
        commissionDue: 14340,
        lastPaymentDate: "2025-01-20",
        branches: [
            { id: 201, name: "HealthScan - Central", patients: 732, reports: 945, earnings: 73200, commission: 10980, commissionPaid: 6100, commissionDue: 4880, lastPaymentDate: "2025-01-20" },
            { id: 202, name: "HealthScan - West", patients: 698, reports: 876, earnings: 69800, commission: 10470, commissionPaid: 5800, commissionDue: 4670, lastPaymentDate: "2025-01-15" },
            { id: 203, name: "HealthScan - Airport", patients: 726, reports: 968, earnings: 72600, commission: 10890, commissionPaid: 6100, commissionDue: 4790, lastPaymentDate: "2025-01-18" }
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
        totalPatients: 1632,
        totalReports: 2105,
        totalEarnings: 163200,
        commission: 24480,
        commissionPaid: 12000,
        commissionDue: 12480,
        lastPaymentDate: "2025-02-05",
        branches: [
            { id: 301, name: "PrecisionLabs - Downtown", patients: 542, reports: 695, earnings: 54200, commission: 8130, commissionPaid: 4000, commissionDue: 4130, lastPaymentDate: "2025-02-05" },
            { id: 302, name: "PrecisionLabs - Uptown", patients: 512, reports: 663, earnings: 51200, commission: 7680, commissionPaid: 3800, commissionDue: 3880, lastPaymentDate: "2025-02-01" },
            { id: 303, name: "PrecisionLabs - Riverside", patients: 578, reports: 747, earnings: 57800, commission: 8670, commissionPaid: 4200, commissionDue: 4470, lastPaymentDate: "2025-02-03" }
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
const AdminDashboardOriginal = () => {
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

    return (
        <div className="bg-gray-50 min-h-screen p-6">

            {/* Main Content */}
            <div className="mt-5">
                <h1 className="text-xl font-semibold text-gray-800 ml-2">Dashboard</h1>
                {/* Top Navigation */}

                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <button
                            onClick={() => setViewMode('overview')}
                            className={`${viewMode === 'overview'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <Home className="h-5 w-5 mr-2" />
                            <span>Overview</span>
                        </button>

                        <button
                            onClick={() => setViewMode('branches')}
                            className={`${viewMode === 'branches'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <Layers className="h-5 w-5 mr-2" />
                            <span>Branch Management</span>
                        </button>

                        <button
                            onClick={() => setViewMode('reports')}
                            className={`${viewMode === 'reports'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <FileText className="h-5 w-5 mr-2" />
                            <span>Reports & Analytics</span>
                        </button>

                        <button
                            onClick={() => setViewMode('commission')}
                            className={`${viewMode === 'commission'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center`}
                        >
                            <DollarSign className="h-5 w-5 mr-2" />
                            <span>Commission Tracking</span>
                        </button>

                        <button
                            onClick={() => setViewMode('allBranches')}
                            className={`${viewMode === 'allBranches'
                                ? 'border-b-2 border-green-500 font-medium text-green-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } py-4 px-6 text-sm focus:outline-none flex items-center space-x-2`}
                        >
                            <DollarSign className="h-5 w-5 text-current" />
                            <span>All Branches</span>
                        </button>

                    </nav>
                </div>

                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    <div className="flex flex-row flex-wrap gap-2 w-auto mt-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search labs.."
                                className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2" />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search  branches..."
                                className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2" />
                        </div>

                        <div className="relative">
                            <button
                                className="flex items-center space-x-1 bg-gray-100 py-2.5 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                onClick={() => setShowTimeFilterDropdown(!showTimeFilterDropdown)}
                            >
                                <Calendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-700">{timeFilter}</span>
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </button>

                            {showTimeFilterDropdown && (
                                <div className="absolute right-0 mt-2 w-35 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        {timeFilters.map((filter, index) => (
                                            <button
                                                key={index}
                                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${timeFilter === filter ? 'bg-gray-100' : ''}`}
                                                onClick={() => {
                                                    setTimeFilter(filter);
                                                    setShowTimeFilterDropdown(false);
                                                }}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <select
                                className="w-full appearance-none bg-gray-100 py-2.5 px-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                onChange={(e) => handleLabChange(parseInt(e.target.value))}
                                value={selectedLab.id}
                            >
                                {labsData.map((lab) => (
                                    <option key={lab.id} value={lab.id}>{lab.name}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>


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
                        {/* Labs section - can be moved to a dropdown or secondary navigation */}

                    </div>
                </div>


                {/* Dashboard Content */}
                <main className="p-6">
                    {/* Overview Section */}
                    {viewMode === 'overview' && (
                        <>
                            <div className="mb-2">
                                <h3 className="text-gray-600">Monitoring all lab franchises and their performance</h3>
                            </div>

                            {/* Summary Cards */}
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
                                        <p className="text-2xl font-bold">${selectedLab.commissionDue.toLocaleString()}</p>
                                        <p className="text-xs text-gray-500">Last payment: {new Date(selectedLab.lastPaymentDate).toLocaleDateString()}</p>
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
                    {viewMode === 'commission' && (
                        <>
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
                        <Overview />

                    )}

                </main>
            </div>
        </div>
    );
};

// Export the component
export default AdminDashboardOriginal;
