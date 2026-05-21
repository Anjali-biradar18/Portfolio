import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useTheme();

 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.target);

  // Hidden Fields
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append(
    "_subject",
    "New Portfolio Contact Message"
  );

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/biradaranjali23@gmail.com",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success === "true") {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 px-4 sm:px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617]"
          : "bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-teal-400/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        
        <div
          className={`inline-flex items-center px-5 py-2 rounded-full border backdrop-blur-xl mb-6 ${
            darkMode
              ? "bg-white/10 border-white/10 text-cyan-300"
              : "bg-white/50 border-white/30 text-teal-700"
          }`}
        >
          📩 CONTACT ME
        </div>

        <h2
          className={`text-5xl sm:text-6xl font-black mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Let's{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p
          className={`text-base sm:text-lg leading-8 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Have a project idea, collaboration opportunity, or just want
          to say hello? Feel free to reach out anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info Card */}
        <div
          className={`relative overflow-hidden rounded-[35px] border backdrop-blur-2xl p-8 sm:p-10 ${
            darkMode
              ? "bg-white/10 border-white/10"
              : "bg-white/60 border-white/30"
          }`}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-500/10"></div>

          <div className="relative">
            
            <h3
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Information
            </h3>

            {/* Email */}
            <div
              className={`group flex items-center gap-5 mb-8 p-5 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white/10 hover:bg-white/15"
                  : "bg-white/70 hover:bg-white"
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center text-white text-xl shadow-xl">
                <FaEnvelope />
              </div>

              <div>
                <p
                  className={`text-sm mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Email
                </p>

                <a
                  href="mailto:biradaranjali23@gmail.com"
                  className={`font-semibold hover:text-cyan-400 transition ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                 biradaranjali23@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className={`group flex items-center gap-5 mb-8 p-5 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white/10 hover:bg-white/15"
                  : "bg-white/70 hover:bg-white"
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center text-white text-xl shadow-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p
                  className={`text-sm mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Phone
                </p>

                <a
                  href="tel:+7619325056"
                  className={`font-semibold hover:text-cyan-400 transition ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  +91 7619325056
                </a>
              </div>
            </div>

            {/* Location */}
            <div
              className={`group flex items-center gap-5 p-5 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white/10 hover:bg-white/15"
                  : "bg-white/70 hover:bg-white"
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl shadow-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p
                  className={`text-sm mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Location
                </p>

                <p
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Bidar, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`relative overflow-hidden rounded-[35px] border backdrop-blur-2xl p-8 sm:p-10 ${
            darkMode
              ? "bg-white/10 border-white/10"
              : "bg-white/60 border-white/30"
          }`}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-500/10"></div>

          <div className="relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                {/* Name */}
                <div>
                  <label
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
                        : "bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-teal-500"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
                        : "bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-teal-500"
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className={`w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300 resize-none ${
                      darkMode
                        ? "bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
                        : "bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-teal-500"
                    }`}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-2xl font-bold text-white text-lg shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-cyan-500 to-teal-500 ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div
                className={`p-8 rounded-3xl text-center ${
                  darkMode
                    ? "bg-white/10 text-cyan-300"
                    : "bg-teal-50 text-teal-700"
                }`}
              >
                <h3 className="text-3xl mb-4">🎉</h3>

                <h3 className="text-2xl font-bold mb-3">
                  Message Sent Successfully!
                </h3>

                <p className="text-base">
                  Thank you for reaching out. I’ll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;