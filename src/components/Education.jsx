import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";

export default function Education() {
  return (
    <div className="bg-gray-900 text-white py-5 px-8 md:px-16 lg:px-32" id="education">
      {/* Heading */}
      <h3 className="text-4xl mb-5 font-bold text-center mb-12 relative">
        Educational Qualification
        <span className="block w-32 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></span>
      </h3>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-sky-400 dark:border-sky-500 mx-auto max-w-3xl lg:max-w-4xl">
        {[
          {
            icon: <FaUniversity />,
            title: "SRM University",
            descr: "B.Tech, CSE (2016-2020)",
          },
          {
            icon: <FaSchool />,
            title: "DPS Numaligarh",
            descr: "Class XII, Science (2014-2015)",
          },
          {
            icon: <FaSchool />,
            title: "Agrasen Academy",
            descr: "Class X (2012-2013)",
          },
        ].map((edu, index) => (
          <div key={index} className="mb-10 ml-8 flex flex-col items-start relative">
            {/* Icon */}
            <div className="absolute -left-14.5 top-10 w-12 h-12 flex items-center justify-center bg-sky-400 text-black rounded-full shadow-lg">
              {edu.icon}
            </div>

            {/* Content */}
            <div className="bg-black dark:bg-gray-800 text-white shadow-lg p-6 rounded-lg w-full">
              <h4 className="text-xl font-semibold text-sky-400">{edu.title}</h4>
              <p className="text-gray-300">{edu.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
