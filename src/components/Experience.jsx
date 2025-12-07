import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    company: "CodeAlpha",
    logo: "/codealpha.png",
    role: "data science  intern",
    period: "sept 2025",
    details: [
  "Built an Iris Flower Classification model that accurately categorizes species based on sepal and petal measurements using machine learning algorithms.",
  "Developed a Car Price Prediction system leveraging regression techniques to estimate vehicle prices from features like mileage, year, and brand.",
  "Created an Unemployment Prediction model analyzing economic indicators to forecast employment trends and support data-driven policy decisions.",
],
  },
  {
    company: "CodeAlpha",
    logo: "/codealpha.png",
    role: "frontend developer intern",
    period: "may 2025",
    details: [
  "Built an interactive gallery featuring dynamic content display, responsive design, and smooth animations.",
  "Developed a fully functional calculator with intuitive user interface and accurate computational capabilities.",
  "Created user-friendly interfaces focused on seamless navigation, real-time feedback, and enhanced user experience.",
],
  },
  // {
  //   company: "HealthTech Labs",
  //   logo: "/healthtech-labs-logo.png",
  //   role: "Junior Developer",
  //   period: "2023 - 2024",
  //   details: [
  //     "Improved app performance by 40%",
  //     "Collaborated on database refactor and migration",
  //   ],
  // },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} px-6 py-16 transition-colors duration-500`}>
      <h2 className={`${darkMode ? "text-teal-400" : "text-teal-600"} text-3xl font-bold mb-8 text-center`}>Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-6 rounded-xl shadow-md flex flex-col transition-colors`}
          >
            <div className="flex items-center mb-4">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full bg-gray-200 object-cover mr-4" />
              <div>
                <div className={`${darkMode ? "text-white" : "text-gray-900"} text-xl font-bold`}>{exp.company}</div>
                <div className={`${darkMode ? "text-teal-400" : "text-teal-600"} font-bold`}>{exp.role}</div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>{exp.period}</div>
              </div>
            </div>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-900"} list-disc ml-5 flex-1`}>
              {exp.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
