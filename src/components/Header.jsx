import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <FaCheckCircle className="text-2xl mr-2" />
        <h1 className="text-2xl font-bold">iTodo</h1>
      </div>
    </header>
  );
}

export default Header;