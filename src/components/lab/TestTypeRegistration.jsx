import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FaFile, FaMoneyBill } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";

const TestTypeRegistration = ({ setIsNewTestTypeModalOpen }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
      <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
        <h2 className="text-2xl font-bold mb-7 text-green-800 text-center">
          Test Type Registration
        </h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="w-full mx-auto">
              <span className="block mb-2 text-sm font-medium text-gray-900 ">Test Name</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <FaFile className="text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 " placeholder="Test Name" required />
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
          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
            <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
              onClick={() => handleAddPatientClick()}>
              <span className="mr-1"></span> SAVE
            </button>
            <button className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48" onClick={() => setIsNewTestTypeModalOpen(false)}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestTypeRegistration;
