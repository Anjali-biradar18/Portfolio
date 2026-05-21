import { useTheme } from "../context/ThemeContext";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGit, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPython, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiSpringboot, SiHibernate, SiPostgresql, SiSupabase, SiTailwindcss, SiThymeleaf } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { SiEclipseide } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    label: "Programming Languages",
    skills: [
      { name: 'Java',       icon: <FaJava        className="w-10 h-10 text-red-500" /> },
      { name: 'JavaScript', icon: <DiJavascript1  className="w-10 h-10 text-yellow-400" /> },
      { name: 'HTML',       icon: <FaHtml5        className="w-10 h-10 text-orange-500" /> },
      { name: 'CSS',        icon: <FaCss3Alt      className="w-10 h-10 text-blue-500" /> },
      { name: 'Python',     icon: <SiPython       className="w-10 h-10 text-yellow-500" /> },
    ],
  },
  {
    label: "Backend Frameworks",
    skills: [
      { name: 'Spring Boot',   icon: <SiSpringboot  className="w-10 h-10 text-green-500" /> },
      { name: 'Spring MVC',    icon: <SiSpringboot  className="w-10 h-10 text-green-400" /> },
      { name: 'Hibernate ORM', icon: <SiHibernate   className="w-10 h-10 text-gray-400" /> },
      { name: 'JDBC',          icon: <FaJava        className="w-10 h-10 text-red-400" /> },
      { name: 'Servlet',       icon: <FaJava        className="w-10 h-10 text-orange-400" /> },
    ],
  },
  {
    label: "Frontend Frameworks",
    skills: [
      { name: 'React.js',     icon: <FaReact       className="w-10 h-10 text-cyan-400" /> },
      { name: 'Thymeleaf',    icon: <SiThymeleaf   className="w-10 h-10 text-green-500" /> },
      { name: 'Bootstrap',    icon: <FaBootstrap   className="w-10 h-10 text-purple-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-10 h-10 text-sky-400" /> },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: 'MySQL',      icon: <SiMysql      className="w-10 h-10 text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-10 h-10 text-blue-400" /> },
      { name: 'Supabase',   icon: <SiSupabase   className="w-10 h-10 text-emerald-500" /> },
      { name: 'MongoDB',    icon: <SiMongodb    className="w-10 h-10 text-green-600" /> },
    ],
  },

  {
    label: "Tools & Platforms",
    skills: [
      { name: 'Git',     icon: <FaGit             className="w-10 h-10 text-orange-500" /> },
      { name: 'GitHub',  icon: <FaGithub          className="w-10 h-10 text-gray-400" /> },
    { name: 'VS Code', icon: <VscVscode className="w-10 h-10 text-blue-500" /> },
      { name: 'Eclipse', icon: <SiEclipseide      className="w-10 h-10 text-purple-500" /> },
    ],
  },
];

export default function Skills() {
  const { darkMode } = useTheme();

 return (
  <section
    className={`px-6 py-20 ${
      darkMode ? "bg-[#020617]" : "bg-white"
    }`}
  >
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2
        className={`text-4xl font-bold mb-5 ${
          darkMode ? "text-yellow-400" : "text-teal-600"
        }`}
      >
        What I Do
      </h2>

      <p
        className={`text-sm leading-7 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Full stack Java development, data analysis, predictive modeling,
        and scalable machine learning solutions. Always striving to extract
        meaningful insights and build impactful data-driven experiences.
      </p>
    </div>

    {/* Skills Container */}
    <div className="max-w-6xl mx-auto flex flex-col gap-14">
      {skillCategories.map((category) => (
        <div key={category.label} className="text-center">
          
          {/* Category Title */}
          <h3
            className={`text-lg font-bold uppercase tracking-wider mb-6 ${
              darkMode ? "text-yellow-400" : "text-teal-600"
            }`}
          >
            {category.label}
          </h3>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className={`group flex flex-col items-center justify-center
                w-28 h-28 rounded-2xl transition-all duration-300
                hover:-translate-y-2 hover:scale-105
                ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 shadow-lg shadow-black/20"
                    : "bg-gray-100 hover:bg-gray-200 shadow-md"
                }`}
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                <span
                  className={`text-xs font-semibold text-center px-1 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
}