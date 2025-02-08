import React from "react";

export default function Projects() {
  const projects = [
    {
      img: "/assets/images/dashboard.gif",
      title: "Dashboard Application",
      description: "Email: user@example.com Password: password123",
      link: "https://dashboard-analytics-x8x4.vercel.app/",
    },
    {
      img: "/assets/images/weath.gif",
      title: "Weather App",
      description: "Fetches weather details and 5-day forecast.",
      link: "https://weather-app-seven-pi-82.vercel.app/",
    },
    {
      img: "/assets/images/crypto.gif",
      title: "Crypto App",
      description: "Fetches different cryptocurrency data.",
      link: "https://fintechcrypto.vercel.app/",
    },
    {
      img: "/assets/images/food.gif",
      title: "Food Recipes App",
      description: "Find recipes using any ingredient.",
      link: "https://food-app-7hj.vercel.app",
    },
    {
      img: "/assets/images/textutility.gif",
      title: "Text Utility App",
      description: "Modify text styles, cases, and more.",
      link: "https://text-utility-pi.vercel.app/",
    },
    {
      img: "/assets/images/Chatbot.gif",
      title: "AI Chatbot",
      description: "A smart chatbot for answering queries.",
      link: "https://chat-ai-nu-flame.vercel.app/",
    },
    {
      img: "/assets/images/news.gif",
      title: "News App",
      description: "Fetches news based on different categories.",
      link: "https://india-fission-news.vercel.app/",
    },
    {
      img: "/assets/images/dashboard.gif",
      title: "Dashboard UI",
      description: "Dashboard with charts and a beautiful UI.",
      link: "https://dashboard-chi-sable.vercel.app/",
    },
    {
      img: "/assets/images/UI.gif",
      title: "Complex UI Design",
      description: "Responsive complex UI design.",
      link: "https://ui-design-page-one.vercel.app/",
    },
    {
      img: "/assets/images/stocks.gif",
      title: "Stocks App",
      description: "Stores stock data and NSE top news.",
      link: "https://stocksdata.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="bg-gray-900 py-16 px-8 text-white">
      <h3 className="text-sky-400 text-3xl font-semibold text-center mb-8">
        My Projects
        <hr className="border-sky-400 mt-2 w-24 mx-auto" />
      </h3>
      <p className="text-center text-gray-300 mb-12">
        Here are some of my projects you may like.
      </p>

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-2xl shadow-lg hover:shadow-sky-500 transition duration-300 flex flex-col items-center w-[calc(25%-2rem)] max-w-[300px] min-w-[300px]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <h4 className="text-xl text-sky-400 mt-4 font-semibold text-center">
              {project.title}
            </h4>
            <p className="text-gray-300 text-sm text-center mt-2">
              {project.description}
            </p>
            <a href={project.link} target="_blank" className="mt-4">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg">
                Visit
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
