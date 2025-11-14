import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import cj from './img/cj.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-20 px-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <a href="#hero">
            {/* Adjust the image size using Tailwind CSS classes */}
            <img
              src={cj}
              alt="home"
              className="w-12 md:w-16" // Use a smaller size on mobile and larger size on medium screens
            />
          </a>
        </h1>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="text-gray-800 hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a></li>
          <li><a href="#blog" className="text-gray-800 hover:text-blue-500">Blog</a></li>
          <li><a href="#contact-form" className="text-gray-800 hover:text-blue-500">Contact</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out ${
          menuOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          <li><a onClick={toggleMenu} href="#about" className="text-gray-800 hover:text-blue-500">About</a></li>
          <li><a onClick={toggleMenu} href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a></li>
          <li><a onClick={toggleMenu} href="#blog" className="text-gray-800 hover:text-blue-500">Blog</a></li>
          <li><a onClick={toggleMenu} href="#contact-form" className="text-gray-800 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
