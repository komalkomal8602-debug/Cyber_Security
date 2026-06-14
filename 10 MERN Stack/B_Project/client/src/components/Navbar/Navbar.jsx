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
} from "react-icons/fa";

const menudata = [
  {
    name: "WBA",
    dropdownmenu: [
      { name: "WBA HISTORY", slug: "/wba-history" },
      { name: "RULES", slug: "/rules" },
      { name: "LEADERSHIP", slug: "/leadership" },
    ],
  },
  {
    name: "NEWS",
    dropdownmenu: [
      { name: "LATEST NEWS", slug: "/latest-news" },
      { name: "PRESS RELEASE", slug: "/press-release" },
      { name: "EVENTS", slug: "/events" },
    ],
  },
  {
    name: "CHAMPIONSHIPS",
    dropdownmenu: [
      { name: "WORLD TITLE", slug: "/world-title" },
      { name: "INTERCONTINENTAL", slug: "/intercontinental" },
      { name: "YOUTH TITLE", slug: "/youth-title" },
    ],
  },
  {
    name: "RANKINGS",
    dropdownmenu: [
      { name: "MEN", slug: "/men" },
      { name: "WOMEN", slug: "/women" },
      { name: "YOUTH", slug: "/youth" },
    ],
  },
  { name: "RESULTS", slug: "/results" },
  { name: "SCHEDULE", slug: "/schedule" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-20">
          {/* Top Section */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <img src="/logo.png" alt=" wba logo" />
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="flex items-center gap-2 px-25 py-2 rounded-lg bg-blue-600 text-white">
                <FaSearch />
                Search
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border">
                <FaUserPlus />
                Sign Up
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border">
                <FaSignInAlt />
                Login
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full border"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden gap-3 items-center">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex justify-center gap-8 xl:gap-12 py-4">
              {menudata.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-2 font-semibold hover:text-blue-500 transition">
                    {item.name}
                    {item.dropdownmenu && <FaChevronDown size={12} />}
                  </button>

                  {item.dropdownmenu && activeDropdown === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`absolute top-full left-0 mt-3 w-60 rounded-xl shadow-xl overflow-hidden ${
                        darkMode
                          ? "bg-gray-900"
                          : "bg-white"
                      }`}
                    >
                      {item.dropdownmenu.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.slug}
                            className="block px-5 py-3 hover:bg-blue-500 hover:text-white"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden ${
                darkMode
                  ? "bg-gray-900"
                  : "bg-white"
              } border-t`}
            >
              <ul className="p-5 space-y-4">
                {menudata.map((item, index) => (
                  <li key={index}>
                    <button className="font-semibold w-full text-left">
                      {item.name}
                    </button>

                    {item.dropdownmenu && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.dropdownmenu.map((sub, i) => (
                          <li key={i}>
                            <a href={sub.slug}>{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                <div className="pt-4 space-y-3">
                  <button className="w-full py-2 rounded bg-blue-600 text-white">
                    Search
                  </button>

                  <button className="w-full py-2 rounded border">
                    Sign Up
                  </button>

                  <button className="w-full py-2 rounded border">
                    Login
                  </button>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}