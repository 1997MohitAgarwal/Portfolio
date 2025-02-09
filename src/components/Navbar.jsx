import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-sky-400 shadow-md w-full z-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <a href="#about" className="flex items-center space-x-2">
              <img 
                className="rounded-full border border-sky-400" 
                src="/assets/images/profile.jpg" 
                width="45" 
                height="45" 
                alt="profile"
              />
              <span className="font-bold text-lg">MY PORTFOLIO</span>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-sky-400 focus:outline-none text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex space-x-6 hidden`}>
            <a href="#about" className="shadow-md hover:shadow-sky-500 transition py-1 px-3 rounded-md">Home</a>
            <a href="#education" className="shadow-md hover:shadow-sky-500 transition py-1 px-3 rounded-md">Education</a>
            <a href="#skills" className="shadow-md hover:shadow-sky-500 transition py-1 px-3 rounded-md">Skills</a>
            <a href="#projects" className="shadow-md hover:shadow-sky-500 transition py-1 px-3 rounded-md">Projects</a>
            <a href="#contact" className="shadow-md hover:shadow-sky-500 py-1 px-3 rounded-md">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-gray-900 text-sky-400 py-2 px-6 space-y-2 text-left`}>
          <a href="#about" className="w-1/3 block border-b rounded-md pl-3 hover:text-white">Home</a>
          <a href="#education" className="w-1/3 block border-b rounded-md pl-3 hover:text-white">Education</a>
          <a href="#skills" className="w-1/3 block border-b rounded-md pl-3 hover:text-white">Skills</a>
          <a href="#projects" className="w-1/3 block border-b rounded-md pl-3 hover:text-white">Projects</a>
          <a href="#contact" className="w-1/3 block hover:text-white pl-3">Contact</a>
        </div>
      )}
    </nav>
  );
}
