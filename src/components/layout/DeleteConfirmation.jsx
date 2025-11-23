import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FaFile, FaMoneyBill } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";

const DeleteConfirmation = ({ setIsDeleteConfirmationModalOpen }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
      <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
        <h2 className="text-2xl font-bold mb-7 text-red-800 text-center">
          Delete Confirmation
        </h2>
        <form>
          <div className="grid gap-6 mb-3">
            <div className="w-full mx-auto flex justify-center">
              <MdDangerous className="text-red-400 text-5xl" />
            </div>
            <div className="w-full mx-auto flex justify-center text-center">
              <span className="block mb-2 text-sm font-medium text-gray-900">Do you really want to delete these records? <br />This process cannot be undone.</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
            // onClick={() => handleAddPatientClick()}
            >
              <span className="mr-1"></span> CONFIRM DELETE
            </button>
            <button className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48"
              onClick={() => setIsDeleteConfirmationModalOpen(false)}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
