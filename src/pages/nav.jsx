import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <h1>Doodle Dreams</h1>
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isOpen ? "top-[9%]" : "top-[-100%]"
                        } md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
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
                        <li>
                            <Link to="/membership" className="flex items-center px-4 -mb-1">Membership</Link>
                        </li>
                        <li>
                            <Link to="/testimonial" className="flex items-center px-4 -mb-1 cursor-pointer">Reviews</Link>
                        </li>
                        <li>
                            <Link to="/register/login">
                                <button className="bg-white border text-black px-4 py-2 rounded-sm hover:bg-blue-400 hover:text-white">Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <button className="bg-white border text-black px-4 py-2 rounded-sm">Sign up</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <IoMdMenu className=" absolute z-10 text-3xl cursor-pointer" onClick={toggleMenu} />
                </div>
            </nav>
        </header>
    );
}

export default Nav;
