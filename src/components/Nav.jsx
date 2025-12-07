import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.76.61-3.34-1.2-3.34-1.2-.41-1.07-1.01-1.35-1.01-1.35-.83-.58.06-.57.06-.57.92.07 1.4.97 1.4.97.81 1.41 2.12 1.01 2.65.77.08-.6.32-1.01.58-1.25-2.2-.26-4.51-1.13-4.51-5 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.02A9.2 9.2 0 0112 6.79a9.2 9.2 0 012.51.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.88-2.31 4.74-4.52 4.99.33.28.62.83.62 1.69 0 1.22-.01 2.2-.01 2.5 0 .27.18.58.69.48A10 10 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
    isButton: false,
  },
  // Add other social link objects similarly
  {
    name: "Theme Switch",
    icon: (
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
    ),
    isButton: true,
  },
];

export default function Nav() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="flex justify-center fixed top-6 left-1/2 -translate-x-1/2 z-30">
      <div
        className={`flex items-center gap-7 px-8 py-4 rounded-full ${
          darkMode ? "bg-gray-900" : "bg-white"
        } shadow-lg border border-teal-400`}
      >
        {socialLinks.map((link, idx) =>
          link.isButton ? (
            <button
              key={idx}
              onClick={() => setDarkMode((prev) => !prev)}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`p-2 rounded-full transition focus:outline-none ${
                darkMode ? "text-yellow-300 hover:bg-gray-800" : "text-yellow-500 hover:bg-teal-100"
              }`}
              aria-label="Toggle light/dark mode"
              type="button"
            >
              {link.icon}
            </button>
          ) : (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className={`p-2 rounded-full transition ${
                darkMode ? "text-teal-300 hover:bg-gray-800" : "text-teal-600 hover:bg-teal-100"
              }`}
            >
              {link.icon}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
