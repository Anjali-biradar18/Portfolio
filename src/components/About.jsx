import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-12 px-6 flex flex-col items-center text-center rounded-lg shadow-md max-w-full mx-auto transition-colors ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-teal-400 font-bold text-3xl mb-4">About</h2>
      <p className={`${darkMode ? "text-gray-200" : "text-gray-800"} max-w-3xl mb-5 text-lg`}>
        Hi, I'm a <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>full-stack developer</span> who enjoys making the web faster, smarter, and friendlier!
        I love collaborating and bringing ideas to life in real teams. Currently exploring exciting AI integrations and building healthcare management platforms.
      </p>
      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-block px-5 py-2 border border-teal-400 rounded-full font-bold mt-4 shadow transition ${
    darkMode
      ? "text-teal-400 hover:bg-teal-400 hover:text-gray-900"
      : "text-teal-600 hover:bg-teal-600 hover:text-white"
  }`}
>
  Download CV <span role="img" aria-label="cv">📄</span>
</a>
    </section>
  );
}
