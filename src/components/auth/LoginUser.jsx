import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearAuthError, login } from "../../actions/userActions";
import { toast } from "react-toastify";
// import MetaData from "../layouts/MetaData";

function LoginUser() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error } = useSelector(state => state.authState);
  // const redirect = location.search ? '/' + location.search.split('=')[1] : '/';
  const redirect = '/PatientReportTable';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(formData))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect)
    }
    if (error) {
      toast(error, {
        position: "top-right",
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError)
        }
      })
      return
    }
  }, [error, isAuthenticated, dispatch, navigate, redirect])

  return (
    <>
      <div className="w-full flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 shadow-2xl rounded-lg">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <form
            onSubmit={submitHandler}
            className="space-y-6">

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Forgot Password?{" "}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Reset password
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
