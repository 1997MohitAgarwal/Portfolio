import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div id="contact" className="flex items-center justify-center min-h-screen bg-black text-white px-6 py-5">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mb-8">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me through any of the following channels!
        </p>

        <div className="space-y-6">
          <div className="flex flex-col shadow-md hover:shadow-sky-500 transition items-center bg-gray-700 p-4 rounded-lg text-center">
            <FaPhone className="text-blue-400 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-300">+91 91012 48329</p>
          </div>

          <div className="flex flex-col shadow-md hover:shadow-sky-500 transition items-center bg-gray-700 p-4 rounded-lg text-center">
            <FaEnvelope className="text-blue-400 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-300 break-words text-sm sm:text-base">
              mohitagarwal4567@gmail.com
            </p>
          </div>

          <div className="flex flex-col shadow-md hover:shadow-sky-500 transition items-center bg-gray-700 p-4 rounded-lg text-center">
            <FaMapMarkerAlt className="text-blue-400 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-300">Guwahati, Assam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
