import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "e-Virtual Study Assistant",
    description:
      "An educational platform designed to improve student learning through integrated coding labs, study resources, notes, online courses, and voice assistant support.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    emoji: "📚",
  },

  {
    title: "MedSync: Healthcare Platform",
    description:
      "A blockchain-powered healthcare supply chain management platform ensuring secure, transparent, and tamper-proof tracking of medicines and medical transactions.",
    tech: ["React", "Flask", "Supabase", "Tailwind CSS"],
    link: "#",
    emoji: "🏥",
  },

  {
    title: "HireNest: Recruitment System",
    description:
      "A full-stack recruitment and job management platform with OTP authentication, cloud-based resume storage, and scalable hiring workflow management.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "Bootstrap",
    ],
    link: "#",
    emoji: "💼",
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-gradient-to-br from-cyan-50 via-white to-teal-50"
      }`}
    >
      <section
  id="projects"
  className={`px-4 sm:px-6 py-16 sm:py-20`}
></section>
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
          🚀 Featured Work
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-black mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          My{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-lg leading-8 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          A collection of innovative projects showcasing my experience in
          full stack development, healthcare systems, machine learning,
          and modern scalable web applications.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              darkMode
                ? "bg-white/10 border-white/10"
                : "bg-white/40 border-white/30"
            }`}
          >
            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 to-teal-500/10"></div>

            {/* Card Content */}
            <div className="relative p-6 sm:p-8 flex flex-col h-full">
              
              {/* Top Section */}
              <div className="flex items-start justify-between mb-5">
                
                {/* Emoji Icon */}
                <div className="relative">
                  
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-teal-500/30 blur-xl"></div>

                  <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl text-3xl backdrop-blur-xl border border-white/20 bg-white/10 shadow-2xl">
                    {proj.emoji}
                  </div>
                </div>

                {/* Number */}
                <div
                  className={`text-6xl font-black opacity-10 ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  0{index + 1}
                </div>
              </div>

              {/* Project Title */}
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {proj.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm sm:text-base leading-8 mb-6 flex-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md ${
                      darkMode
                        ? "bg-white/10 text-cyan-300 border border-white/10"
                        : "bg-white/50 text-teal-700 border border-white/20"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={proj.link}
                className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Project

                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    
  );
  
}