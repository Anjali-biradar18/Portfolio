import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Anjali-biradar18",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.76.61-3.34-1.2-3.34-1.2-.41-1.07-1.01-1.35-1.01-1.35-.83-.58.06-.57.06-.57.92.07 1.4.97 1.4.97.81 1.41 2.12 1.01 2.65.77.08-.6.32-1.01.58-1.25-2.2-.26-4.51-1.13-4.51-5 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.02A9.2 9.2 0 0112 6.79a9.2 9.2 0 012.51.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.88-2.31 4.74-4.52 4.99.33.28.62.83.62 1.69 0 1.22-.01 2.2-.01 2.5 0 .27.18.58.69.48A10 10 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
    isButton: false,
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anjali-biradar-819620360",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-8h3zm-1.5-9.3c-1 0-1.5-.7-1.5-1.4 0-.8.5-1.5 1.6-1.5 1 0 1.5.7 1.5 1.5-.1.7-.6 1.4-1.6 1.4zm13.5 9.3h-3v-4c0-1-.02-2.2-1.36-2.2-1.36 0-1.57 1.1-1.57 2.1v4.1h-3v-8h2.9v1.1h.04c.4-.7 1.45-1.4 2.98-1.4 3.2 0 3.8 2.1 3.8 4.8v5.5z" />
      </svg>
    ),
    isButton: false,
  },

  {
    name: "WhatsApp",
    href: "https://wa.me/917619325056",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M16.007 4.005A12.012 12.012 0 0 0 3.995 16.026c0 2.118.554 4.15 1.617 5.97l-1.067 3.91 4.015-1.053A12.007 12.007 0 1 0 16.007 4.005z" />
      </svg>
    ),
    isButton: false,
  },

  {
    name: "Theme Switch",
    icon: null,
    isButton: true,
  },
];

export default function Home() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section
      className={`min-h-screen overflow-hidden relative transition-all duration-500 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-gradient-to-br from-cyan-50 via-white to-teal-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-teal-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      {/* Glassmorphism Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto flex justify-center">
        <div
          className={`flex items-center gap-3 sm:gap-5 px-4 sm:px-7 py-3 rounded-full border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-white/40 border-white/30"
          }`}
        >
          {socialLinks.map((link, idx) =>
            link.isButton ? (
              <button
                key={idx}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-yellow-300 hover:bg-white/10"
                    : "text-yellow-500 hover:bg-white/50"
                }`}
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      fill="#fde047"
                      stroke="none"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
                  </svg>
                )}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-cyan-300 hover:bg-white/10"
                    : "text-teal-700 hover:bg-white/50"
                }`}
              >
                {link.icon}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 pt-32 sm:pt-36 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          
          {/* Tag */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border backdrop-blur-md ${
              darkMode
                ? "bg-white/10 border-white/20 text-cyan-300"
                : "bg-white/40 border-white/30 text-teal-700"
            }`}
          >
            ✨ Java Full Stack Developer
          </div>

          {/* Main Heading */}
        <h1
  className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
  Hi, I'm{" "}

  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-500 bg-clip-text text-transparent">
    Anjali
  </span>

  <br />

  <span
    className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${
      darkMode ? "text-gray-300" : "text-gray-700"
    }`}
  >
    Full Stack Developer
  </span>
</h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg lg:text-xl leading-8 max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Passionate full stack developer focused on building scalable,
            interactive, and visually stunning applications using modern
            technologies like Java, Spring Boot, React.js, MySQL, and
            PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-10">
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>

           <a
  href="#projects"
  className={`px-7 py-3 rounded-full border backdrop-blur-xl font-semibold transition-all duration-300 hover:scale-105 ${
    darkMode
      ? "bg-white/10 border-white/20 text-white"
      : "bg-white/40 border-white/30 text-gray-800"
  }`}
>
  View Projects
</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          
          {/* Glow Ring */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-r from-cyan-400/30 to-teal-500/30 blur-3xl animate-pulse"></div>

          {/* Glass Card */}
          <div
            className={`relative p-4 rounded-[40px] border backdrop-blur-2xl shadow-2xl ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-white/40 border-white/30"
            }`}
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="rounded-[30px] object-cover
              w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}