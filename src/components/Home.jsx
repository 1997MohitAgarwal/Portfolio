import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div id="about" className="relative flex flex-col items-center py-5 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      <div className="relative z-10 text-center flex flex-col items-center animate-fade-in-down">
        <img
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 p-1 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src="/assets/images/profile.jpg"
          alt="profile"
        />
        <h4 className="mt-6 text-2xl md:text-3xl font-semibold flex items-center gap-2">
          Hi
          <span className="inline-block animate-wave">👋</span>I am Mohit
          Agarwal
        </h4>
        <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-2">
          FRONTEND DEVELOPER
        </h4>
        <a
          href="/assets/images/Mohit_Frontend.pdf"
          download
          className="mt-6 mb-4 border-2 border-blue-500 text-blue-500 font-semibold px-6 py-2 rounded-lg transition-all 
             duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-400/50 hover:bg-blue-500 hover:text-white 
             hover:no-underline"
        >
          Download CV
        </a>

        <h5 className="mt-6 text-lg md:text-xl font-medium text-gray-300">
          Passionate and Enthusiastic Frontend Developer
        </h5>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          INNOVATION IS MY PASSION !!
        </p>

        {/* New paragraph showcasing frontend developer skills */}
        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-300 px-6">
          I specialize in building responsive and interactive web applications
          using modern technologies like
          <span className="text-yellow-400 font-semibold">
            {" "}
            React.js, Next.js, HTML, CSS, Tailwind CSS, JavaScript and TypeScript
          </span>
          . My expertise lies in creating smooth user experiences with optimized
          performance, accessibility, and visually appealing designs.
        </p>

        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/mohitagarwal1238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/1997MohitAgarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
