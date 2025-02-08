import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        
        <div>
          <p className="text-base">&copy; 2025 - Made with ❤️ by Mohit</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/1997MohitAgarwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mohitagarwal1238" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg transition duration-300">
            <FaLinkedin />
          </a>
        </div>

        <div className="flex space-x-5">
          <a href="#about" className="text-sm hover:text-white transition duration-300">About</a>
          <a href="#projects" className="text-sm hover:text-white transition duration-300">Projects</a>
          <a href="#contact" className="text-sm hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
