import { useTheme } from "../context/ThemeContext";

const projects = [

  {
    title: "e-Virtual study assistant",
    description: "The virtual study assistant is a platform designed to support students in enhancing their learning and academic performance. It includes a voice assistant for seamless interaction, and a menu bar offering organized access to Labs (Replit, Google Colab, Jupyter Notebook), Notes (VTU Circle, Backbenchers, VTU Resources), and Online Courses (Coursera, Microsoft Learn, Udemy, Guvi). By integrating these tools and educational resources, the assistant provides a comprehensive, interactive environment that aids students in practical coding, accessing study materials, and enrolling in quality online courses, ultimately helping them achieve better academic results.",
    tech: ["HTML","CSS","Javascript"],
    link: "#",
  },
   {
    title: "MedSync: Healthcare Platform",
    description: "MedSync is an integrated blockchain-based supply chain management system designed for healthcare environments, connecting patients, doctors, staff, and pharmacies. The platform leverages blockchain technology to ensure secure, transparent, and tamper-proof tracking of medical products and transactions, improving efficiency, reducing fraud, and ensuring the authenticity of medicines and medical records throughout the supply chain.",
    tech: ["React", "Flask", "Supabase", "Tailwind CSS"],
    link: "#",
  },
  // Add more as needed
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} px-6 py-16 transition-colors duration-500`}>
      <h2 className={`${darkMode ? "text-teal-400" : "text-teal-600"} text-3xl font-bold mb-8 text-center`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-6 rounded-xl shadow-md transition-colors`}
          >
            <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-xl font-bold mb-2`}>{proj.title}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>{proj.description}</p>
            <div className="mb-2">
              <span className={`${darkMode ? "text-teal-400" : "text-teal-600"} font-semibold`}>Tech:</span>
              <span className={`${darkMode ? "text-gray-400" : "text-gray-600"} ml-2`}>{proj.tech.join(", ")}</span>
            </div>
            <a href={proj.link} className={`${darkMode ? "text-teal-300" : "text-teal-500"} hover:underline`}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
