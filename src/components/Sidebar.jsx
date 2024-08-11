import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaCalendar, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FaTasks className="inline-block mr-2" /> Tasks
        </Link>
        <Link to="/calendar" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FaCalendar className="inline-block mr-2" /> Calendar
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FaCog className="inline-block mr-2" /> Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;