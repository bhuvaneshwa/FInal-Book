import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import statisticscards from './statisticscards';
import Usercontent from './Usercontent';

export default function User() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set sidebar to be always visible initially
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-64 flex-shrink-0 ${isSidebarOpen ? '' : 'hidden'}`}>
                {/* Sidebar content goes here */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                    <ul>
                        <li className="mb-2">
                            <Link to="/dashboard/home" className="block text-gray-300 hover:text-white">Sales</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/dashboard/user" className="block text-gray-300 hover:text-white">User</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/dashboard/products" className="block text-gray-300 hover:text-white">Products</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/dashboard/addproducts" className="block text-gray-300 hover:text-white">Add Products</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/dashboard/inventory" className="block text-gray-300 hover:text-white">Upload Inventory</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/dashboard/orders" className="block text-gray-300 hover:text-white">Orders</Link>
                        </li>
                        {/* Add more sidebar items as needed */}
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Navbar with toggle button */}
                <div className="bg-gray-900 p-4">
                    <button onClick={toggleSidebar} className="text-white">
                        ☰
                    </button>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <Usercontent />
                </div>
            </div>
        </div>
    );
}
