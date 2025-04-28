import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Nabar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/jobs">All Jobs</Link>
      </li>
    </>
  );

  const handleLogout = async () => {
   await logOut()
      .then(() => {
        console.log("Logout Successfull");
        toast.success("Logout Successfull");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-lg px-4 lg:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer  text-indi font-bold font-winky text-3xl"
          >
            FindJobs!
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          {/* If user is not available then showing Login button */}
          <div className="">
            {!user && (
              <Link to="/login" className="btn text-indi">
                Login
              </Link>
            )}
          </div>
          {/* If user is available then showing this avatar image  */}
          <div>
            {/* Dropdown */}
            {user && (
              <div className="dropdown dropdown-end z-50 ml-8">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full" title={user?.displayName}>
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/add-job" className="justify-between">
                      Add Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-posted-jobs">My Posted Jobs</Link>
                  </li>
                  <li>
                    <Link to="/my-bids">My Bids</Link>
                  </li>
                  <li>
                    <Link to="/bid-request">Bid Requests</Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handleLogout}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabar;
