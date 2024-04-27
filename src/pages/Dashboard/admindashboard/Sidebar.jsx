// Sidebar component
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ selectedLink, handleLinkClick }) => {
    return (
        <div className="bg-gray-800 text-white w-64 flex-shrink-0">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                <ul>
                    <li className="mb-2">
                        <Link
                            to="/dashboard/home"
                            className={`block ${selectedLink === '/dashboard/home' ? 'text-white' : 'text-gray-300'
                                } hover:text-white`}
                            onClick={() => handleLinkClick('/dashboard/home')}
                        >
                            Sales
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            to="/dashboard/products"
                            className={`block ${selectedLink === '/dashboard/products' ? 'text-white' : 'text-gray-300'
                                } hover:text-white`}
                            onClick={() => handleLinkClick('/dashboard/products')}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            to="/dashboard/addproducts"
                            className={`block ${selectedLink === '/dashboard/addproducts' ? 'text-white' : 'text-gray-300'
                                } hover:text-white`}
                            onClick={() => handleLinkClick('/dashboard/addproducts')}
                        >
                            Add Products
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            to="/dashboard/inventory"
                            className={`block ${selectedLink === '/dashboard/inventory' ? 'text-white' : 'text-gray-300'
                                } hover:text-white`}
                            onClick={() => handleLinkClick('/dashboard/inventory')}
                        >
                            Upload Inventory
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            to="/dashboard/orders"
                            className={`block ${selectedLink === '/dashboard/orders' ? 'text-white' : 'text-gray-300'
                                } hover:text-white`}
                            onClick={() => handleLinkClick('/dashboard/orders')}
                        >
                            Orders
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
