import React, { useState, useEffect } from 'react';
import { Search, Calendar, DollarSign, FileText, ArrowDown, ArrowUp, ChevronDown, ChevronRight, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data for demonstration
const mockData = {
  labs: [
    {
      id: 1,
      name: "Metro Lab",
      totalBranches: 3,
      totalOwners: 2,
      totalReports: 1240,
      monthlyFee: 2500,
      reportIncome: 6200,
      branches: [
        { id: 101, name: "Downtown Branch", owners: 1, reports: 450, monthlyFee: 1000, reportIncome: 2250 },
        { id: 102, name: "Westside Branch", owners: 1, reports: 390, monthlyFee: 1000, reportIncome: 1950 },
        { id: 103, name: "Eastside Branch", owners: 1, reports: 400, monthlyFee: 500, reportIncome: 2000 }
      ],
      paymentStatus: "Paid",
      paymentDate: "2025-03-05",
      paymentHistory: [
        { month: "Oct", date: "2024-10-05", revenue: 8200, monthlyFee: 2500, reportIncome: 5700, status: "Paid", date: "2024-10-05" },
        { month: "Nov", date: "2024-11-06", revenue: 8500, monthlyFee: 2500, reportIncome: 6000, status: "Paid", date: "2024-11-06" },
        { month: "Dec", date: "2024-12-04", revenue: 8100, monthlyFee: 2500, reportIncome: 5600, status: "Paid", date: "2024-12-04" },
        { month: "Jan", date: "2025-01-03", revenue: 8700, monthlyFee: 2500, reportIncome: 6200, status: "Paid", date: "2025-01-03" },
        { month: "Feb", date: "2025-02-05", revenue: 8400, monthlyFee: 2500, reportIncome: 5900, status: "Paid", date: "2025-02-05" },
        { month: "Mar", date: "2025-03-05", revenue: 8700, monthlyFee: 2500, reportIncome: 6200, status: "Paid", date: "2025-03-05" }
      ]
    },
    {
      id: 2,
      name: "City Central Lab",
      totalBranches: 2,
      totalOwners: 3,
      totalReports: 980,
      monthlyFee: 3000,
      reportIncome: 4900,
      branches: [
        { id: 201, name: "Main Branch", owners: 2, reports: 580, monthlyFee: 2000, reportIncome: 2900 },
        { id: 202, name: "Suburban Branch", owners: 1, reports: 400, monthlyFee: 1000, reportIncome: 2000 }
      ],
      paymentStatus: "Pending",
      paymentDate: "",
      paymentHistory: [
        { month: "Oct", date: "2024-10-10", revenue: 7500, monthlyFee: 3000, reportIncome: 4500, status: "Paid", date: "2024-10-10" },
        { month: "Nov", date: "2024-11-12", revenue: 7800, monthlyFee: 3000, reportIncome: 4800, status: "Paid", date: "2024-11-12" },
        { month: "Dec", date: "2024-12-08", revenue: 7900, monthlyFee: 3000, reportIncome: 4900, status: "Paid", date: "2024-12-08" },
        { month: "Jan", date: "2025-01-09", revenue: 8200, monthlyFee: 3000, reportIncome: 5200, status: "Paid", date: "2025-01-09" },
        { month: "Feb", date: "2025-02-11", revenue: 7800, monthlyFee: 3000, reportIncome: 4800, status: "Paid", date: "2025-02-11" },
        { month: "Mar", date: "2025-03-00", revenue: 7900, monthlyFee: 3000, reportIncome: 4900, status: "Pending", date: "" }
      ]
    },
    {
      id: 3,
      name: "HealthFirst Lab",
      totalBranches: 4,
      totalOwners: 4,
      totalReports: 1560,
      monthlyFee: 4000,
      reportIncome: 7800,
      branches: [
        { id: 301, name: "North Branch", owners: 1, reports: 380, monthlyFee: 1000, reportIncome: 1900 },
        { id: 302, name: "South Branch", owners: 1, reports: 420, monthlyFee: 1000, reportIncome: 2100 },
        { id: 303, name: "East Branch", owners: 1, reports: 390, monthlyFee: 1000, reportIncome: 1950 },
        { id: 304, name: "West Branch", owners: 1, reports: 370, monthlyFee: 1000, reportIncome: 1850 }
      ],
      paymentStatus: "Overdue",
      paymentDate: "2025-02-10",
      paymentHistory: [
        { month: "Oct", date: "2024-10-06", revenue: 11500, monthlyFee: 4000, reportIncome: 7500, status: "Paid" },
        { month: "Nov", date: "2024-11-07", revenue: 11900, monthlyFee: 4000, reportIncome: 7900, status: "Paid" },
        { month: "Dec", date: "2024-12-12", revenue: 11700, monthlyFee: 4000, reportIncome: 7700, status: "Paid" },
        { month: "Jan", date: "2025-01-10", revenue: 12000, monthlyFee: 4000, reportIncome: 8000, status: "Paid" },
        { month: "Feb", date: "2025-02-10", revenue: 11800, monthlyFee: 4000, reportIncome: 7800, status: "Overdue" },
        { month: "Mar", date: "2025-03-00", revenue: 11800, monthlyFee: 4000, reportIncome: 7800, status: "Overdue" }
      ]
    }
  ]
};

const Payments = () => {
  const [expandedLabs, setExpandedLabs] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('Last 30 days');
  const [filteredLabs, setFilteredLabs] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [activeTab, setActiveTab] = useState('overview');

  // New filters for payment status tab and chart filtering
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('All');
  const [paymentDateSearch, setPaymentDateSearch] = useState('');
  const [labNameSearch, setLabNameSearch] = useState('');
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Chart date range filters
  const [startDate, setStartDate] = useState('2024-10-01');
  const [endDate, setEndDate] = useState('2025-03-31');

  // Time filters array
  const timeFilters = [
    "All time",
    "Last day",
    "Last 7 days",
    "Last 30 days",
    "Last month",
    "This year",
    "Last year",
  ];

  // Payment status options
  const paymentStatusOptions = ["All", "Paid", "Pending", "Overdue"];

  useEffect(() => {
    // Filter labs based on search term
    const filtered = mockData.labs.filter(lab =>
      lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.branches.some(branch => branch.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredLabs(filtered);

    // Prepare payment history data
    const history = [];
    mockData.labs.forEach(lab => {
      lab.paymentHistory.forEach(payment => {
        history.push({
          labId: lab.id,
          labName: lab.name,
          ...payment
        });
      });
    });
    setPaymentHistory(history);
  }, [searchTerm]);

  // Initialize data
  useEffect(() => {
    setFilteredLabs(mockData.labs);
  }, []);

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

  // Filter payment history based on filters
  const getFilteredPaymentHistory = () => {
    return paymentHistory.filter(payment => {
      const matchStatus = paymentStatusFilter === 'All' || payment.status === paymentStatusFilter;
      const matchDate = !paymentDateSearch || (payment.date && payment.date.includes(paymentDateSearch));
      const matchLab = !labNameSearch || payment.labName.toLowerCase().includes(labNameSearch.toLowerCase());
      return matchStatus && matchDate && matchLab;
    });
  };

  // Calculate total summary
  const totalSummary = filteredLabs.reduce((acc, lab) => {
    acc.labs += 1;
    acc.branches += lab.totalBranches;
    acc.owners += lab.totalOwners;
    acc.reports += lab.totalReports;
    acc.monthlyFee += lab.monthlyFee;
    acc.reportIncome += lab.reportIncome;
    return acc;
  }, { labs: 0, branches: 0, owners: 0, reports: 0, monthlyFee: 0, reportIncome: 0 });

  // Data for pie chart
  const pieChartData = filteredLabs.map(lab => ({
    name: lab.name,
    value: lab.monthlyFee + lab.reportIncome
  }));

  // Prepare bar chart data - revenue by lab
  const prepareBarChartData = () => {
    return filteredLabs.map(lab => {
      // Filter payment history by date range if needed
      const filteredHistory = lab.paymentHistory.filter(payment => {
        if (!payment.date) return false;
        return payment.date >= startDate && payment.date <= endDate;
      });

      // Calculate sums from filtered history
      const totalMonthlyFee = filteredHistory.reduce((sum, payment) => sum + payment.monthlyFee, 0);
      const totalReportIncome = filteredHistory.reduce((sum, payment) => sum + payment.reportIncome, 0);

      return {
        name: lab.name,
        "Monthly Fee": totalMonthlyFee,
        "Report Income": totalReportIncome,
        "Total Revenue": totalMonthlyFee + totalReportIncome
      };
    });
  };

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Data for line chart - show both monthly fee and report income over time
  const prepareLineChartData = () => {
    // Create a map to store aggregated data by date
    const dateMap = new Map();

    // Collect all payment dates
    paymentHistory.forEach(payment => {
      if (!payment.date) return;

      // Filter by date range
      if (payment.date < startDate || payment.date > endDate) return;

      // Format the date for display (YYYY-MM)
      const formattedDate = payment.date.substring(0, 7);

      if (!dateMap.has(formattedDate)) {
        dateMap.set(formattedDate, {
          date: formattedDate,
          "Monthly Fee": 0,
          "Report Income": 0,
          "Total Revenue": 0
        });
      }

      const entry = dateMap.get(formattedDate);
      entry["Monthly Fee"] += payment.monthlyFee;
      entry["Report Income"] += payment.reportIncome;
      entry["Total Revenue"] += payment.revenue;
    });

    // Convert map to array and sort by date
    return Array.from(dateMap.values()).sort((a, b) => a.date.localeCompare(b.date));
  };

  const barChartData = prepareBarChartData();
  const lineChartData = prepareLineChartData();

  return (
    <div className="bg-gray-50 min-h-screen ">


      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="mb-px flex">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none flex items-center`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'revenue' ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none flex items-center`}
            onClick={() => setActiveTab('revenue')}
          >
            Revenue
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'payments' ? 'border-b-2 border-green-500 font-medium text-green-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } py-4 px-6 text-sm focus:outline-none flex items-center`}
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-1 py-1">
        {/* Search and Filter Bar */}

        <div className="flex flex-col md:flex-row md:items-center gap-4 py-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Search labs or branches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <select
                className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
              >
                {timeFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>


        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Total Labs</p>
                <p className="text-2xl font-bold">{totalSummary.labs}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Total Branches</p>
                <p className="text-2xl font-bold">{totalSummary.branches}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Total Owners</p>
                <p className="text-2xl font-bold">{totalSummary.owners}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Total Reports</p>
                <p className="text-2xl font-bold">{totalSummary.reports}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Monthly Fees</p>
                <p className="text-2xl font-bold">${totalSummary.monthlyFee}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-500 text-sm">Report Income</p>
                <p className="text-2xl font-bold">${totalSummary.reportIncome}</p>
              </div>
            </div>

            {/* Labs List */}
            <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Labs</h3>
              </div>
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
                      Name
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
                      onClick={() => handleSort('totalOwners')}
                    >
                      Owners
                      {sortConfig.key === 'totalOwners' && (
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
                      onClick={() => handleSort('monthlyFee')}
                    >
                      Monthly Fee
                      {sortConfig.key === 'monthlyFee' && (
                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                      )}
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('reportIncome')}
                    >
                      Report Income
                      {sortConfig.key === 'reportIncome' && (
                        sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4 inline ml-1" /> : <ArrowDown className="h-4 w-4 inline ml-1" />
                      )}
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('paymentStatus')}
                    >
                      Payment Status
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalOwners}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.totalReports}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${lab.monthlyFee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${lab.reportIncome}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${lab.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                              lab.paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}
                          >
                            {lab.paymentStatus}
                          </span>
                        </td>
                      </tr>
                      {expandedLabs[lab.id] && lab.branches.map((branch) => (
                        <tr key={branch.id} className="bg-gray-50">
                          <td className="px-6 py-4"></td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 pl-10">└ {branch.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.owners}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.reports}</td>
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
        )}

        {activeTab === 'revenue' && (
          <div className="space-y-6">
            {/* Date Range Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            {/* Revenue Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue by Lab */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Revenue by Lab</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={barChartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Monthly Fee" fill="#8884d8" />
                      <Bar dataKey="Report Income" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Revenue Over Time */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Revenue Over Time</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={lineChartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Monthly Fee" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Report Income" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="Total Revenue" stroke="#ff7300" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
            {/* Revenue Details */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Revenue Details</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-300/20 border-green-300">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Fee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Income</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {barChartData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item["Monthly Fee"]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item["Report Income"]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item["Total Revenue"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            {/* Payment Status Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700">Payment Status</label>
                <select
                  id="paymentStatus"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={paymentStatusFilter}
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                >
                  {paymentStatusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">Payment Date</label>
                <input
                  type="text"
                  id="paymentDate"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="YYYY-MM-DD"
                  value={paymentDateSearch}
                  onChange={(e) => setPaymentDateSearch(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="labName" className="block text-sm font-medium text-gray-700">Lab Name</label>
                <input
                  type="text"
                  id="labName"
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Search by lab name"
                  value={labNameSearch}
                  onChange={(e) => setLabNameSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Payment History Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Payment History</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-300/20 border-green-300">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Fee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Income</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getFilteredPaymentHistory().map((payment, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.labName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.month}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.monthlyFee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.reportIncome}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.revenue}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                              payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;