import React, { useState, useEffect } from "react";
import { TrendingUp, Users, FileText, DollarSign, Plus, X, Sliders, RefreshCw, MapPin, Eye, EyeOff, Filter } from 'lucide-react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { format, subDays, subMonths, subYears } from "date-fns";

// Function to calculate revenue dynamically based on reports and patients
const calculateRevenue = (reports, patients) => {
    const revenuePerReport = 150; // Example revenue per report
    const revenuePerPatient = 50; // Example revenue per patient
    return reports * revenuePerReport + patients * revenuePerPatient;
};

// Initial data for growth statistics with branch field added
const initialData = [
    { date: "2025-03-09", branch: "Paris", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2025-03-08", branch: "Paris", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2025-03-07", branch: "Lyon", reports: 500, patients: 1500, revenue: calculateRevenue(500, 100) },
    { date: "2025-03-01", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 100) },
    { date: "2025-02-11", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2025-02-12", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2025-02-13", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-02-14", branch: "Paris", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2025-02-15", branch: "Lyon", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2025-02-16", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-02-17", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2024-02-07", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2024-02-19", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2023-11-08", branch: "lla", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2019-03-07", branch: "Paris", reports: 500, patients: 1500, revenue: calculateRevenue(500, 100) },
    { date: "2020-02-11", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2024-10-12", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2022-02-13", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2022-02-14", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2023-02-15", branch: "Lyon", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2023-02-16", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-01-17", branch: "Paris", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2024-03-07", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2024-01-19", branch: "lla", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-02-18", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2025-02-19", branch: "France", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-02-20", branch: "France", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2025-02-21", branch: "France", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
    { date: "2025-02-22", branch: "iiicccbranh kuliyapitiya", reports: 900, patients: 2800, revenue: calculateRevenue(900, 2800) },
    { date: "2025-02-23", branch: "iiicccbranh kuliyapitiya", reports: 500, patients: 1500, revenue: calculateRevenue(500, 1500) },
    { date: "2024-02-24", branch: "iiicccbranh kuliyapitiya", reports: 800, patients: 2500, revenue: calculateRevenue(800, 2500) },
];

// Time filters for selection
const timeFilters = [
    "Last day",
    "Last 7 days",
    "Last 30 days",
    "Last month",
    "Last year",
    "Last 12 months",
    "Last five years",
    "Company Inception to Last year",
    "Max",
];

// Available chart types
const chartTypes = [
    { id: "bar", label: "Bar Chart" },
    { id: "line", label: "Line Chart" },
];

// Available metrics to chart
const metricTypes = [
    { id: "reports", label: "Reports", color: "green" },
    { id: "patients", label: "Patients", color: "brown" },
    { id: "revenue", label: "Revenue", color: "blue" }
];

// Color palette definitions
const colorPalettes = {
    blue: [
        ["#B3E5FC", "#81D4FA"],
        ["#81D4FA", "#4FC3F7"],
        ["#4FC3F7", "#29B6F6"],
        ["#29B6F6", "#03A9F4"],
        ["#03A9F4", "#039BE5"],
        ["#039BE5", "#0288D1"],
        ["#0288D1", "#0277BD"],
        ["#0277BD", "#01579B"],
        ["#01579B", "#004C8C"],
        ["#004C8C", "#003C7E"],
        ["#003C7E", "#002F6C"],
        ["#002F6C", "#002654"],
        ["#002654", "#001C3A"],
        ["#001C3A", "#000B1D"],
    ],
    brown: [
        ["#F8E0C1", "#E8C69D"],
        ["#E8C69D", "#E2B383"], // Added intermediate step
        ["#E2B383", "#DEB887"],
        ["#DEB887", "#D3A87C"],
        ["#D3A87C", "#C69564"],
        ["#C69564", "#C1845A"], // Added intermediate step
        ["#C1845A", "#B78451"],
        ["#B78451", "#A47145"],
        ["#A47145", "#9B5C3D"], // Added intermediate step
        ["#9B5C3D", "#935F36"],
        ["#935F36", "#804E2A"], // Added intermediate step
        ["#7A4524", "#693D24"],
        ["#693D24", "#512E1C"],
        ["#512E1C", "#3B1D0B"],
    ],

    green: [
        ["#90EE90", "#7BE87B"],
        ["#7BE87B", "#66E066"],
        ["#66E066", "#50D450"],
        ["#50D450", "#3DCA3D"],
        ["#3DCA3D", "#2AC12A"],
        ["#2AC12A", "#1FB21F"],
        ["#1FB21F", "#17A317"],
        ["#17A317", "#139313"],
        ["#139313", "#0F840F"],
        ["#0F840F", "#0B750B"],
        ["#0B750B", "#086608"],
        ["#086608", "#055905"],
        ["#055905", "#034503"],
        ["#034503", "#012F01"],
    ],
};

