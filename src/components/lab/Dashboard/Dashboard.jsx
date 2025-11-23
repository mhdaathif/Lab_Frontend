function Dashboard() {
  // Mock data
  const stats = [
    { id: 1, name: 'Total Tests Today', value: '124', change: '+12%', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'bg-blue-500' },
    { id: 2, name: 'Pending Tests', value: '38', change: '-5%', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-yellow-500' },
    { id: 3, name: 'Completed Tests', value: '86', change: '+18%', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-500' },
    { id: 4, name: 'Revenue Today', value: '$2,845', change: '+8%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-purple-500' },
  ];

  const franchisePerformance = [
    { id: 1, name: 'Central Lab', tests: 42, revenue: 1250 },
    { id: 2, name: 'North Branch', tests: 35, revenue: 1050 },
    { id: 3, name: 'South Branch', tests: 28, revenue: 840 },
    { id: 4, name: 'East Branch', tests: 19, revenue: 570 },
  ];

  const recentTests = [
    { id: 1, patient: 'John Smith', test: 'Complete Blood Count', status: 'Completed', time: '10:23 AM' },
    { id: 2, patient: 'Emma Johnson', test: 'Lipid Panel', status: 'In Process', time: '11:45 AM' },
    { id: 3, patient: 'Michael Brown', test: 'Thyroid Panel', status: 'Pending', time: '12:15 PM' },
    { id: 4, patient: 'Sarah Wilson', test: 'Vitamin D Test', status: 'Completed', time: '01:30 PM' },
    { id: 5, patient: 'David Lee', test: 'Urinalysis', status: 'Pending', time: '02:45 PM' },
  ];

  return (
    <div className="w-full">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Main Dashboard</h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-500">{stat.name}</h2>
              <div className={`p-2 rounded-md ${stat.color}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className={`ml-2 text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Recent Tests */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Tests</h2>
          <div className="overflow-x-auto shadow-md">
            <table className="min-w-full divide-y divide-gray-200 shadow-md">
              <thead className="bg-green-300/20 border-green-300">
                <tr >
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTests.map((test) => (
                  <tr key={test.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{test.patient}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{test.test}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${test.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : test.status === 'In Process'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {test.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{test.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Franchise Performance */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Franchise Performance</h2>
          <div className="overflow-x-auto shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-300/20 border-green-300">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Franchise</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tests Today</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                </tr>
              </thead>
              <tbody >
                {franchisePerformance.map((franchise) => (
                  <tr key={franchise.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{franchise.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{franchise.tests}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">${franchise.revenue}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: `${(franchise.tests / 42) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;