import { Fragment, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginUser from './components/auth/LoginUser';
import LoginPatient from './components/patient/LoginPatient';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/route/ProtectedRoute';
import LeftSideBar from './components/layout/LeftSideBar';
import TopNavbar from './components/layout/TopNavBar';
import Footer from './components/layout/Footer';
import PatientList from './components/lab/PatientList';
import TestReportList from './components/lab/TestReportList';
import TestTypeList from './components/lab/TestTypeList';
import PatientTestReportList from './components/patient/PatientTestReportList';
import LabList from './components/admin/LabList';
import LabUserList from './components/admin/LabUserList';
import BranchList from './components/admin/BranchList';
import SalesReports from './components/lab/SalesReports';
import TestTypeReports from './components/lab/TestTypeReports';
import LabReports from './components/lab/LabReports';
import TestReports from './components/lab/TestReports';
import PatientReports from './components/lab/PatientReports';
import LabBillingSystem from './components/completed/LabBillingSystem';
import Billing from './components/lab/Billing';
import LabDashboard from './components/lab/Dashboard/LabDashboard';
import ActivityLogs from './components/lab/Dashboard/ActivityLogs';
import Notifications from './components/lab/Notifications/Notifications';
import NotificationsCenter from './components/lab/Notifications/NotificationsCenter';
import AllNotifications from './components/lab/Notifications/AllNotifications';
import AdminLabReports from './components/admin/AdminLabReports';
import Overview from './components/admin/AdminDashboard/Payments';
import AdminDashboard from './components/admin/AdminDashboard/AdminDashboard';
import AdminDashboardOriginal from './components/admin/AdminDashboard/AdminDashboardOriginal';
import {PatientRecords} from "./components/admin/PatientRecords.jsx";
import {BillingInvoice} from "./components/admin/BillingInvoice.jsx";
import {ManagePayment} from "./components/admin/ManagePayment.jsx";
import BranchesUsersList from "./components/lab/BranchesUsersList.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [mentorsDropdownOpen, setMentorsDropdownOpen] = useState(true);

  const toggleMentorsDropdown = () => {
    setMentorsDropdownOpen(!mentorsDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <Fragment>
      <ToastContainer theme='light' />
      <div className="flex h-screen bg-gray-100">
        <LeftSideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="w-full p-6 overflow-y-auto">
            {/* -------- protected routes -------- */}
            

            
            {/* ----------------------- */}
            {/* -------- Lab -------- */}
            <Routes>
              {/* --------------- main & process --------------- */}
              <Route path='/lab/dashboard' element={
                // <ProtectedRoute>
                <LabDashboard />
                // </ProtectedRoute>
              } />
              <Route path='/lab/billing' element={
                // <ProtectedRoute>
                <Billing />
                // </ProtectedRoute>
              } />
              <Route path='/lab/sales' element={
                // <ProtectedRoute>
                <>
                   <BranchesUsersList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/payments' element={
                // <ProtectedRoute>
                <>
                  {/* <TestTypeList /> */}
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/tests' element={
                // <ProtectedRoute>
                <>
                  <TestReportList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/test-types' element={
                // <ProtectedRoute>
                <>
                  <TestTypeList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/patients' element={
                // <ProtectedRoute>
                <PatientList />
                // </ProtectedRoute>
              } />



              {/* --------------- reports --------------- */}
              <Route path='/lab/sales/reports' element={
                // <ProtectedRoute>
                <>
                  <SalesReports />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/branch/reports' element={
                // <ProtectedRoute>
                <>
                  <LabReports />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/test/reports' element={
                // <ProtectedRoute>
                <>
                  <TestReports />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/test-type/reports' element={
                // <ProtectedRoute>
                <>
                  <TestTypeReports />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/patient/reports' element={
                // <ProtectedRoute>
                <>
                  <PatientReports />
                </>
                // </ProtectedRoute>
              } />

              {/* --------------- settings --------------- */}
              <Route path='/lab/notifications' element={
                // <ProtectedRoute>
                <>
                  <Notifications />
                  <NotificationsCenter />
                  <AllNotifications />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/lab/activity-logs' element={
                // <ProtectedRoute>
                <>
                  <ActivityLogs />
                </>
                // </ProtectedRoute>
              } />
            </Routes>




            {/* ----------------------- */}
            {/* -------- admin -------- */}
            <Routes>

            {/* --------------- main & manage --------------- */}
              <Route path='/admin/dashboard' element={
                // <ProtectedRoute>
                <>
                  <AdminDashboard />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/admin/dashboard1' element={
                // <ProtectedRoute>
                <>
                  <AdminDashboardOriginal />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/admin/manage-lab' element={
                // <ProtectedRoute>
                <>
                  <LabList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/admin/manage-lab-user' element={
                // <ProtectedRoute>
                <>
                  <LabUserList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/admin/manage-branch' element={
                // <ProtectedRoute>
                <>
                  <BranchList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/admin/manage-patients' element={
                // <ProtectedRoute>
                <>
                  <PatientRecords />
                </>
                // </ProtectedRoute>
              } />

              <Route path='/admin/manage-payment' element={
                // <ProtectedRoute>
                <>
                  <ManagePayment />
                </>
                // </ProtectedRoute>
              } />

              {/*<Route path='/admin/manage-billing' element={*/}
              {/*  // <ProtectedRoute>*/}
              {/*  <>*/}
              {/*    <BillingInvoice />*/}
              {/*  </>*/}
              {/*  // </ProtectedRoute>*/}
              {/*} />*/}


              {/* --------------- reports --------------- */}
              <Route path='/admin/lab/reports' element={
                // <ProtectedRoute>
                <>
                  <AdminLabReports />
                </>
                // </ProtectedRoute>
              } />
            </Routes>



            {/* ----------------------- */}
            {/* -------- Patient -------- */}
            <Routes>
              <Route path='/patient/reports' element={
                // <ProtectedRoute>
                <>
                  <PatientTestReportList />
                </>
                // </ProtectedRoute>
              } />
              <Route path='/LoginPatient' element={<LoginPatient />} />
            </Routes>
          </main>
          <Footer />
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        <Routes>
          {/* -------- auth -------- */}
          <Route path='/login' element={<LoginUser />} />
        </Routes>

      </div>
    </Fragment>
  )
}

export default App
