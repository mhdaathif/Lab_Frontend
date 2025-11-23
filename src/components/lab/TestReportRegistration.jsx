import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import PatientSelection from "./PatientSelection";
import { FaCalendar, FaGlobe, FaIdBadge, FaLifeRing, FaMale, FaPhone, FaUser } from "react-icons/fa";
import { BsCalendarDate, BsCalendarDateFill, BsCashCoin } from "react-icons/bs";
import { MdCloudUpload } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { PiTestTubeFill } from "react-icons/pi";

const TestReportRegistration = ({ setIsNewReportModalOpen, setIsNewTestTypeModalOpen }) => {

  const [isAddingReport, setIsAddingReport] = useState(false);

  const [isSelectPatientModalOpen, setIsSelectPatientModalOpen] = useState(false);

  const handleNewTestTypeClick = () => {
    setIsNewTestTypeModalOpen(true);
  };

  // const handleAddPatientClick = () => {
  //   setIsAddPatientModalOpen(true);
  // };

  const handleSelectPatientClick = () => {
    setIsSelectPatientModalOpen(true);
  };


  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
        <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
          <h2 className="text-2xl font-bold mb-7 text-green-800 text-center">
            Report Registration
          </h2>
          <div>
            <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-2">
              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Patient ID</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="PAT_0013001" required readOnly />
                </div>
              </div>
              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Select Patient</span>
                <div className="relative">
                  <button
                    onClick={() => handleSelectPatientClick()}
                    className="w-1/2 p-2 bg-green-500 text-white rounded hover:bg-green-600"> Select Patient</button>
                </div>
              </div>

              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="John" required readOnly />
                </div>
              </div>
              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Mobile</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <FaPhone className="text-gray-500" />
                  </div>
                  <input type="text" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                </div>
              </div>
              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Age</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <BsCalendarDateFill className="text-gray-500" />
                  </div>
                  <input type="number" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required readOnly />
                </div>
              </div>

              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Gender</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <FaMale className="text-gray-500" />
                  </div>
                  <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Male" required readOnly />
                </div>
              </div>
            </div>

            <div className="w-full mx-auto -mt-4">
              <span className="block mb-2 text-sm font-medium text-gray-900 ">Address</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex ps-3.5 pointer-events-none">
                  <FaGlobe className="text-gray-500 text-start mt-4" />
                </div>
                <textarea rows="2" className="block p-2.5 ps-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="Address here..."></textarea>
              </div>
            </div>

            <div className="grid gap-x-6 gap-y-2 my-6 md:grid-cols-2">
              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Report ID</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <FaIdBadge className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="RPT_0013001" required readOnly />
                </div>
              </div>

              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Add New Test Type</span>
                <div className="relative">
                  <button
                    onClick={() => handleNewTestTypeClick()}
                    className="w-1/2 p-2 bg-green-500 text-white rounded hover:bg-green-600">Add Test Type</button>
                </div>
              </div>

              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Test Type</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <PiTestTubeFill className="text-gray-500" />
                  </div>
                  <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5">
                    <option defaultValue={true}>Choose a Test Type</option>
                    <option>BCD</option>
                    <option>ACF</option>
                    <option>FCI</option>
                  </select>
                </div>
              </div>


              <div className="w-full mx-auto">
                <span className="block mb-2 text-sm font-medium text-gray-900 ">Price</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <BsCashCoin className="text-gray-500" />
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="######" required />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <MdCloudUpload className="text-gray-500 w-12 h-12" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PDF only Allowed (MAX. 2MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
              <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
                // onClick={() => handleAddPatientClick()}
                >
                <span className="mr-1"></span> SAVE
              </button>
              <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
                // onClick={() => handleAddPatientClick()}
                >
                <span className="mr-1"></span> SAVE & SEND
              </button>
              <button className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48" onClick={() => setIsNewReportModalOpen(false)}
              >
                CANCEL
              </button>
            </div>
          </div>

        </div>
      </div>

      {isSelectPatientModalOpen && (
        <PatientSelection setIsSelectPatientModalOpen={setIsSelectPatientModalOpen} />
      )}

    </div>
  );
};

export default TestReportRegistration;
