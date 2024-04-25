// Sidebar.js
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard/admin/dashboards" className="block text-gray-300 hover:text-white">Dashboard</Link>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
