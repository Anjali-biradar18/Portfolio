import { useTheme } from "../context/ThemeContext";
import jspLogo from "../assets/jsp.png";
import codealphaLogo from "../assets/codealpha.png";


const experiences = [
  {
    company: "CodeAlpha",
    logo: codealphaLogo,
    role: "Data Science Intern",
    period: "September 2025",
    details: [
      "Built an Iris Flower Classification model that accurately categorizes species using machine learning algorithms.",
      "Developed a Car Price Prediction system leveraging regression techniques for accurate vehicle price estimation.",
      "Created an Unemployment Prediction model analyzing economic indicators to forecast employment trends.",
    ],
  },

  {
    company: "JSpiders",
    logo: jspLogo,
    role: "Java Full Stack Developer Intern",
    period: "January 2026 – Present",
    location: "Rajajinagar, Bengaluru, Karnataka, India",
    details: [
      "Working with Core Java, JDBC, Servlets, and Spring Framework for backend development.",
      "Building responsive frontend applications using HTML, CSS, JavaScript, and React.js.",
      "Learning relational database management using MySQL and PostgreSQL.",
      "Developing real-time projects and enhancing problem-solving skills through hands-on practice.",
    ],
  },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-gradient-to-br from-cyan-50 via-white to-teal-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-teal-400/20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="relative max-w-5xl mx-auto text-center mb-16 z-10">
        
        {/* Tag */}
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border backdrop-blur-md ${
            darkMode
              ? "bg-white/10 border-white/20 text-cyan-300"
              : "bg-white/40 border-white/30 text-teal-700"
          }`}
        >
          💼 Professional Journey
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-black mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Work{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-lg leading-8 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          My professional experience includes internships, real-time
          projects, and hands-on training focused on full stack
          development, machine learning, and scalable web technologies.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              darkMode
                ? "bg-white/10 border-white/10"
                : "bg-white/40 border-white/30"
            }`}
          >
            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 to-teal-500/10"></div>

            {/* Card Content */}
            <div className="relative p-6 sm:p-8">
              
              {/* Top Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                
                {/* Logo */}
                <div className="relative">
                  
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-teal-500/30 blur-xl"></div>

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/30 bg-white p-2 shadow-2xl"
                  />
                </div>

                {/* Company Info */}
                <div className="flex-1 text-center sm:text-left">
                  
                  {/* Company */}
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.company}
                  </h3>

                  {/* Role */}
                  <p
                    className={`text-sm sm:text-lg font-semibold mb-3 ${
                      darkMode ? "text-cyan-300" : "text-teal-700"
                    }`}
                  >
                    {exp.role}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                    
                    {/* Period */}
                    <div
                      className={`px-4 py-2 rounded-full text-sm backdrop-blur-md ${
                        darkMode
                          ? "bg-white/10 text-gray-300"
                          : "bg-white/50 text-gray-700"
                      }`}
                    >
                      📅 {exp.period}
                    </div>

                    {/* Location */}
                    {exp.location && (
                      <div
                        className={`px-4 py-2 rounded-full text-sm backdrop-blur-md ${
                          darkMode
                            ? "bg-white/10 text-gray-300"
                            : "bg-white/50 text-gray-700"
                        }`}
                      >
                        📍 Bengaluru
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Details */}
              <ul
                className={`space-y-4 text-sm sm:text-base leading-7 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {exp.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1">✦</span>

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Number */}
              <div
                className={`absolute top-5 right-5 text-6xl font-black opacity-10 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}