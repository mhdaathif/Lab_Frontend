import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { Eye } from "lucide-react";

const initialReports = [
  {
    id: "REP001",
    date: "2024-02-18",
    testType: "Blood Test",
    lab: { name: "MediLab", branch: "Downtown", contact: "555-1234", email: "medilab@example.com" },
    price: 150.0,
    pdfUrl: "/reports/REP001.pdf",
  },
  {
    id: "REP002",
    date: "2024-02-15",
    testType: "X-Ray",
    lab: { name: "MediLab", branch: "Downtown", contact: "555-1234", email: "medilab@example.com" },
    price: 250.0,
    pdfUrl: "/reports/REP002.pdf",
  },
];

const PatientReportpagePage = () => {
  const [searchId, setSearchId] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample Patient Details (Replace this with actual data from API)
  const patientDetails = {
    id: "PAT001",
    name: "John Doe",
    age: 35,
    contact: "555-5678",
    address: "123 Main St, Downtown",
  };

  // Filter data based on search inputs
  const filteredData = useMemo(() => {
    return initialReports.filter(
      (report) =>
        (!searchId || report.id.toLowerCase().includes(searchId.toLowerCase())) &&
        (!searchDate || report.date === searchDate)
    );
  }, [searchId, searchDate]);

  const columns = useMemo(
    () => [
      { Header: "RPT ID", accessor: "id" },
      { Header: "Date", accessor: "date" },
      {
        Header: "Lab",
        accessor: "lab",
        Cell: ({ value }) => (
          <div>
            {value.name}, {value.branch} <br />
            <span className="text-xs text-gray-500">📞 {value.contact} | ✉ {value.email}</span>
          </div>
        ),
      },
      { Header: "Test Type", accessor: "testType" },
      {
        Header: "Price",
        accessor: "price",
        Cell: ({ value }) => `$${value.toFixed(2)}`,
      },
      {
        Header: "Actions",
        accessor: "pdfUrl",
        Cell: ({ value }) => (
          <button
            onClick={() => window.open(value, "_blank")}
            className="flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Eye className="h-4 w-4 mr-1" />
            View PDF
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable({ columns, data: filteredData, initialState: { pageSize: 5 } }, usePagination);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">

    <h1 className="text-4xl font-semibold mb-1">Reports Details</h1>

      {/* View Patient Details Button */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
        >
          Profile
        </button>
      </div>

      {/* Search Section */}
      <div className="mb-4 p-4 grid rounded-lg grid-cols-1 md:grid-cols-2 gap-4 shadow-md  bg-blue-50 border border-blue-300 ">
        <div className="space-y-2">
          <label className=" block text-sm font-medium text-gray-700">Search by Report ID</label>
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Report ID..."
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Search by Date</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full bg-white border border-blue-300 rounded-lg shadow-md">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-200 text-blue-700 uppercase text-sm">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="py-3 px-2 text-center">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-gray-700 text-sm">
            {page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-blue-50">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="py-3 px-4 text-center">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          ◀ Previous
        </button>
        <span className="text-blue-700 font-semibold">
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>

      {/* Patient Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Patient Details</h2>
            <p><b>ID:</b> {patientDetails.id}</p>
            <p><b>Name:</b> {patientDetails.name}</p>
            <p><b>Age:</b> {patientDetails.age}</p>
            <p><b>Contact:</b> {patientDetails.contact}</p>
            <p><b>Address:</b> {patientDetails.address}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientReportpagePage;
