import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaUserPlus,
  FaSignInAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPlay,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";

export const menudata = [
  {
    name: "WBA",
    dropdownmenu: [
      { name: "WBA HISTORY", slug: "/wba-history" },
      { name: "NBA AND WBA PRESIDENTS", slug: "/nba-and-wba-presidents" },
      { name: "WBA DIRECTORY MEMBERS", slug: "/wba-directory-members" },
      { name: "VISION", slug: "/vision" },
    ],
  },
  {
    name: "NEWS",
    dropdownmenu: [
      { name: "BOXING NEWS", slug: "/boxing-news" },
      { name: "FEMALE BOXING NEWS", slug: "/wba-female" },
      { name: "WBA EVENTS", slug: "/events" },
    ],
  },
  {
    name: "CHAMPIONSHIPS",
    dropdownmenu: [
      { name: "WBA REGULATIONS", slug: "/wba-regulations" },
      { name: "CURRENT WBA CHAMPIONS", slug: "/current-wba-champions" },
    ],
  },
  {
    name: "RANKINGS",
    dropdownmenu: [
      { name: "WBA RANKINGS", slug: "/wba-ranking" },
      { name: "WBA FEMALE RANKINGS", slug: "/wba-female-ranking" },
    ],
  },
  { name: "RESULTS", slug: "/results" },
  { name: "SCHEDULE", slug: "/schedule" },
];

export default function Website() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-[#050505] text-white"
          : "bg-[#f5f7fb] text-gray-900"
      }`}
    >
      {/* ================= NAVBAR ================= */}

      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
          darkMode
            ? "bg-black/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="logo"
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              />
            </motion.div>

            {/* DESKTOP NAV */}
            <ul className="hidden xl:flex items-center gap-10 2xl:gap-14">
              {menudata.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-2 font-semibold hover:text-red-500 transition">
                    {item.name}
                    {item.dropdownmenu && (
                      <FaChevronDown className="text-xs" />
                    )}
                  </button>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {openDropdown === index && item.dropdownmenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className={`absolute top-10 left-0 w-[300px] rounded-2xl shadow-2xl overflow-hidden ${
                          darkMode
                            ? "bg-zinc-900 border border-zinc-700"
                            : "bg-white border border-gray-200"
                        }`}
                      >
                        {item.dropdownmenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.slug}
                            className={`block px-5 py-4 transition ${
                              darkMode
                                ? "hover:bg-zinc-800"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* RIGHT BUTTONS */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="p-3 rounded-full bg-red-600 text-white hover:scale-110 transition">
                <FaSearch />
              </button>

              <button className="px-5 py-2 rounded-full bg-blue-600 text-white flex items-center gap-2">
                <FaSignInAlt />
                Login
              </button>

              <button className="px-5 py-2 rounded-full border flex items-center gap-2">
                <FaUserPlus />
                Sign Up
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full border hover:rotate-180 transition duration-500"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* MOBILE */}
            <div className="flex xl:hidden items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-2xl"
              >
                {mobileMenu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className={`fixed top-0 right-0 w-[85%] sm:w-[70%] h-screen z-50 p-6 ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">WBA MENU</h2>

              <button
                onClick={() => setMobileMenu(false)}
                className="text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            {menudata.map((item, index) => (
              <div key={index} className="mb-5">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === index ? null : index
                    )
                  }
                  className="w-full flex justify-between items-center py-3 border-b"
                >
                  {item.name}
                  {item.dropdownmenu && <FaChevronDown />}
                </button>

                <AnimatePresence>
                  {openDropdown === index && item.dropdownmenu && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      {item.dropdownmenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.slug}
                          className="block py-3 pl-4 text-gray-400 hover:text-red-500"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-red-500 font-semibold tracking-widest mb-4">
                WORLD CHAMPIONSHIP BOXING
              </p>

              <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-black leading-tight">
                THE FUTURE OF
                <span className="text-red-600"> BOXING </span>
                STARTS HERE
              </h1>

              <p
                className={`mt-6 text-lg leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Experience world-class boxing championships, rankings,
                schedules, live results, and legendary fighters all in one
                place.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition text-white flex items-center gap-3">
                  <FaPlay />
                  Watch Live
                </button>

                <button className="px-8 py-4 rounded-full border hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                  Explore Rankings
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop"
                alt="boxing"
                className="rounded-3xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover"
              />

              <div className="absolute -bottom-8 -left-8 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl">
                <h2 className="text-4xl font-black">125+</h2>
                <p className="text-gray-300">World Champions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}

      <section className="py-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {[
              {
                title: "Global Rankings",
                icon: <FaGlobe />,
                desc: "Updated worldwide boxing rankings and statistics.",
              },
              {
                title: "Championship Belts",
                icon: <FaTrophy />,
                desc: "Explore current champions and title holders.",
              },
              {
                title: "Live Boxing Events",
                icon: <FaPlay />,
                desc: "Watch upcoming fights and exclusive events.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border transition-all ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="text-4xl text-red-500 mb-6">
                  {card.icon}
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {card.title}
                </h2>

                <p
                  className={
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer
        className={`border-t py-10 ${
          darkMode
            ? "border-zinc-800 bg-black"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-2xl font-bold">
            WORLD BOXING ASSOCIATION
          </h2>

          <p className="mt-4 text-gray-400">
            © 2026 WBA. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}