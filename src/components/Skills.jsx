import { useTheme } from "../context/ThemeContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGit,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiPython,
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiThymeleaf,
  SiEclipseide,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
    color: "from-yellow-300 to-yellow-500",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "from-orange-500 to-red-400",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "from-blue-400 to-sky-500",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "from-sky-400 to-cyan-500",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "from-indigo-400 to-blue-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-500 to-lime-500",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "from-yellow-400 to-blue-400",
  },
  {
    name: "Git",
    icon: <FaGit />,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "from-gray-500 to-gray-800",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Hibernate",
    icon: <SiHibernate />,
    color: "from-gray-400 to-gray-600",
  },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-24 px-4 sm:px-6 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-[#f8fbff]"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-teal-400/20 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:28px_28px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        
        <div
          className={`inline-flex items-center px-5 py-2 rounded-full backdrop-blur-xl border mb-6 ${
            darkMode
              ? "bg-white/10 border-white/10 text-cyan-300"
              : "bg-white border-gray-200 text-teal-600 shadow-sm"
          }`}
        >
          ⚡ MY SKILLS
        </div>

        <h2
          className={`text-5xl sm:text-6xl font-black mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Technical{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <p
          className={`text-base sm:text-lg leading-8 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Technologies and tools I use to build scalable,
          responsive, and modern full stack applications.
        </p>
      </div>

      {/* Skills Layout */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden rounded-[30px] p-[1px] transition-all duration-500 hover:-translate-y-3 ${
                darkMode
                  ? "bg-gradient-to-br from-white/20 to-white/5"
                  : "bg-gradient-to-br from-gray-200 to-white"
              }`}
            >
              {/* Inner Card */}
              <div
                className={`relative h-full rounded-[29px] p-6 sm:p-7 flex flex-col items-center justify-center backdrop-blur-2xl overflow-hidden ${
                  darkMode
                    ? "bg-[#0f172ae6]"
                    : "bg-white/90"
                }`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${skill.color} blur-2xl`}
                ></div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/[0.03]"></div>

                {/* Icon Circle */}
                <div
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-4xl bg-gradient-to-r ${skill.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3
                  className={`relative text-sm sm:text-lg font-bold text-center ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </h3>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${skill.color}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}