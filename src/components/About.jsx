// import { useTheme } from "../context/ThemeContext";

// export default function About() {
//   const { darkMode } = useTheme();

//   return (
//     <section
//       className={`py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center text-center rounded-2xl shadow-md max-w-full mx-auto transition-colors duration-300 ${
//         darkMode
//           ? "bg-gray-900 text-gray-200"
//           : "bg-white text-gray-900"
//       }`}
//     >
//       {/* Heading */}
//       <h2
//         className={`text-3xl sm:text-4xl font-bold mb-5 ${
//           darkMode ? "text-yellow-400" : "text-teal-600"
//         }`}
//       >
//         About Me
//       </h2>

//       {/* Description */}
//       <p
//         className={`max-w-3xl mb-6 text-sm sm:text-lg leading-7 sm:leading-8 px-2 ${
//           darkMode ? "text-gray-300" : "text-gray-700"
//         }`}
//       >
//         Hi, I'm a{" "}
//         <span
//           className={`font-semibold ${
//             darkMode ? "text-white" : "text-black"
//           }`}
//         >
//           full-stack developer
//         </span>{" "}
//         passionate about building modern, scalable, and user-friendly web
//         applications. I enjoy transforming ideas into real-world digital
//         solutions through clean code, responsive design, and efficient
//         backend systems.

//         <br />
//         <br />

//         I love collaborating with teams, learning new technologies, and
//         exploring AI-powered integrations. Currently, I’m focused on
//         developing healthcare management systems and innovative software
//         solutions that create meaningful impact.
//       </p>

//       {/* Download CV Button */}
//       <a
//         href="/resume.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:scale-105 ${
//           darkMode
//             ? "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
//             : "bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
//         }`}
//       >
//         Download CV
//         <span role="img" aria-label="cv">
//           📄
//         </span>
//       </a>
//     </section>
//   );
// }