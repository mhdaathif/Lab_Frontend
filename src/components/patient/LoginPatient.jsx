import { useState } from "react";

const LoginPatient = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Validates the Sri Lankan mobile number format
  const validateMobileNumber = (number) => {
    const validPrefixes = ["070", "071", "072", "074", "075", "076", "077", "078"];
  
    // Check if the number has exactly 10 digits and is numeric
    if (!/^\d{10}$/.test(number)) {
      return { isValid: false, message: "Mobile number must be exactly 10 digits." };
    }

    // Extract the first three digits
    const prefix = number.substring(0, 3);

    // Check if the prefix is valid
    if (!validPrefixes.includes(prefix)) {
      return { isValid: false, message: `${prefix} is not a valid Sri Lankan mobile number prefix.` };
    }

    return { isValid: true, message: "Valid number." };
  };

  // Handles the initial mobile number submission
  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    
    setError("");

    // Validate mobile number
    const validation = validateMobileNumber(mobileNumber);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API delay
      setShowOtpInput(true);
      setError("");
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handles OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API delay
      window.location.href = "/PatientReportpagePage"; // Redirect to patient dashboard
    } catch (error) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }s
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Header section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Patient Login</h2>
          <p className="mt-2 text-gray-600">
            {!showOtpInput
              ? "Enter your mobile number to receive an OTP"
              : "Enter the OTP sent to your mobile"}
          </p>
        </div>

        {/* Error message display */}
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Mobile number input form */}
        {!showOtpInput && (
          <form onSubmit={handleMobileSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="07X XXXXXXX"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                         shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 
                         focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending OTP..." : "Get OTP"}
            </button>
          </form>
        )}

        {/* OTP input form */}
        {showOtpInput && (
          <form onSubmit={handleOtpSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                OTP
              </label>
              <input
                id="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                         shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 
                         focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
            {/* Back button to change mobile number */}
            <button
              type="button"
              onClick={() => {
                setShowOtpInput(false);
                setOtp("");
                setError("");
              }}
              className="w-full text-sm text-blue-600 hover:text-blue-500"
            >
              Change Mobile Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPatient;
