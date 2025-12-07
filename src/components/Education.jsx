import { useTheme } from "../context/ThemeContext";

const education = [
  {
    school: "Vishveshwarya Technological University(VTU)",
    logo: "/vtu.png",
    degree: "B.Tech. in Computer Science",
    period: "2022 - 2026",
    grade: "8.22 CGPA"
  },
  {
    school: "Moulana Azad PU College, Bidar",
    logo: "/azad.png",
    degree: "Pre-University",
    period: "2020 - 2022",
    grade: "68%"
  },
  {
    school: "Noor International Public School, Bidar",
    logo: "/ssvhs.png",
    degree: "SSLC",
    period: "2020",
    grade: "80%"
  },
];

export default function Education() {
  const { darkMode } = useTheme();

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} px-6 py-16 transition-colors duration-500`}>
      <h2 className={`${darkMode ? "text-teal-400" : "text-teal-600"} text-3xl font-bold mb-8`}>Education</h2>
      {education.map(edu => (
        <div className="flex items-center mb-6" key={edu.school}>
          <img src={edu.logo} alt={edu.school} className="w-14 h-14 rounded-full bg-gray-200 mr-6 object-cover" />
          <div>
            <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-lg font-bold`}>{edu.school}</h3>
            <div className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{edu.degree}</div>
            <div className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>{edu.period} | {edu.grade}</div>
          </div>
        </div>
      ))}
      
    </section>
  );
}
