import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

// Existing data
const financialData = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 7000 },
  { name: "Mar", revenue: 8000 },
  { name: "Apr", revenue: 6000 },
  { name: "May", revenue: 9000 },
];

const testVolumeData = [
  { name: "Week 1", reports: 120 },
  { name: "Week 2", reports: 150 },
  { name: "Week 3", reports: 180 },
  { name: "Week 4", reports: 130 },
];

const turnaroundData = [
  { name: "Jan", time: 2.5 },
  { name: "Feb", time: 2.0 },
  { name: "Mar", time: 2.8 },
  { name: "Apr", time: 2.3 },
  { name: "May", time: 1.9 },
];

// New daily revenue data
const dailyRevenueData = [
  { day: "1", revenue: 200 },
  { day: "2", revenue: 180 },
  { day: "3", revenue: 220 },
  { day: "4", revenue: 210 },
  { day: "5", revenue: 230 },
  { day: "6", revenue: 240 },
  { day: "7", revenue: 250 },
  { day: "8", revenue: 190 },
  { day: "9", revenue: 210 },
  { day: "10", revenue: 220 },
];

// New weekly revenue data
const weeklyRevenueData = [
  { week: "Week 1", revenue: 1200 },
  { week: "Week 2", revenue: 1500 },
  { week: "Week 3", revenue: 1800 },
  { week: "Week 4", revenue: 1300 },
];

// New monthly report data
const monthlyReportData = [
  { name: "Jan", reports: 25 },
  { name: "Feb", reports: 30 },
  { name: "Mar", reports: 28 },
  { name: "Apr", reports: 35 },
  { name: "May", reports: 40 },
];

const dailyReportData = [
  { day: "1", reports: 5 },
  { day: "2", reports: 4 },
  { day: "3", reports: 6 },
  { day: "4", reports: 7 },
  { day: "5", reports: 5 },
  { day: "6", reports: 6 },
  { day: "7", reports: 4 },
  { day: "8", reports: 5 },
  { day: "9", reports: 6 },
  { day: "10", reports: 5 },
];

// New patient data for days, weeks, and months
const dailyPatientsData = [
  { day: "1", patients: 10 },
  { day: "2", patients: 12 },
  { day: "3", patients: 14 },
  { day: "4", patients: 13 },
  { day: "5", patients: 15 },
  { day: "6", patients: 16 },
  { day: "7", patients: 18 },
  { day: "8", patients: 12 },
  { day: "9", patients: 14 },
  { day: "10", patients: 13 },
];

const weeklyPatientsData = [
  { week: "Week 1", patients: 60 },
  { week: "Week 2", patients: 70 },
  { week: "Week 3", patients: 80 },
  { week: "Week 4", patients: 75 },
];

const monthlyPatientsData = [
  { name: "Jan", patients: 200 },
  { name: "Feb", patients: 220 },
  { name: "Mar", patients: 250 },
  { name: "Apr", patients: 210 },
  { name: "May", patients: 240 },
];

const ReportingCenter = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📊 Reporting Center</h1>
        <p className="text-gray-600">View and export lab performance reports</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4 print:grid-cols-3 print:gap-2">
        {/* Financial Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">💰 Financial Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Test Volume Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">🧪 Test Volume Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={testVolumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reports" fill="#2C7A7B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Turnaround Time Analysis */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">⏳ Turnaround Time Analysis</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={turnaroundData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="time" stroke="#D53F8C" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Revenue Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Daily Revenue Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dailyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#F6A500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Weekly Revenue Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#F6A500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Daily Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dailyReportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reports" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Monthly Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyReportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reports" fill="#7B3D3D" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Patients Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Daily Patients Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dailyPatientsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="patients" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Patients Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Weekly Patients Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyPatientsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="patients" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Patients Report */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 Monthly Patients Report</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyPatientsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="patients" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportingCenter;