// Branch pie chart colors
const branchColors = [
    ["#ff7e5f", "#feb47b"], // Sunset Glow  
    ["#00c6ff", "#0072ff"], // Ocean Blue  
    ["#8e2de2", "#4a00e0"], // Purple Love  
    ["#00ff7f", "#32cd32"], // Mint Green 🌿  
    ["#ff9a9e", "#fad0c4"], // Flamingo 🦩  
    ["#434343", "#000000"], // Deep Space 🚀  
    ["#1a2980", "#26d0ce"], // Aqua Marine 🌊  
    ["#ff9966", "#ff5e62"], // Peachy Coral 🍑  
    ["#e0c3fc", "#8ec5fc"], // Soft Lavender 💜  
    ["#232526", "#414345"], // Midnight City 🌃  
    ["#12c2e9", "#c471ed", "#f64f59"], // Neon Glow 🌟  
    ["#1e3c72", "#2a5298"], // Celestial Blue 🌌  
    ["#ff512f", "#dd2476"], // Warm Sunrise ☀️  
    ["#a1c4fd", "#c2e9fb"], // Dreamy Sky ☁️  
    ["#34e89e", "#0f3443"], // Emerald Waters 💎  
];

// Chart builder component
const ChartBuilder = ({ onAdd, branches }) => {
    const [chartType, setChartType] = useState("bar");
    const [metrics, setMetrics] = useState(["reports"]);
    const [title, setTitle] = useState("");
    const [selectedBranches, setSelectedBranches] = useState(["all"]);

    const handleAddChart = () => {
        if (metrics.length === 0) return;

        onAdd({
            id: Date.now().toString(),
            title: title || `${metrics.join(" & ")} ${chartType} Chart`,
            type: chartType,
            metrics: metrics,
            branches: selectedBranches
        });

        // Reset form
        setTitle("");
        setMetrics(["reports"]);
        setChartType("bar");
        setSelectedBranches(["all"]);
    };

    const toggleMetric = (metric) => {
        if (metrics.includes(metric)) {
            setMetrics(metrics.filter(m => m !== metric));
        } else {
            setMetrics([...metrics, metric]);
        }
    };

    const toggleBranch = (branch) => {
        if (branch === "all") {
            setSelectedBranches(["all"]);
            return;
        }

        // If "all" is currently selected, remove it when selecting a specific branch
        let newSelectedBranches = selectedBranches.filter(b => b !== "all");

        if (newSelectedBranches.includes(branch)) {
            newSelectedBranches = newSelectedBranches.filter(b => b !== branch);
        } else {
            newSelectedBranches.push(branch);
        }

        // If no specific branches are selected, default back to "all"
        setSelectedBranches(newSelectedBranches.length === 0 ? ["all"] : newSelectedBranches);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Sliders className="h-5 w-5 mr-2" />
                Chart Builder
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chart Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Custom Chart Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type</label>
                    <div className="flex flex-wrap gap-2">
                        {chartTypes.map(type => (
                            <button
                                key={type.id}
                                className={`px-3 py-1 text-sm rounded-full ${chartType === type.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setChartType(type.id)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Metrics</label>
                    <div className="flex flex-wrap gap-2">
                        {metricTypes.map(metric => (
                            <button
                                key={metric.id}
                                className={`px-3 py-1 text-sm rounded-full ${metrics.includes(metric.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => toggleMetric(metric.id)}
                            >
                                {metric.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branches</label>
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                        <button
                            key="all"
                            className={`px-3 py-1 text-sm rounded-full ${selectedBranches.includes("all") ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => toggleBranch("all")}
                        >
                            All Branches
                        </button>
                        {branches.map(branch => (
                            <button
                                key={branch}
                                className={`px-3 py-1 text-sm rounded-full ${selectedBranches.includes(branch) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => toggleBranch(branch)}
                            >
                                {branch}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
                    onClick={handleAddChart}
                    disabled={metrics.length === 0}
                >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Chart
                </button>
            </div>
        </div>
    );
};

// Custom tooltip that includes branch information
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-4 border rounded shadow-md">
                {label && <p className="text-gray-700 font-medium mb-2">{`Date: ${label}`}</p>}
                {payload[0]?.payload?.branch && (
                    <p className="text-gray-700">
                        <span className="font-medium">Branch:</span> {payload[0].payload.branch}
                    </p>
                )}
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }} className="mb-0">
                        <span className="font-medium">{entry.name}:</span> {entry.value.toLocaleString()}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

// Chart component
const Chart = ({ chart, data, onRemove }) => {
    const { id, title, type, metrics, branches = ["all"] } = chart;

    // Filter data by selected branches
    const filteredData = branches.includes("all")
        ? data
        : data.filter(item => branches.includes(item.branch));

    // Ensure data is sorted by date
    const sortedData = [...filteredData].sort((a, b) => new Date(a.date) - new Date(b.date));

    // For pie charts, we need to aggregate the data by branch
    const preparePieData = () => {
        const result = [];

        // Group by branch and sum metrics
        const branchMetrics = {};

        filteredData.forEach(item => {
            if (!branchMetrics[item.branch]) {
                branchMetrics[item.branch] = {};
                metrics.forEach(metric => branchMetrics[item.branch][metric] = 0);
            }

            metrics.forEach(metric => {
                branchMetrics[item.branch][metric] += item[metric];
            });
        });

        // Convert to array format
        Object.keys(branchMetrics).forEach(branch => {
            metrics.forEach(metric => {
                result.push({
                    branch,
                    metric,
                    value: branchMetrics[branch][metric],
                    name: `${branch} (${metric})`
                });
            });
        });

        return result;
    };

    const pieData = type === "pie" ? preparePieData() : [];

    const renderChart = () => {
        const height = 300;

        if (type === "bar") {
            return (
                <ResponsiveContainer width="100%" height={height}>
                    <BarChart data={sortedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        {metrics.map((metric, index) => {
                            const metricType = metricTypes.find(m => m.id === metric);
                            const colorSet = colorPalettes[metricType?.color || "blue"];
                            return (
                                <Bar key={metric} dataKey={metric} name={metric.charAt(0).toUpperCase() + metric.slice(1)}>
                                    {sortedData.map((entry, i) => (
                                        <Cell
                                            key={`cell-${id}-${metric}-${i}`}
                                            fill={`url(#${id}-${metric}-gradient-${i})`}
                                        />
                                    ))}
                                </Bar>
                            );
                        })}
                        <defs>
                            {metrics.map(metric => {
                                const metricType = metricTypes.find(m => m.id === metric);
                                const colorSet = colorPalettes[metricType?.color || "blue"];
                                return sortedData.map((entry, i) => (
                                    <linearGradient
                                        key={`${id}-${metric}-gradient-${i}`}
                                        id={`${id}-${metric}-gradient-${i}`}
                                        x1="0%" y1="0%" x2="100%" y2="100%"
                                    >
                                        <stop offset="0%" stopColor={colorSet[i % colorSet.length]?.[0] || "#8884d8"} />
                                        <stop offset="100%" stopColor={colorSet[i % colorSet.length]?.[1] || "#82ca9d"} />
                                    </linearGradient>
                                ));
                            })}
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            );
        }

        if (type === "line") {
            return (
                <ResponsiveContainer width="100%" height={height}>
                    <LineChart data={sortedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        {metrics.map((metric, index) => {
                            const metricType = metricTypes.find(m => m.id === metric);
                            const gradientId = `${id}-${metric}-line-gradient`;
                            return (
                                <Line
                                    key={metric}
                                    type="monotone"
                                    dataKey={metric}
                                    stroke={`url(#${gradientId})`}
                                    strokeWidth={2}
                                    name={metric.charAt(0).toUpperCase() + metric.slice(1)}
                                />
                            );
                        })}
                        <defs>
                            {metrics.map(metric => {
                                const metricType = metricTypes.find(m => m.id === metric);
                                const colorSet = colorPalettes[metricType?.color || "blue"];
                                return (
                                    <linearGradient
                                        key={`${id}-${metric}-line-gradient`}
                                        id={`${id}-${metric}-line-gradient`}
                                        x1="0" y1="0" x2="1" y2="0"
                                    >
                                        {colorSet.map(([start, end], i) => (
                                            <stop
                                                key={i}
                                                offset={`${(i / (colorSet.length - 1)) * 100}%`}
                                                stopColor={start}
                                            />
                                        ))}
                                    </linearGradient>
                                );
                            })}
                        </defs>
                    </LineChart>
                </ResponsiveContainer>
            );
        }

        return <div>Chart type not supported</div>;
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
                <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => onRemove(id)}
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
            {renderChart()}
            <div className="mt-2 text-sm text-gray-500">
                {branches.includes("all")
                    ? "Showing data for all branches"
                    : `Filtered to branches: ${branches.join(", ")}`}
            </div>
        </div>
    );
};

// Branch comparison component
const BranchComparison = ({ data, selectedMetric }) => {
    // Get all unique branches from the data
    const uniqueBranches = [...new Set(data.map(item => item.branch))];

    // Group data by branch and calculate totals
    const branchData = uniqueBranches.map(branch => {
        const branchItems = data.filter(item => item.branch === branch);
        const totals = {
            branch,
            reports: branchItems.reduce((sum, item) => sum + item.reports, 0),
            patients: branchItems.reduce((sum, item) => sum + item.patients, 0),
            revenue: branchItems.reduce((sum, item) => sum + item.revenue, 0),
        };
        return totals;
    });

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">All Branches Comparison</h3>

            {branchData && branchData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={branchData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="branch" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        {/* Define gradients */}
                        <defs>
                            {branchData.map((entry, index) => (
                                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={branchColors[index % branchColors.length]?.[0] || "#8884d8"} />
                                    <stop offset="100%" stopColor={branchColors[index % branchColors.length]?.[1] || "#82ca9d"} />
                                </linearGradient>
                            ))}
                        </defs>

                        {/* Bars with gradient fills */}
                        <Bar dataKey={selectedMetric} barSize={30}>
                            {branchData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-gray-500 text-center">No data available for comparison.</p>
            )}
        </div>
    );
};

// France Map Overview Component
const FranceOverview = ({ data }) => {
    // Dynamically get all unique branch names
    const branches = Array.from(new Set(data.map(item => item.branch)));

    // Aggregate data for each branch
    const branchSummary = branches.map(branch => {
        const branchData = data.filter(item => item.branch === branch);
        return {
            branch,
            totalReports: branchData.reduce((sum, item) => sum + item.reports, 0),
            totalPatients: branchData.reduce((sum, item) => sum + item.patients, 0),
            totalRevenue: branchData.reduce((sum, item) => sum + item.revenue, 0)
        };
    });

    // Calculate month-by-month metrics for each branch
    const getMonthlyData = () => {
        const monthlyData = {};

        data.forEach(item => {
            const date = new Date(item.date);
            const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;

            if (!monthlyData[monthYear]) {
                monthlyData[monthYear] = {
                    month: monthYear,
                    reports: 0,
                    patients: 0,
                    revenue: 0,
                };
                branches.forEach(branch => {
                    monthlyData[monthYear][branch] = { reports: 0, patients: 0, revenue: 0 };
                });
            }

            monthlyData[monthYear].reports += item.reports;
            monthlyData[monthYear].patients += item.patients;
            monthlyData[monthYear].revenue += item.revenue;

            // Add branch-specific data
            monthlyData[monthYear][item.branch].reports += item.reports;
            monthlyData[monthYear][item.branch].patients += item.patients;
            monthlyData[monthYear][item.branch].revenue += item.revenue;
        });

        // Convert to array and sort by date
        return Object.values(monthlyData).sort((a, b) => {
            const [aMonth, aYear] = a.month.split('/').map(Number);
            const [bMonth, bYear] = b.month.split('/').map(Number);

            if (aYear !== bYear) return aYear - bYear;
            return aMonth - bMonth;
        });
    };

    const monthlyData = getMonthlyData();

    return (
        <div className="bg-white shadow-md rounded-lg p-5 mb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Branches Overview</h3>

            {/* Displaying branch summary */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-3">
                {branchSummary.map((branch) => (
                    <div
                        key={branch.branch}
                        className="border-l-6 border border-blue-500 hover:translate-y-1 rounded-xl shadow-sm p-3 bg-gradient-to-br from-white to-blue-50 hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex items-center mb-1">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                <TrendingUp size={20} className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-lg text-blue-800">{branch.branch}</h4>
                        </div>

                        <div className="space-y">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 text-sm">Reports</span>
                                <span className="font-semibold text-gray-800 bg-blue-50 py-1 px-3 rounded-full">
                                    {branch.totalReports.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 text-sm">Patients</span>
                                <span className="font-semibold text-gray-800 bg-blue-50 py-1 px-3 rounded-full">
                                    {branch.totalPatients.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 text-sm">Revenue</span>
                                <span className="font-semibold text-green-700 bg-green-50 py-1 px-3 rounded-full">
                                    ${branch.totalRevenue.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Comparison chart for all branches */}
            <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Branches Performance</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={branchSummary}>

                        <defs>
                            {/* More visually appealing gradient for Patients */}
                            <linearGradient id="patientsGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="25%" stopColor="#817bea" stopOpacity={0.9} />
                                <stop offset="75%" stopColor="#8884d8" stopOpacity={0.6} />
                            </linearGradient>

                            {/* More visually appealing gradient for Reports */}
                            <linearGradient id="reportsGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="25%" stopColor="#44a8a8" stopOpacity={0.9} />
                                <stop offset="75%" stopColor="#4bc0c0" stopOpacity={0.6} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="branch" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#4bc0c0" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="totalPatients" name="Patients" fill="url(#patientsGradient)" />
                        <Bar yAxisId="right" dataKey="totalReports" name="Reports" fill="url(#reportsGradient)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
                {/* Total Revenue Chart */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Total Revenue</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyData}>
                            <defs>
                                <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="30%" stopColor="#7871f7" stopOpacity={0.9} />
                                    <stop offset="70%" stopColor="#8884d8" stopOpacity={0.6} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="url(#revenueGradient)" strokeWidth={3} dot={false} name="Total Revenue" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Total Reports & Patients Chart */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Total Reports & Patients</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyData}>
                            <defs>
                                <linearGradient id="reportsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="25%" stopColor="#44a8a8" stopOpacity={0.9} />
                                    <stop offset="75%" stopColor="#4bc0c0" stopOpacity={0.6} />
                                </linearGradient>
                                <linearGradient id="patientsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="20%" stopColor="#ef9d5f" stopOpacity={0.9} />
                                    <stop offset="100%" stopColor="#ffcc70" stopOpacity={0.6} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="reports" stroke="url(#reportsGradient)" strokeWidth={3} dot={false} name="Total Reports" />
                            <Line type="monotone" dataKey="patients" stroke="url(#patientsGradient)" strokeWidth={3} dot={false} name="Total Patients" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};


// Time period filter component
const TimeFilter = ({ selectedFilter, onSelectFilter }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
                <RefreshCw className="h-5 w-5 mr-2" />
                Time Period
            </h3>
            <div className="flex flex-wrap gap-2">
                {timeFilters.map(filter => (
                    <button
                        key={filter}
                        className={`px-3 py-1 text-sm rounded-full ${selectedFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => onSelectFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Branch filter component
const BranchFilter = ({ branches, selectedBranches, onToggleBranch }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Branch Filter
            </h3>
            <div className="flex items-center mb-2">
                <button
                    className={`px-3 py-1 text-sm rounded-full ${selectedBranches.includes("all") ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => onToggleBranch("all")}
                >
                    All Branches
                </button>
                <button
                    className="ml-auto px-2 py-1 text-sm text-gray-500 flex items-center"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                    {isExpanded ? "Collapse" : "Show All"}
                </button>
            </div>
            <div className={`flex flex-wrap gap-2 ${isExpanded ? '' : 'max-h-12 overflow-hidden'}`}>
                {branches.map(branch => (
                    <button
                        key={branch}
                        className={`px-3 py-1 text-sm rounded-full ${selectedBranches.includes(branch) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => onToggleBranch(branch)}
                        disabled={selectedBranches.includes("all")}
                    >
                        {branch}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Main dashboard component
const LatteGrowthDashboard = () => {
    const [data, setData] = useState(initialData);
    const [filteredData, setFilteredData] = useState(initialData);
    const [timeFilter, setTimeFilter] = useState("Last 30 days");
    const [selectedBranches, setSelectedBranches] = useState(["all"]);
    const [charts, setCharts] = useState([
        {
            id: "live-bjp-chart",
            title: "Live BJP Revenue",
            type: "line",
            metrics: ["revenue"],  // Shows real-time revenue
            branches: ["all"]
        },
        {
            id: "report-payment-chart",
            title: "Patients, Reports",
            type: "bar",
            metrics: ["patients", "reports"], // Includes all required data
            branches: ["all"]
        }
    ]);
    const [comparisonMetric, setComparisonMetric] = useState("reports", "Patients");
    const [showFilterPanel, setShowFilterPanel] = useState(false);


    // Get all unique branches from the data
    const branches = [...new Set(data.map(item => item.branch))].sort();

    // Apply time filters and branch filters
    useEffect(() => {
        let filtered = [...data];

        // Apply time filter
        const today = new Date();
        let startDate;

        switch (timeFilter) {
            case "Last day":
                startDate = subDays(today, 1);
                break;
            case "Last 7 days":
                startDate = subDays(today, 7);
                break;
            case "Last 30 days":
                startDate = subDays(today, 30);
                break;
            case "Last month":
                startDate = subMonths(today, 1);
                break;
            case "Last year":
                startDate = subYears(today, 1);
                break;
            case "Last 12 months":
                startDate = subMonths(today, 12);
                break;
            case "Last five years":
                startDate = subYears(today, 5);
                break;
            case "Company Inception to Last year":
                startDate = new Date(2000, 0, 1); // Example company inception
                today.setFullYear(today.getFullYear() - 1);
                break;
            case "Max":
                startDate = new Date(1900, 0, 1); // Far in the past
                break;
            default:
                startDate = subDays(today, 30); // Default to last 30 days
        }

        filtered = filtered.filter(item => new Date(item.date) >= startDate && new Date(item.date) <= today);

        // Apply branch filter
        if (!selectedBranches.includes("all")) {
            filtered = filtered.filter(item => selectedBranches.includes(item.branch));
        }

        setFilteredData(filtered);
    }, [data, timeFilter, selectedBranches]);

    // Handle branch filter toggle
    const handleToggleBranch = (branch) => {
        if (branch === "all") {
            setSelectedBranches(["all"]);
        } else {
            // If "all" is currently selected, deselect it
            const newBranches = selectedBranches.filter(b => b !== "all");

            // Toggle the selected branch
            if (newBranches.includes(branch)) {
                newBranches.splice(newBranches.indexOf(branch), 1);
            } else {
                newBranches.push(branch);
            }

            // If no branches are selected, select "all" branches
            setSelectedBranches(newBranches.length === 0 ? ["all"] : newBranches);
        }
    };

    // Add new chart
    const handleAddChart = (newChart) => {
        setCharts([...charts, newChart]);
    };

    // Remove chart
    const handleRemoveChart = (chartId) => {
        setCharts(charts.filter(chart => chart.id !== chartId));
    };
    const refreshData = () => {
        // Logic to refresh data (e.g., fetch new data)
        console.log("Refreshing data...");
    };



    // Calculate summary statistics
    const calculateSummary = () => {
        return {
            totalPatients: filteredData.reduce((sum, item) => sum + item.patients, 0),
            totalReports: filteredData.reduce((sum, item) => sum + item.reports, 0),
            totalRevenue: filteredData.reduce((sum, item) => sum + item.revenue, 0),
            dateRange: `${filteredData.length > 0 ? format(new Date(filteredData[0].date), 'MMM dd, yyyy') : 'N/A'} - ${filteredData.length > 0 ? format(new Date(filteredData[filteredData.length - 1].date), 'MMM dd, yyyy') : 'N/A'}`
        };
    };

    const summary = calculateSummary();

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="w-full mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Business Analytics Dashboard</h1>
                    <p className="text-gray-600">Data shown: {summary.dateRange}</p>

                    <div className="flex items-center mt-4">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center mr-2"
                            onClick={() => setShowFilterPanel(!showFilterPanel)}
                        >
                            <Filter className="h-4 w-4 mr-1" />
                            {showFilterPanel ? "Hide Filters" : "Show Filters"}
                        </button>
                        {/* Actions */}

                        <button
                            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold flex items-center"
                            onClick={refreshData} // Separate function for refreshing
                        >
                            <RefreshCw className="h-5 w-5 mr-2" />
                            Refresh Data
                        </button>
                    </div>
                </header>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {/* Reports Card */}
                    <div className="bg-white rounded-xl shadow-lg p-3 transition-all duration-300 hover:shadow-xl border-l-4 border border-blue-500 hover:translate-y-1">
                        <div className="flex items-center justify-between">
                            <div className="mt-1">
                                <p className="text-gray-500 text-sm font-medium">Total Reports</p>
                                <h3 className="text-lg font-semibold text-gray-800">{summary.totalReports.toLocaleString()}</h3>

                                <div className="h-1 w-full bg-blue-200 rounded-full mt-2">
                                    <div className="h-1 bg-blue-500 rounded-full w-3/4"></div>
                                </div>
                            </div>

                            <div className="rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-md">
                                <FileText className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Patients Card */}
                    <div className="bg-white rounded-xl shadow-lg p-3 transition-all duration-300 hover:shadow-xl border-l-4 border border-emerald-500 hover:translate-y-1">
                        <div className="flex items-center justify-between">
                            <div className="mt-1">
                                <p className="text-gray-500 text-sm font-medium">Total Patients</p>
                                <h3 className="text-lg font-semibold text-gray-800">{summary.totalPatients.toLocaleString()}</h3>

                                <div className="h-1 w-full bg-emerald-200 rounded-full mt-2">
                                    <div className="h-1 bg-emerald-500 rounded-full w-2/3"></div>
                                </div>
                            </div>

                            <div className="rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 shadow-md">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Revenue Card */}
                    <div className="bg-white rounded-xl shadow-lg p-3 transition-all duration-300 hover:shadow-xl border-l-4 border border-violet-500 hover:translate-y-1">
                        <div className="flex items-center justify-between">
                            <div className="mt-1">
                                <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                                <h3 className="text-lg font-semibold text-gray-800">${summary.totalRevenue.toLocaleString()}</h3>

                                <div className="h-1 w-full bg-violet-200 rounded-full mt-2">
                                    <div className="h-1 bg-violet-500 rounded-full w-4/5"></div>
                                </div>
                            </div>

                            <div className="rounded-full bg-gradient-to-br from-violet-400 to-violet-600 p-2 shadow-md">
                                <DollarSign className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Filters Panel */}
                {showFilterPanel && (
                    <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TimeFilter selectedFilter={timeFilter} onSelectFilter={setTimeFilter} />
                            <BranchFilter branches={branches} selectedBranches={selectedBranches} onToggleBranch={handleToggleBranch} />
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                <TrendingUp className="h-5 w-5 mr-2" />
                                Branch Comparison Metric
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {metricTypes.map(metric => (
                                    <button
                                        key={metric.id}
                                        className={`px-3 py-1 text-sm rounded-full ${comparisonMetric === metric.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                        onClick={() => setComparisonMetric(metric.id)}
                                    >
                                        {metric.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <ChartBuilder onAdd={handleAddChart} branches={branches} />
                    </div>
                )}

                {/* Charts Area */}
                <div className="mb-6">
                    {charts.map(chart => (
                        <Chart
                            key={chart.id}
                            chart={chart}
                            data={filteredData}
                            onRemove={handleRemoveChart}
                        />
                    ))}
                </div>




                {/* Branch Comparison */}
                <BranchComparison data={filteredData} selectedMetric={comparisonMetric} />

                {/* France Overview */}
                <FranceOverview data={filteredData} />
            </div>

        </div>
    );
};

export default LatteGrowthDashboard;