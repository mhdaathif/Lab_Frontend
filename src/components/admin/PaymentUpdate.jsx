import React, {useState} from "react";
import {FaBuilding, FaCalendar, FaIdBadge} from "react-icons/fa";
import {HiBuildingOffice2} from "react-icons/hi2";
import {MdOutlineSubscriptions} from "react-icons/md";
import {IoMdPricetags} from "react-icons/io";
import BranchSelection from "./BranchSelection.jsx";

export const PaymentUpdate = ({setIsUpdatePaymentModalOpen}) => {
    const [isSelectBranchModalOpen, setIsSelectBranchModalOpen] = useState(false);

    const handleSelectBranchClick = () => {
        setIsSelectBranchModalOpen(true);
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 border overflow-y-scroll">
            <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-2xl bg rounded-lg">
                <h2 className="text-2xl font-bold mb-7 text-green-800 text-center">
                    UPDATE PAYMENT
                </h2>
                {/* <form> */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Lab ID</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaIdBadge className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="BNCH_0013001" disabled/>
                        </div>
                    </div>
                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Select Branch</span>
                        <div className="relative">
                            <button
                                onClick={() => handleSelectBranchClick()}
                                className="w-1/2 p-2 bg-green-500 text-white rounded hover:bg-green-600"> Select Branch
                            </button>
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Lab Name</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaBuilding className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="Lab Name" disabled/>
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Branch ID</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaIdBadge className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="BNCH_0013001" disabled/>
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Branch Name</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <HiBuildingOffice2 className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="Branch Name" disabled/>
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Subscription Type</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <MdOutlineSubscriptions className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="Monthly" disabled/>
                        </div>
                    </div>

                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2 border-t pt-3 border-gray-300">

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Amount</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <IoMdPricetags className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="Amount" required/>
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Period</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <MdOutlineSubscriptions className="text-gray-500"/>
                            </div>
                            <select id="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5">
                                <option defaultValue={true}>Choose a Period</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                    </div>


                    {/*<div className="w-full mx-auto">*/}
                    {/*    <span className="block mb-2 text-sm font-medium text-gray-900">Status</span>*/}
                    {/*    <div className="relative">*/}
                    {/*        <div*/}
                    {/*            className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">*/}
                    {/*            <PiContactlessPaymentBold className="text-gray-500"/>*/}
                    {/*        </div>*/}
                    {/*        <select id="status"*/}
                    {/*                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5">*/}
                    {/*            <option defaultValue={true}>Choose a Status</option>*/}
                    {/*            <option>Paid</option>*/}
                    {/*            <option>Approved</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Last Renewal</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <FaCalendar className="text-gray-500"/>
                            </div>
                            <input type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "
                                   placeholder="01-01-2025" required/>
                        </div>
                    </div>

                    {/*<div className="w-full mx-auto">*/}
                    {/*    <span className="block mb-2 text-sm font-medium text-gray-900">Last Renewal</span>*/}
                    {/*    <div className="relative">*/}
                    {/*        <div*/}
                    {/*            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
                    {/*            <FaCalendar className="text-gray-500"/>*/}
                    {/*        </div>*/}
                    {/*        <input type="date"*/}
                    {/*               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="w-full mx-auto">
                        <span className="block mb-2 text-sm font-medium text-gray-900">Expiry</span>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaCalendar className="text-gray-500"/>
                            </div>
                            <input type="date"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full pl-10 p-2.5"/>
                        </div>
                    </div>

                    {/*    <div className="w-full mx-auto">*/}
                    {/*        <span className="block mb-2 text-sm font-medium text-gray-900">User Role</span>*/}
                    {/*        <div className="relative">*/}
                    {/*            <div*/}
                    {/*                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">*/}
                    {/*                <FaMale className="text-gray-500"/>*/}
                    {/*            </div>*/}
                    {/*            <select id="gender"*/}
                    {/*                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5">*/}
                    {/*                <option defaultValue={true}>Choose a Role</option>*/}
                    {/*                <option>Lab User</option>*/}
                    {/*                <option>Lab Admin</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="w-full mx-auto">*/}
                    {/*        <span className="block mb-2 text-sm font-medium text-gray-900">Password</span>*/}
                    {/*        <div className="relative">*/}
                    {/*            <div*/}
                    {/*                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">*/}
                    {/*                <FaLock className="text-gray-500"/>*/}
                    {/*            </div>*/}
                    {/*            <input type="text"*/}
                    {/*                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "*/}
                    {/*                   placeholder="******" required/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="w-full mx-auto">*/}
                    {/*        <span className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</span>*/}
                    {/*        <div className="relative">*/}
                    {/*            <div*/}
                    {/*                className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">*/}
                    {/*                <FaLock className="text-gray-500"/>*/}
                    {/*            </div>*/}
                    {/*            <input type="text"*/}
                    {/*                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 block w-full ps-10 p-2.5 "*/}
                    {/*                   placeholder="******" required/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                    {/*<div className="w-full mx-auto">*/}
                    {/*    <span className="block mb-2 text-sm font-medium text-gray-900">Address</span>*/}
                    {/*    <div className="relative">*/}
                    {/*        <div className="absolute inset-y-0 start-0 top-0 flex ps-3.5 pointer-events-none">*/}
                    {/*            <FaGlobe className="text-gray-500 text-start mt-4"/>*/}
                    {/*        </div>*/}
                    {/*        <textarea rows="4"*/}
                    {/*                  className="block p-2.5 ps-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"*/}
                    {/*                  placeholder="Address here..."></textarea>*/}
                    {/*    </div>*/}
                </div>

                <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-6">
                    <button
                        className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-md text-sm font-bold flex items-center justify-center w-48"
                        // onClick={() => handleAddPatientClick()}
                    >
                        <span className="mr-1"></span> SAVE
                    </button>
                    <button
                        className="border border-red-500 hover:bg-red-100 hover:cursor-pointer hover:text-red-700 text-red-500 px-4 py-2 font-bold rounded-md text-sm flex items-center justify-center w-48"
                        onClick={() => setIsUpdatePaymentModalOpen(false)}
                    >
                        CANCEL
                    </button>
                </div>
                {/* </form> */}

            </div>


            {isSelectBranchModalOpen && (
                <BranchSelection setIsSelectBranchModalOpen={setIsSelectBranchModalOpen}/>
            )}
        </div>
    )
}