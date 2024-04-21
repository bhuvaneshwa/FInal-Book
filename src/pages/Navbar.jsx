import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="dark:bg-white dark:text-black">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <div className="flex items-center">
            <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
              <img src="/Logo-V9.svg" alt="" className="h-10 w-24 rounded-full" />
            </Link>
          </div>
          <div className="flex items-center space-x-6 lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {/* Navigation Links */}
            <ul className="items-stretch hidden space-x-3 lg:flex">
              {/* Example: */}
              <li className="flex">
                <Link to="/" className="flex items-center px-4 -mb-1">Home</Link>
              </li>
              <li className="flex relative">
                <button onClick={toggleMenu} className="flex items-center px-4 -mb-1 focus:outline-none">
                  Books
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isOpen && (
                  <ul className="absolute z-10 w-[10rem] left-0 mt-10 py-2 bg-white border rounded-lg shadow-lg">
                    <li>
                      <Link to="/generalview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">General Books</Link>
                    </li>
                    <li>
                      <Link to="/premiumbooks" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Premium Books</Link>
                    </li>
                    <li>
                      <Link to="/newbookview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">New Books</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex">
                <Link to="/membership" className="flex items-center px-4 -mb-1">Membership</Link>
              </li>
              <li className="flex">
                <Link to="/testimonial" className="flex items-center px-4 -mb-1 cursor-pointer">Reviews</Link>
              </li>
            </ul>
          </div>
          <div className="items-center mx-2 gap-3 flex-shrink-0 hidden lg:flex">
            {/* Profile Button */}
            <Link to="/register/login">
              <button className="bg-white border text-black px-4 py-2 rounded-sm hover:bg-blue-400 hover:text-white">Login</button>
            </Link>
            <Link to="/register">
              <button className="bg-white border text-black px-4 py-2 rounded-sm">Sign up</button>
            </Link>
          </div>
        </div>
      </header>

      <div className="md:hidden">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} id="mobile-menu" className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex items-center justify-between">
                <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                  <img src="/Logo-V9.svg" alt="" className="h-10 w-24 rounded-full" />
                </Link>
                <button onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-white"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-6 lg:hidden">
                <button onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-white"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div className="items-center flex-shrink-0 hidden lg:flex">
                {/* Navigation Links */}
                <ul className="items-stretch hidden space-x-3 lg:flex">
                  {/* Example: */}
                  <li className="flex">
                    <Link to="/" className="flex items-center px-4 -mb-1">Home</Link>
                  </li>
                  <li className="flex relative">
                    <button onClick={toggleMenu} className="flex items-center px-4 -mb-1 focus:outline-none">
                      Books
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-4 h-4 ml-1 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {isOpen && (
                      <ul className="absolute z-10 w-[10rem] left-0 mt-10 py-2 bg-white border rounded-lg shadow-lg">
                        <li>
                          <Link to="/generalview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">General Books</Link>
                        </li>
                        <li>
                          <Link to="/premiumbooks" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Premium Books</Link>
                        </li>
                        <li>
                          <Link to="/newbookview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">New Books</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="flex">
                    <Link to="/membership" className="flex items-center px-4 -mb-1">Membership</Link>
                  </li>
                  <li className="flex">
                    <Link to="/testimonial" className="flex items-center px-4 -mb-1 cursor-pointer">Reviews</Link>
                  </li>
                </ul>
              </div>
              <div className="items-center mx-2 gap-3 flex-shrink-0 hidden lg:flex">
                {/* Profile Button */}
                <Link to="/register/login">
                  <button className="bg-white border text-black px-4 py-2 rounded-sm hover:bg-blue-400 hover:text-white">Login</button>
                </Link>
                <Link to="/register">
                  <button className="bg-white border text-black px-4 py-2 rounded-sm">Sign up</button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default Navbar;
