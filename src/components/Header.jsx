import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";

function Header() {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link to="/">
  <div className="flex flex-col items-center">
    <img className="h-12" src={LOGO_URL} alt="logo" />
    <span className="text-lg font-medium mt-1">Khao Pio</span>
  </div>
</Link>


            <div className="hidden md:block ml-8">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Cart - ({cartItems.length} items)
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white"
                onClick={() => {
                  setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
                }}
              >
                {btnName}
              </button>
              <span className="ml-4 text-gray-800 font-bold text-lg">
                {loggedInUser}
              </span>
              {onlineStatus && (
                <div className="h-4 w-4 bg-green-500 rounded-full ml-2"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium"
          >
            Cart - ({cartItems.length} items)
          </Link>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white"
              onClick={() => {
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
            >
              {btnName}
            </button>
            <span className="ml-4 text-gray-800 font-bold text-lg">
              {loggedInUser}
            </span>
            {onlineStatus && (
              <div className="h-4 w-4 bg-green-500 rounded-full ml-2"></div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
