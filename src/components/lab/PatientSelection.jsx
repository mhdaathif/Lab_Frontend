import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FaFile, FaPhone, FaUser } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const PatientSelection = ({ setIsSelectPatientModalOpen }) => {

  const reportData = [
    {
      id: "1",
      patientId: "PST-001",
      name: "John Doe",
      mobile: "123-456-7890"
    },
    {
      id: "2",
      patientId: "PST-002",
      name: "Jane Smith",
      mobile: "987-654-3210"
    },
    {
      id: "3",
      patientId: "PST-003",
      name: "Jane Smith",
      mobile: "987-654-3210"
    },
    {
      id: "4",
      patientId: "PST-004",
      name: "Jane Smith",
      mobile: "987-654-3210"
    },
    {
      id: "5",
      patientId: "PST-005",
      name: "Jane Smith",
      mobile: "987-654-3210"
    }
  ];

  const [reports, setReports] = useState(reportData);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
      <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
        <h2 className="text-2xl font-bold mb-7 text-green-800 text-center">
          Select Patient
        </h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Patient Name</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Patient Name" required />
              </div>
            </div>

            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Mobile</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaPhone className="text-gray-500" />
                </div>
                <input type="tel" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
              </div>
            </div>
          </div>
        </form>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Patient ID
                </div>
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-500">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                    <input
                    type="radio"
                    name="selectedPatient"
                    // checked={selectedPatient === report.id}
                    // onChange={() => setSelectedPatient(report.id)}
                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                    </div>
                  </td>
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-sm text-gray-500">
                  {report.id}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="text-sm text-gray-900 hover:underline">
                    {report.patientId}
                  </div>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.name}</div>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{report.mobile}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
          <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
          // onClick={() => handleAddPatientClick()}
          >
            <span className="mr-1"></span> SELECT
          </button>
          <button className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48" onClick={() => setIsSelectPatientModalOpen(false)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSelection;
