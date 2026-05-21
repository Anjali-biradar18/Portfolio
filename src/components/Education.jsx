import { useTheme } from "../context/ThemeContext";

const education = [
  {
    school: "Vishveshwarya Technological University (VTU)",
    logo: "/vtu.png",
    degree: "B.Tech in Computer Science",
    period: "2022 - 2026",
    grade: "8.22 CGPA",
  },
  {
    school: "Moulana Azad PU College, Bidar",
    logo: "/azad.png",
    degree: "Pre-University",
    period: "2020 - 2022",
    grade: "68%",
  },
  {
    school: "Noor International Public School, Bidar",
    logo: "/ssvhs.png",
    degree: "SSLC",
    period: "2020",
    grade: "80%",
  },
];

export default function Education() {
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
          🎓 Academic Journey
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-black mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          My{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-lg leading-8 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          My academic journey has helped me build a strong foundation in
          computer science, software engineering, and modern development
          technologies while continuously enhancing my technical and
          problem-solving abilities.
        </p>
      </div>

      {/* Education Cards */}
      <div className="relative max-w-5xl mx-auto flex flex-col gap-8 z-10">
        {education.map((edu, index) => (
          <div
            key={edu.school}
            className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode
                ? "bg-white/10 border-white/10"
                : "bg-white/40 border-white/30"
            }`}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 to-teal-500/10"></div>

            {/* Card Content */}
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8">
              
              {/* Logo */}
              <div className="relative">
                
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-teal-500/30 blur-xl"></div>

                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/30 bg-white p-2 shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                
                {/* School Name */}
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {edu.school}
                </h3>

                {/* Degree */}
                <p
                  className={`text-sm sm:text-lg font-medium mb-4 ${
                    darkMode ? "text-cyan-300" : "text-teal-700"
                  }`}
                >
                  {edu.degree}
                </p>

                {/* Bottom Info */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  
                  {/* Period */}
                  <div
                    className={`px-4 py-2 rounded-full text-sm backdrop-blur-md ${
                      darkMode
                        ? "bg-white/10 text-gray-300"
                        : "bg-white/50 text-gray-700"
                    }`}
                  >
                    📅 {edu.period}
                  </div>

                  {/* Grade */}
                  <div className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-lg">
                    ⭐ {edu.grade}
                  </div>
                </div>
              </div>

              {/* Number */}
              <div
                className={`absolute top-5 right-5 text-5xl font-black opacity-10 ${
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