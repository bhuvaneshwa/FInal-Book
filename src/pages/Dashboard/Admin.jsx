// Admin.js (renamed from Dashboard.js)

import { Redirect, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Main content area */}
        <div className="p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            {/* Add more routes for admin dashboard as needed */}
            <Route path="*" element={<Redirect to="/dashboard/admin/dashboards" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* Add content for admin dashboard */}
    </div>
  );
}

export default Admin;
