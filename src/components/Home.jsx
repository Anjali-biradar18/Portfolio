import { useTheme } from "../context/ThemeContext";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Anjali-biradar18",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.76.61-3.34-1.2-3.34-1.2-.41-1.07-1.01-1.35-1.01-1.35-.83-.58.06-.57.06-.57.92.07 1.4.97 1.4.97.81 1.41 2.12 1.01 2.65.77.08-.6.32-1.01.58-1.25-2.2-.26-4.51-1.13-4.51-5 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.02A9.2 9.2 0 0112 6.79a9.2 9.2 0 012.51.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.88-2.31 4.74-4.52 4.99.33.28.62.83.62 1.69 0 1.22-.01 2.2-.01 2.5 0 .27.18.58.69.48A10 10 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
    isButton: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anjali-biradar-819620360?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAjBI9i%2F3TpmTXtI3q8gV1w%3D%3D",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-8h3zm-1.5-9.3c-1 0-1.5-.7-1.5-1.4 0-.8.5-1.5 1.6-1.5 1 0 1.5.7 1.5 1.5-.1.7-.6 1.4-1.6 1.4zm13.5 9.3h-3v-4c0-1-.02-2.2-1.36-2.2-1.36 0-1.57 1.1-1.57 2.1v4.1h-3v-8h2.9v1.1h.04c.4-.7 1.45-1.4 2.98-1.4 3.2 0 3.8 2.1 3.8 4.8v5.5z" />
      </svg>
    ),
    isButton: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+917619325056",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
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
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} min-h-screen relative transition-all duration-500`}>
      {/* Social links + Light/Dark theme toggle in fixed floating card */}
      <nav className="flex justify-center fixed top-6 left-1/2 -translate-x-1/2 z-30 animate-fade-in animation-delay-200">
        <div className={`flex items-center gap-7 px-8 py-4 rounded-full ${darkMode ? "bg-gray-900" : "bg-white"} shadow-lg border border-teal-400`}>
          {socialLinks.map((link, idx) =>
            link.isButton ? (
              <button
                key={idx}
                onClick={() => setDarkMode(!darkMode)}
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className={`p-2 rounded-full transition focus:outline-none ${darkMode ? "text-yellow-300 hover:bg-gray-800" : "text-yellow-500 hover:bg-teal-100"}`}
                aria-label="Toggle light/dark mode"
                type="button"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" fill="#fde047" stroke="none" />
                    <g stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                title={link.name}
                className={`p-2 rounded-full transition ${darkMode ? "text-teal-300 hover:bg-gray-800" : "text-teal-600 hover:bg-teal-100"}`}
              >
                {link.icon}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 sm:px-2 pt-32 sm:pt-10 pb-12 max-w-7xl mx-auto">
        <div className="flex-1 animate-slide-up">
          <h1 className={`text-5xl mt-80 md:text-6xl font-extrabold mb-4 ${darkMode ? "text-white" : "text-gray-900"} animation-delay-200`}>
            Hey, I'm <span className="text-teal-400">Anjali</span>!
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-2xl ${darkMode ? "text-gray-300" : "text-gray-800"} animate-fade-in animation-delay-400`}>
            Passionate data scientist with a knack for transforming complex data into actionable insights. <span className="text-teal-200">Machine learning enthusiast</span> and lifelong learner dedicated to building scalable predictive models and data-driven solutions that empower businesses and drive innovation.
          </p>
        </div>
        <div className="flex flex-col items-center mt-70 animate-fade-in animation-delay-600">
          <img
            src="/profile.png"
            alt="Profile"
            className="mt-20 rounded-full w-96 h-96 object-cover border-4 border-teal-400 shadow-lg animate-slide-up"
            style={{ boxShadow: darkMode ? "0 0 28px #14b8a64d" : "0 0 28px #30b3a64d", width: "27rem", height: "27rem" }}
          />
        </div>
      </div>
    </section>
  );
}
