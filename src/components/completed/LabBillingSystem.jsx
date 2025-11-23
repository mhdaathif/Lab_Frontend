import React, { useState, useRef, useEffect } from 'react';

const LabBillingSystem = () => {
  const [patients, setPatients] = useState([
    { id: 1, billNumber: 'BL2025001', name: 'John Smith', date: '2025.01.15', mobile: '5551234567', tests: ['Blood Panel', 'Urinalysis'], totalDue: 245.00, status: 'Unpaid' },
    { id: 2, billNumber: 'BL2025002', name: 'Sarah Johnson', date: '2025.02.20', mobile: '5559876543', tests: ['Lipid Profile', 'Glucose Test'], totalDue: 189.50, status: 'Paid' },
    { id: 3, billNumber: 'BL2025003', name: 'Michael Chen', date: '2025.03.10', mobile: '5550000000', tests: ['Complete Blood Count', 'Liver Function'], totalDue: 312.75, status: 'Paid' },
    { id: 4, billNumber: 'BL2025004', name: 'Michael Chen', date: '2025.03.11', mobile: '5550000000', tests: ['Complete Blood Count', 'Liver Function'], totalDue: 312.75, status: 'Paid' }
  ]);

  // Added existing patients database for selection
  const existingPatients = [
    { id: 1, name: 'John Smith', mobile: '5551234567' },
    { id: 2, name: 'Sarah Johnson', mobile: '5559876543' },
    { id: 3, name: 'Michael Chen', mobile: '5550000000' },
    { id: 4, name: 'Emily Davis', mobile: '5552223333' },
    { id: 5, name: 'Robert Wilson', mobile: '5554445555' }
  ];

  const labData = [
    {
      id: 567890, name: "MediLab", branch: "Downtown", contact: "555-1234", email: "medilab@example.com"
    },
  ];

  // Added missing state variables
  const [statsVisible, setStatsVisible] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: '',
    mobile: '',
    date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    tests: [],
    totalDue: 0,
    status: 'Unpaid'
  });

  const [selectedTestOptions, setSelectedTestOptions] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [showPinnedBill, setShowPinnedBill] = useState(false);
  const [pinnedBill, setPinnedBill] = useState(null);

  // Fix: Corrected the filter panel toggle functionality
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const handleToggleFilters = () => {
    setShowFilterPanel(prev => !prev);
  };

  // Search states - Consolidated and fixed
  const [searchTerms, setSearchTerms] = useState({
    patient: '',
    bill: '',
    phone: '',
  });

  // Add date range filter state
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });

  // State for patient search functionality during new patient creation
  const [patientSearchTerm, setPatientSearchTerm] = useState('');
  const [filteredExistingPatients, setFilteredExistingPatients] = useState([]);

  // Test search state
  const [testSearchTerm, setTestSearchTerm] = useState('');

  // Stats for the current filtered view
  const [currentStats, setCurrentStats] = useState(null);

  const printRef = useRef();

  const testOptions = [
    { name: 'Complete Blood Count', price: 125.00 },
    { name: 'Lipid Profile', price: 95.50 },
    { name: 'Urinalysis', price: 75.00 },
    { name: 'Liver Function', price: 187.75 },
    { name: 'Glucose Test', price: 94.00 },
    { name: 'Blood Panel', price: 170.00 },
    { name: 'Thyroid Panel', price: 210.25 },
    { name: 'Vitamin D Test', price: 85.50 }
  ];

  // Helper function to convert date formats
  const formatDateForComparison = (dateStr) => {
    // Convert from yyyy.mm.dd to yyyy-mm-dd for comparison
    if (!dateStr) return null;
    return dateStr.replace(/\./g, '-');
  };

  const isDateInRange = (dateStr) => {
    if (!dateFilter.startDate && !dateFilter.endDate) return true;

    const patientDate = new Date(formatDateForComparison(dateStr));

    let isAfterStart = true;
    let isBeforeEnd = true;

    if (dateFilter.startDate) {
      const startDate = new Date(dateFilter.startDate);
      isAfterStart = patientDate >= startDate;
    }

    if (dateFilter.endDate) {
      const endDate = new Date(dateFilter.endDate);
      isBeforeEnd = patientDate <= endDate;
    }

    return isAfterStart && isBeforeEnd;
  };

  // Calculate stats based on filtered patients
  const calculateStats = (patientList) => {
    const patientsToAnalyze = patientList || filteredPatients;

    const totalBills = patientsToAnalyze.length;
    const paidBills = patientsToAnalyze.filter(p => p.status === 'Paid').length;
    const unpaidBills = patientsToAnalyze.filter(p => p.status === 'Unpaid').length;
    const partialBills = patientsToAnalyze.filter(p => p.status === 'Partial').length;

    const totalRevenue = patientsToAnalyze.reduce((sum, p) => sum + p.totalDue, 0);
    const paidRevenue = patientsToAnalyze.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.totalDue, 0);
    const unpaidRevenue = patientsToAnalyze.filter(p => p.status === 'Unpaid').reduce((sum, p) => sum + p.totalDue, 0);

    const paymentRate = totalBills > 0 ? Math.round((paidBills / totalBills) * 100) : 0;

    return {
      totalBills,
      paidBills,
      unpaidBills,
      partialBills,
      totalRevenue,
      paidRevenue,
      unpaidRevenue,
      paymentRate
    };
  };

  // Added missing handlePayment function
  const handlePayment = (id, type) => {
    setPatients(patients.map(patient => {
      if (patient.id === id) {
        return {
          ...patient,
          status: type === 'full' ? 'Paid' : 'Partial'
        };
      }
      return patient;
    }));
  };

  // Filter patients for the main table - Fixed
  const filteredPatients = patients.filter(patient => {
    const matchesBillSearch =
      !searchTerms.bill || patient.billNumber?.toLowerCase().includes(searchTerms.bill.toLowerCase());

    const matchesPatientSearch =
      !searchTerms.patient || patient.name?.toLowerCase().includes(searchTerms.patient.toLowerCase());

    const matchesPhoneSearch =
      !searchTerms.phone || patient.mobile?.includes(searchTerms.phone);

    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'unpaid' && patient.status === 'Unpaid') ||
      (activeTab === 'paid' && patient.status === 'Paid');

    const matchesDateFilter = isDateInRange(patient.date);

    return matchesBillSearch && matchesPatientSearch && matchesPhoneSearch && matchesTab && matchesDateFilter;
  });

  // Update stats whenever filters change
  useEffect(() => {
    setCurrentStats(calculateStats(filteredPatients));
  }, [filteredPatients, searchTerms, activeTab, dateFilter]);

  // Filter tests based on search term
  const filteredTestOptions = testOptions.filter(test =>
    test.name.toLowerCase().includes(testSearchTerm.toLowerCase())
  );

  // Function to generate a new bill number
  const generateBillNumber = () => {
    const year = new Date().getFullYear();
    let highestNumber = 0;

    // Find the highest bill number in the current list
    patients.forEach(patient => {
      if (patient.billNumber) {
        const numberPart = parseInt(patient.billNumber.replace(`BL${year}`, ''));
        if (!isNaN(numberPart) && numberPart > highestNumber) {
          highestNumber = numberPart;
        }
      }
    });

    // Create new bill number with sequential numbering
    const newNumber = highestNumber + 1;
    return `BL${year}${newNumber.toString().padStart(3, '0')}`;
  };

  // Fixed function to handle patient search
  const handlePatientSearch = (e) => {
    const searchTerm = e.target.value;
    setPatientSearchTerm(searchTerm);

    if (searchTerm.length > 0) {
      const filtered = existingPatients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.mobile.includes(searchTerm)
      );
      setFilteredExistingPatients(filtered);
    } else {
      setFilteredExistingPatients([]);
    }
  };

  // Handle date range changes
  const handleDateFilterChange = (type, value) => {
    setDateFilter({
      ...dateFilter,
      [type]: value
    });
  };

  // Clear date filters
  const clearDateFilters = () => {
    setDateFilter({
      startDate: '',
      endDate: ''
    });
  };

  // Fixed search handlers
  const handleSearchChange = (type, value) => {
    setSearchTerms({
      ...searchTerms,
      [type]: value
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerms({
      patient: '',
      bill: '',
      phone: '',
    });
    clearDateFilters();
    setActiveTab('all');
  };

  const selectPatient = (patient) => {
    setNewPatient({
      ...newPatient,
      name: patient.name,
      mobile: patient.mobile
    });
    setPatientSearchTerm('');
    setFilteredExistingPatients([]);
  };

  const clearPatientSelection = () => {
    setNewPatient({
      ...newPatient,
      name: '',
      mobile: ''
    });
    setPatientSearchTerm('');
    setFilteredExistingPatients([]);
  };

  const handleTestChange = (test) => {
    let newSelectedTests = [...selectedTestOptions];
    if (newSelectedTests.includes(test.name)) {
      newSelectedTests = newSelectedTests.filter(t => t !== test.name);
    } else {
      newSelectedTests.push(test.name);
    }
    setSelectedTestOptions(newSelectedTests);

    // Calculate total
    const total = newSelectedTests.reduce((sum, testName) => {
      const test = testOptions.find(t => t.name === testName);
      return sum + (test ? test.price : 0);
    }, 0);

    setNewPatient({
      ...newPatient,
      tests: newSelectedTests,
      totalDue: total
    });
  };

  const handleAddPatient = () => {
    if (!newPatient.name || newPatient.tests.length === 0) return;

    const newId = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    const billNumber = generateBillNumber();

    // Format today's date as YYYY.MM.DD
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

    setPatients([
      ...patients,
      {
        id: newId,
        billNumber: billNumber,
        ...newPatient,
        date: formattedDate
      }
    ]);

    setNewPatient({
      name: '',
      mobile: '',
      date: formattedDate,
      tests: [],
      totalDue: 0,
      status: 'Unpaid'
    });

    setSelectedTestOptions([]);
    setShowAddForm(false);
  };

  const handlePinBill = (id) => {
    const bill = patients.find(patient => patient.id === id);
    if (bill) {
      setPinnedBill(bill);
      setShowPinnedBill(true);
    }
  };

  const handlePrint = () => {
    const content = printRef.current;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Lab Bill</title>');
    printWindow.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;} table{width:100%;border-collapse:collapse;} td,th{padding:8px;border:1px solid #ddd;} th{background-color:#f2f2f2;} .header{text-align:center;margin-bottom:20px;} .total{font-weight:bold;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  // Function to format date from yyyy-mm-dd to yyyy.mm.dd for display
  const formatDateForDisplay = (dateStr) => {
    if (!dateStr) return '';
    return dateStr.replace(/-/g, '.');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <h1 className="text-xl font-medium text-gray-700 mb-6">Lab Test Billing Managemen</h1>

      <main className="max-w-7xl mx-auto px-4 py-4">

        {/* Tab navigation and search - FIXED */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Tabs Section */}
          <div className="flex mb-5 md:mb-0 space-x-0 bg-white rounded-lg shadow p-2">
            {[
              { label: "All Bills", value: "all" },
              { label: "Unpaid", value: "unpaid" },
              { label: "Paid", value: "paid" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab.value
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex justify-end space-x-3">
            {/* Toggle Filters Button */}
            <button
              className="flex items-center justify-center border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200"
              onClick={handleToggleFilters}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              {showFilterPanel ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Clear Filters Button */}
            <button
              className="flex items-center justify-center border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200"
              onClick={clearAllFilters}
            >
              {/* <RiResetLeftFill size={16} /> */}
              Clear All Filters
            </button>
          </div>

        </div>

        {/* Filters Section - Fixed filter button */}

        <div className=" items-center mt-4">
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z" clipRule="evenodd" />
            </svg>
            Billing  {dateFilter.startDate && dateFilter.endDate ?
              `(${dateFilter.startDate} - ${dateFilter.endDate})` :
              dateFilter.startDate ?
                `(From ${dateFilter.startDate})` :
                dateFilter.endDate ?
                  `(Until ${dateFilter.endDate})` :
                  '(All Time)'}
          </h2>
        </div>

        <div className="flex items-center mt-4 space-x-3.5">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 transition font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              New Patient Bill
            </button>
          </div>


          {/* Actions */}

        </div>

        <div className=" items-center mt-3">
          {showFilterPanel && (
            <div className="bg-white shadow rounded-lg p-4 mb-3">
              <div className="flex flex-col space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* Search by Bill Number */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">Search by Bill Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. BL2025001"
                        className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-400 shadow-sm"
                        value={searchTerms.bill}
                        onChange={(e) => handleSearchChange("bill", e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Search by Patient Name */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">Search by Patient Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter patient name"
                        className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-400 shadow-sm"
                        value={searchTerms.patient}
                        onChange={(e) => handleSearchChange("patient", e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Search by Phone Number */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">Search by Phone Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-400 shadow-sm"
                        value={searchTerms.phone}
                        onChange={(e) => handleSearchChange("phone", e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Date Filters */}

                  {/* Start Date */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 shadow-sm"
                      value={dateFilter.startDate}
                      onChange={(e) => handleDateFilterChange("startDate", e.target.value)}
                    />
                  </div>

                  {/* End Date */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 shadow-sm"
                      value={dateFilter.endDate}
                      onChange={(e) => handleDateFilterChange("endDate", e.target.value)}
                    />
                  </div>

                </div>



              </div>
            </div>
          )}
        </div>
        <div className=" mb-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Total Revenue */}
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex flex-col items-start">
              <p className="text-sm text-blue-600">Total Revenue</p>
              <p className="text-xl font-bold">${currentStats?.totalRevenue.toFixed(2) || "0.00"}</p>
              <p className="text-xs text-blue-500">From {currentStats?.totalBills || 0} bills</p>
            </div>

            {/* Paid Bills */}
            <div className="bg-green-50 rounded-lg p-3 border border-green-100 flex flex-col items-start">
              <p className="text-sm text-green-600">Paid Bills</p>
              <p className="text-xl font-bold">{currentStats?.paidBills || 0}</p>
              <p className="text-xs text-green-500">
                ${currentStats?.paidRevenue.toFixed(2) || "0.00"} collected
              </p>
            </div>

            {/* Unpaid Bills */}
            <div className="bg-red-50 rounded-lg p-3 border border-red-100 flex flex-col items-start">
              <p className="text-sm text-red-600">Unpaid Bills</p>
              <p className="text-xl font-bold">{currentStats?.unpaidBills || 0}</p>
              <p className="text-xs text-red-500">
                ${currentStats?.unpaidRevenue.toFixed(2) || "0.00"} pending
              </p>
            </div>
          </div>
        </div>
        {/* Add new patient form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md mb-6 p-4">
            <h2 className="text-lg font-medium mb-4">Create New Patient Bill</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {/* Fixed patient search functionality */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Find Existing Patient</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Type name or phone number..."
                      value={patientSearchTerm}
                      onChange={handlePatientSearch}
                    />
                    {newPatient.name && (
                      <button
                        onClick={clearPatientSelection}
                        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}

                    {/* Suggestions dropdown */}
                    {filteredExistingPatients.length > 0 && patientSearchTerm && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredExistingPatients.map(patient => (
                          <div
                            key={patient.id}
                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                            onClick={() => selectPatient(patient)}
                          >
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-sm text-gray-500">{patient.mobile}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* If patient is selected, show this info */}
                {newPatient.name && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-blue-800">{newPatient.name}</p>
                        <p className="text-sm text-blue-600">{newPatient.mobile}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Selected Patient
                      </span>
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Patient Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    value={newPatient.mobile}
                    onChange={(e) => setNewPatient({ ...newPatient, mobile: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    value={newPatient.date.replace(/\./g, '-')}
                    onChange={(e) => setNewPatient({ ...newPatient, date: e.target.value.replace(/-/g, '.') })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Select Tests</label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      placeholder="Search for tests..."
                      className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-400"
                      value={testSearchTerm}
                      onChange={(e) => setTestSearchTerm(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 border border-gray-200 rounded-lg p-2">
                    {filteredTestOptions.map((test) => (
                      <div key={test.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`test-${test.name}`}
                          checked={selectedTestOptions.includes(test.name)}
                          onChange={() => handleTestChange(test)}
                          className="rounded text-blue-600 focus:ring-blue-400"
                        />
                        <label htmlFor={`test-${test.name}`} className="ml-2 text-gray-700 flex-1">
                          {test.name}
                        </label>
                        <span className="text-gray-600">${test.price.toFixed(2)}</span>
                      </div>
                    ))}
                    {filteredTestOptions.length === 0 && (
                      <div className="text-center py-3 text-gray-500">No matching tests found</div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-4">Bill Summary</h3>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-700">Bill Number:</span>
                    <span className="font-medium text-blue-600">{generateBillNumber()}</span>
                  </div>
                  {selectedTestOptions.length > 0 ? (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        {selectedTestOptions.map(testName => {
                          const test = testOptions.find(t => t.name === testName);
                          return (
                            <div key={testName} className="flex justify-between">
                              <span>{testName}</span>
                              <span>${test ? test.price.toFixed(2) : '0.00'}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between font-medium">
                          <span>Total Amount:</span>
                          <span className="text-blue-600">${newPatient.totalDue.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-6">Select tests to generate bill</p>
                  )}
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setNewPatient({
                        name: '',
                        mobile: '',
                        date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
                        tests: [],
                        totalDue: 0,
                        status: 'Unpaid'
                      });
                      setSelectedTestOptions([]);
                      setTestSearchTerm('');
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddPatient}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    disabled={!newPatient.name || !newPatient.mobile || selectedTestOptions.length === 0}
                  >
                    Create Bill
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bills List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-300/20 border-green-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tests</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient, index) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-blue-600">{patient.billNumber}</span>

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">{patient.mobile}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {patient.tests.join(', ')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {patient.tests.length} tests
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">${patient.totalDue.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${patient.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {patient.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        {patient.status !== 'Paid' && (
                          <>
                            <button
                              onClick={() => handlePayment(patient.id, 'full')}
                              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded bg-blue-600 text-white hover:bg-blue-700"
                            >
                              Pay Full
                            </button>

                          </>
                        )}
                        <button
                          onClick={() => handlePinBill(patient.id)}
                          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          Pin & Print
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
                    No billing records found. Create a new patient bill to get started.
                  </td>
                </tr>
              )}
            </tbody>

          </table>

          {/* Pagination or footer can be added here if needed */}
          <div className="px-4 py-3">
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="flex-1 flex justify-between sm:hidden">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                      1
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      3
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pinned Bill Modal */}
      {showPinnedBill && pinnedBill && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
            {/* Header with Title and Actions */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Patient Bill</h3>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                  Print
                </button>
                <button onClick={() => setShowPinnedBill(false)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Printable Content */}
            <div className="p-4" ref={printRef}>
              <p className="font-medium">Bill No : {pinnedBill.billNumber}</p>
              {/* Lab Information */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">{labData[0].name}</h2>
                <p className="text-gray-500">{labData[0].branch} Branch</p>
                <p className="text-gray-500">Contact: {labData[0].contact}</p>
                <p className="text-gray-500">Email: {labData[0].email}</p>
              </div>

              {/* Patient & Bill Information */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Patient Information:</p>
                  <p className="font-medium">{pinnedBill.name}</p>
                  <p>Phone: {pinnedBill.mobile}</p>
                  <p>Patient ID: {pinnedBill.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Bill Information:</p>
                  <p className="font-medium">Date: {pinnedBill.date}</p>
                  <p>Status: <span className={`${pinnedBill.status === 'Paid' ? 'text-green-600' :
                    pinnedBill.status === 'Partial' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{pinnedBill.status}</span>
                  </p>
                  {/* <p className="font-medium">{pinnedBill.billNumber}</p> */}

                </div>
              </div>

              {/* Test Details Table */}
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left border">Test</th>
                      <th className="px-4 py-2 text-right border">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pinnedBill.tests.map((testName, idx) => {
                      const test = testOptions.find(t => t.name === testName);
                      return (
                        <tr key={idx}>
                          <td className="px-4 py-2 border">{testName}</td>
                          <td className="px-4 py-2 text-right border">${test ? test.price.toFixed(2) : '0.00'}</td>
                        </tr>
                      );
                    })}
                    <tr className="total">
                      <td className="px-4 py-3 border text-right">Total Amount:</td>
                      <td className="px-4 py-3 border text-right">${pinnedBill.totalDue.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-center text-gray-500 text-sm">Thank you for choosing {labData[0].name} for your laboratory needs.</p>
                <p className="text-center text-gray-400 text-xs mt-2">Please retain this receipt for your records.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabBillingSystem;