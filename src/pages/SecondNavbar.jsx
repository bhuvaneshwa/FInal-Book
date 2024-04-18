import React from "react";
import { Link } from "react-router-dom";

export default function SecondNavbar() {
  return (
    <div className="bg-gray-50 dark:bg-gray-200 dark:text-gray-200">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 text-sm">
          <li className="">
            <Link
              to="/track"
              className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400"
            >
              Track Order 1
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="font-semibold text-gray-700 transition-colors duration-400 hover:text-blue-400"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <hr className=" border-blue-400"></hr>
    </div>
  );
}
