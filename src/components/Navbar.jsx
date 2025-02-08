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
            <a href="#about" className="hover:text-white transition">Home</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-gray-900 text-sky-400 py-3 px-6 space-y-3 text-left`}>
          <a href="#about" className="block border-b pb-3 hover:text-white">Home</a>
          <a href="#education" className="block border-b pb-3 hover:text-white">Education</a>
          <a href="#skills" className="block border-b pb-3 hover:text-white">Skills</a>
          <a href="#projects" className="block border-b pb-3 hover:text-white">Projects</a>
          <a href="#contact" className="block hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
}
