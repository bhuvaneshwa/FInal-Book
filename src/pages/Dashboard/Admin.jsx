import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import statisticscards from './admindashboard/statisticscards';

export default function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set sidebar to be always visible initially
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar when navigating to a different route
  React.useEffect(() => {
    setIsSidebarOpen(true); // Ensure the sidebar remains open when navigating
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 flex-shrink-0 ${isSidebarOpen ? '' : 'hidden'}`}>
        {/* Sidebar content goes here */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <ul>
            <li className="mb-2">
              <Link to="/dashboard" className="block text-gray-300 hover:text-white">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/products" className="block text-gray-300 hover:text-white">Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/addproducts" className="block text-gray-300 hover:text-white">Add Products</Link>
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
          <h2 className="text-2xl font-semibold">Data</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {statisticscards.map((card, index) => (
              <div
                key={index}
                className={`p-4 bg-${card.color}-200 rounded-lg shadow-md`}
              >
                <card.icon className="w-8 h-8 text-gray-800" />
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{card.title}</p>
                  <p className="text-lg font-semibold">{card.value}</p>
                </div>
                <div className={`mt-2 text-sm ${card.footer.color}`}>
                  <span>{card.footer.value}</span> {card.footer.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
