import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FaBuilding, FaCalendar, FaEnvelope, FaGlobe, FaIdBadge, FaMale, FaMobile, FaPhone, FaUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import LabSelection from "./LabSelection";
import { HiBuildingOffice2 } from "react-icons/hi2";
import BranchSelection from "./BranchSelection";

const BranchUpdate = ({ setIsUpdateBranchModalOpen }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
      <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
        <h2 className="text-2xl font-bold mb-7 text-green-800 text-center">
          BRANCH DETAILS UPDATE
        </h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Lab ID (Read Only)</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaIdBadge className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="LAB_0013001" disabled />
              </div>
            </div>

            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Lab Name (Read Only)</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaBuilding className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Lab Name" disabled />
              </div>
            </div>

            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Registered Date (Read Only)</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaCalendar className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Reg Date" disabled />
              </div>
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2 border-t pt-3 border-gray-300">
           
            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Branch Name</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <HiBuildingOffice2 className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Branch" required />
              </div>
            </div>

            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Mobile</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaPhone className="text-gray-500" />
                </div>
                <input type="text" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="###-###-####" required />
              </div>
            </div>

            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900">Email</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaEnvelope className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="example@gmail.com" required />
              </div>
            </div>

          </div>

          <div className="w-full mx-auto">
            <span className="block mb-2 text-sm font-medium text-gray-900">Address</span>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex ps-3.5 pointer-events-none">
                <FaGlobe className="text-gray-500 text-start mt-4" />
              </div>
              <textarea rows="4" className="block p-2.5 ps-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="Address here..."></textarea>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
            <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
            // onClick={() => handleAddPatientClick()}
            >
              <span className="mr-1"></span> SAVE
            </button>
            <button className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48" onClick={() => setIsUpdateBranchModalOpen(false)}
            >
              CANCEL
            </button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default BranchUpdate;
