import React from "react";

export default function Skills() {
  const skills = [
    { name: "React", src: "/assets/images/react-removebg-preview.png" },
    { name: "HTML", src: "/assets/images/html-removebg-preview.png" },
    { name: "JavaScript", src: "/assets/images/js-removebg-preview.png" },
    { name: "CSS", src: "/assets/images/css-removebg-preview.png" },
    { name: "Bootstrap", src: "/assets/images/boo-removebg-preview.png" },
    { name: "Redux", src: "/assets/images/redux1-removebg-preview.png" },
    { name: "Tailwind", src: "/assets/images/csstail-removebg-preview.png" },
    { name: "Next.js", src: "/assets/images/nextjs-removebg-preview.png" },
    { name: "TypeScript", src: "/assets/images/ts.png" },
    { name: "Git", src: "/assets/images/git-removebg-preview.png" },
    { name: "Chart.js", src: "/assets/images/chartjs-logo.png" },
    { name: "Vite", src: "/assets/images/vite.png" },
  ];

  return (
    <div id="skills" className="bg-black text-white py-16 px-6 text-center">
      {/* Section Title */}
      <h3 className="text-3xl font-bold inline-block border-b-4 border-yellow-500 pb-2">
        Skills
      </h3>

      {/* Main GIF */}
      <div className="flex justify-center mt-8">
        <img
          className="rounded-xl shadow-lg w-full max-w-[350px] hover:scale-105 transition-transform duration-300"
          src="/assets/images/main.gif"
          alt="Main GIF"
        />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-sky-500 flex flex-col items-center transition-transform duration-300 hover:scale-108"
          >
            <img src={skill.src} alt={skill.name} className="w-14 h-12 mb-2" />
            <p className="text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
