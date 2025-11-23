import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg border rounded">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            LabTest
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {/* <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link> */}
            <Link to="/PatientReportTable" className="text-white hover:text-gray-300">PatientReport</Link>
            <Link to="/PatientReportTable/PatientRegistration" className="text-white hover:text-gray-300">AddNewReport</Link>
            <Link to="/PatientReportTable/ReportRegistration" className="text-white hover:text-gray-300">AddNewReports</Link>
            <Link to="/" className="text-white hover:text-gray-300">SignPage</Link>
            <Link to="/TestTypeList" className="text-white hover:text-gray-300">SignPage</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-2">
          <Link to="/dashboard" className="block text-white">Dashboard</Link>
          <Link to="/patients" className="block text-white">Patients</Link>
          <Link to="/tests" className="block text-white">Tests</Link>
          <Link to="/reports" className="block text-white">Reports</Link>
          <Link to="/settings" className="block text-white">Settings</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
