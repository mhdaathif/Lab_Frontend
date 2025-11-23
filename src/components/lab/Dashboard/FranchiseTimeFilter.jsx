import React, { useState, useMemo } from 'react';
import { 
    FileText, 
    DollarSign, 
    Users, 
    UserPlus 
} from 'lucide-react';

// Sample data - replace with your actual franchise data
const initialData = [
  { id: 1, name: 'Franchise A', revenue: 50000, date: new Date('2024-02-15'), totalReport: 50 , totalPatients: 250, newPatients: 35 },
  { id: 2, name: 'Franchise B', revenue: 75000, date: new Date('2024-03-01'), totalReport: 550 , totalPatients: 320, newPatients: 45 },
  { id: 3, name: 'Franchise C', revenue: 60000, date: new Date('2024-02-28'), totalReport: 100, totalPatients: 280, newPatients: 40 },
  { id: 4, name: 'Franchise D', revenue: 90000, date: new Date('2024-01-15'), totalReport: 60, totalPatients: 400, newPatients: 60 },
  { id: 5, name: 'Franchise E', revenue: 40000, date: new Date('2024-03-05'), totalReport: 40, totalPatients: 200, newPatients: 25 },
];

const FranchiseTimeFilter = () => {
  const [timeFilter, setTimeFilter] = useState('Last 30 days');
  const [printMode, setPrintMode] = useState(false);

  // Updated time filter options
  const timeFilters = [
    "Last day",
    "Last 7 days",
    "Last 30 days",
    "Last month",
    "Last year",
    "Last 12 months",
    "Last five years",
    "Max",
  ];

  // Filter data based on selected time period
  const filteredData = useMemo(() => {
    const now = new Date();
    
    // Helper function to clone date without modifying original
    const cloneDate = (date) => new Date(date.getTime());
    
    // Helper to reset time to midnight
    const resetTime = (date) => {
      const clonedDate = cloneDate(date);
      clonedDate.setHours(0, 0, 0, 0);
      return clonedDate;
    };

    const filterMap = {
      'Last day': () => {
        const yesterday = resetTime(cloneDate(now));
        yesterday.setDate(now.getDate() - 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= yesterday;
        });
      },
      'Last 7 days': () => {
        const sevenDaysAgo = resetTime(cloneDate(now));
        sevenDaysAgo.setDate(now.getDate() - 7);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= sevenDaysAgo;
        });
      },
      'Last 30 days': () => {
        const thirtyDaysAgo = resetTime(cloneDate(now));
        thirtyDaysAgo.setDate(now.getDate() - 30);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= thirtyDaysAgo;
        });
      },
      'Last month': () => {
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= lastMonth && itemDate < thisMonthStart;
        });
      },
      'Last year': () => {
        const lastYear = new Date(now.getFullYear() - 1, 0, 1);
        const thisYearStart = new Date(now.getFullYear(), 0, 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= lastYear && itemDate < thisYearStart;
        });
      },
      'Last 12 months': () => {
        const last12Months = new Date(now.getFullYear(), now.getMonth() - 12, 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= last12Months;
        });
      },
      'Last five years': () => {
        const last5Years = new Date(now.getFullYear() - 5, now.getMonth(), 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate >= last5Years;
        });
      },
      'Company Inception to Last year': () => {
        const lastYearStart = new Date(now.getFullYear() - 1, 0, 1);
        return initialData.filter(item => {
          const itemDate = resetTime(cloneDate(item.date));
          return itemDate < lastYearStart;
        });
      },
      'Max': () => {
        return initialData; // No filter, returns all data
      }
    };

    // Make sure to handle case sensitivity in filter names
    const normalizedFilter = timeFilter.charAt(0).toUpperCase() + timeFilter.slice(1).toLowerCase();
    
    // Find the actual key in the filterMap that matches our normalized filter
    const filterKey = Object.keys(filterMap).find(key => 
      key.toLowerCase() === timeFilter.toLowerCase()
    );
    
    return filterKey ? filterMap[filterKey]() : initialData;
  }, [timeFilter]);

  // Calculate aggregated metrics
  const aggregatedMetrics = useMemo(() => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
    const totalPatients = filteredData.reduce((sum, item) => sum + item.totalPatients, 0);
    const totalNewPatients = filteredData.reduce((sum, item) => sum + item.newPatients, 0);
    const totalReports = filteredData.reduce((sum, item) => sum + item.totalReport, 0);
    const averageRevenuePerFranchise = filteredData.length ? totalRevenue / filteredData.length : 0;
    const averagePatientsPerFranchise = filteredData.length ? totalPatients / filteredData.length : 0;

    return {
      totalRevenue,
      totalPatients,
      totalNewPatients,
      totalReports,
      averageRevenuePerFranchise,
      averagePatientsPerFranchise,
    };
  }, [filteredData]);

  // Print functionality
  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 100);
  };

  // Export to CSV functionality
  const handleExportCSV = () => {
    const headers = ['ID', 'Franchise Name', 'Revenue', 'Date', 'Total Patients', 'New Patients', 'Total Report'];
    const csvData = [
      headers,
      ...filteredData.map(franchise => [
        franchise.id,
        franchise.name,
        franchise.revenue,
        franchise.date.toLocaleDateString(),
        franchise.totalPatients,
        franchise.newPatients,
        franchise.totalReport
      ])
    ];

    const csvContent = csvData.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Franchise_Report_${timeFilter}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={` w-full ${printMode ? 'print:bg-white print:m-0 print:p-4' : ''}`}>
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">Franchises Filter</h1>
    </div>
      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        {/* Time Filter Dropdown */}
        <div className="relative w-1/2 mr-4">
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="w-full sm:w-52 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {timeFilters.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Export Buttons */}
        <div className="flex space-x-2 print:hidden">
          <button
            onClick={handlePrint}
            className="px-4 py-2 border rounded-md hover:bg-gray-200"
          >
            Print
          </button>
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 border rounded-md hover:bg-gray-200"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Aggregated Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-4 print:grid-cols-3 print:gap-2">
        {/* Total Reports Card */}
        <div className="bg-teal-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <FileText className="text-teal-600 w-8 h-8" />
          </div>
          <div className="text-sm text-gray-600">Total Reports</div>
          <div className="text-2xl font-bold text-teal-800">
            {aggregatedMetrics.totalReports.toLocaleString()}
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-emerald-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <DollarSign className="text-emerald-600 w-8 h-8" />
          </div>
          <div className="text-sm text-gray-600">Total Revenue</div>
          <div className="text-2xl font-bold text-emerald-800">
            ${aggregatedMetrics.totalRevenue.toLocaleString()}
          </div>
        </div>

        {/* Total Patients Card */}
        <div className="bg-indigo-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <Users className="text-indigo-600 w-8 h-8" />
          </div>
          <div className="text-sm text-gray-600">Total Patients</div>
          <div className="text-2xl font-bold text-indigo-800">
            {aggregatedMetrics.totalPatients.toLocaleString()}
          </div>
        </div>

        {/* New Patients Card */}
        <div className="bg-purple-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-2">
            <UserPlus className="text-purple-600 w-8 h-8" />
          </div>
          <div className="text-sm text-gray-600">New Patients</div>
          <div className="text-2xl font-bold text-purple-800">
            {aggregatedMetrics.totalNewPatients.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Franchise Table */}
      <div className="py-2 bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200 shadow-md">
        <thead className="bg-green-300/20 border-green-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Franchise Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Report</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Patients</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Patients</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((franchise) => (
            <tr key={franchise.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.totalReport.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${franchise.revenue.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.date.toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.totalPatients.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{franchise.newPatients.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* No Data Message */}
      {filteredData.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No franchises found for the selected time period.
        </div>
      )}
      </div>

    </div>
  );
};

export default FranchiseTimeFilter;