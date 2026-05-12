// client/src/Components/Navbar/Navbar.jsx

import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiLogIn,
  FiHome,
} from "react-icons/fi";

// ✅ FIXED IMPORT
import { menudata } from "../Data/data.jsx";

const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return {
      isDarkMode: false,
      toggleTheme: () => {},
    };
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function NavbarContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const { isDarkMode, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },

    visible: { opacity: 1, y: 0, scale: 1 },

    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },

    visible: { opacity: 1, x: 0 },

    exit: { opacity: 0, x: "100%" },
  };

  return (
    <nav
     className={`w-full fixed top-0 z-50 overflow-x-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      } border-b ${
        isDarkMode ? "border-green-800/30" : "border-green-200"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* TOP HEADER */}

        <div
          className={`py-2 text-center border-b transition-colors duration-300 ${
            isDarkMode ? "border-green-900/30" : "border-green-100"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-xs sm:text-sm md:text-base font-bold tracking-wider ${
              isDarkMode ? "text-green-400" : "text-green-700"
            }`}
          >
            🥊 APEX BOXING CLUB - PREMIUM BOXING GEAR & EQUIPMENT 🥊
          </motion.h1>
        </div>

        {/* MAIN NAVBAR */}

        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
          {/* LOGO */}

          <Link to="/" className="flex-shrink-0 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain rounded-full ring-2 ring-green-500 hover:ring-4 transition-all duration-300"
                />

                <div className="absolute inset-0 rounded-full bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div>
                <h1
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  RING<span className="text-green-500">MASTER</span>
                </h1>

                <p
                  className={`hidden sm:block text-xs transition-colors duration-300 ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Professional Boxing Equipment
                </p>
              </div>
            </div>
          </Link>

          {/* SEARCH */}

          <div className="hidden md:block flex-1 max-w-md lg:max-w-lg xl:max-w-xl mx-4 lg:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-full outline-none border ${
                  isDarkMode
                    ? "bg-gray-900 text-white border-gray-700"
                    : "bg-gray-100 text-black border-gray-200"
                }`}
              />

              <FiSearch
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
            </div>
          </div>

          {/* RIGHT ICONS */}

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* THEME */}

            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-900 text-yellow-400"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>

            {/* MOBILE SEARCH */}

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-full hover:bg-green-500/10"
            >
              <FiSearch
                size={20}
                className={isDarkMode ? "text-white" : "text-black"}
              />
            </button>

            {/* USER */}

            <Link to="/account">
              <button className="hidden sm:block p-2 rounded-full hover:bg-green-500/10">
                <FiUser
                  size={20}
                  className={isDarkMode ? "text-white" : "text-black"}
                />
              </button>
            </Link>

            {/* CART */}

            <Link to="/cart">
              <button className="relative p-2 rounded-full hover:bg-green-500/10">
                <FiShoppingCart
                  size={20}
                  className={isDarkMode ? "text-white" : "text-black"}
                />

                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </Link>

            {/* MOBILE MENU */}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-green-500/10"
            >
              {isMobileMenuOpen ? (
                <FiX
                  size={24}
                  className={isDarkMode ? "text-white" : "text-black"}
                />
              ) : (
                <FiMenu
                  size={24}
                  className={isDarkMode ? "text-white" : "text-black"}
                />
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP MENU */}

        <div className="hidden lg:block">
<ul className="flex flex-wrap justify-center items-center py-2 gap-1 xl:gap-2 overflow-hidden">            {/* HOME */}

            <li>
              <Link to="/">
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    isDarkMode
                      ? "hover:bg-gray-900"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiHome
                    size={18}
                    className={
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }
                  />

                  <span
                    className={
                      isDarkMode ? "text-white" : "text-black"
                    }
                  >
                    Home
                  </span>
                </div>
              </Link>
            </li>

            {/* MENU */}

            {menudata.map((item, index) => (
              <div key={index} className="relative group">
                <li className="relative cursor-pointer">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${
                      isDarkMode
                        ? "hover:bg-gray-900"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={
                        isDarkMode
                          ? "text-green-400"
                          : "text-green-600"
                      }
                    >
                      {item.icon}
                    </span>

                    <Link
                      to={item.slug}
                      className={
                        isDarkMode ? "text-white" : "text-black"
                      }
                    >
                      {item.name}
                    </Link>

                    {item.badge && (
                      <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.dropdown && (
                      <FiChevronDown
                        size={14}
                        className={
                          isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }
                      />
                    )}
                  </div>
                </li>

                {/* DROPDOWN */}

                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div
                      className={`min-w-[240px] rounded-xl shadow-2xl overflow-hidden ${
                        isDarkMode ? "bg-gray-900" : "bg-white"
                      } border ${
                        isDarkMode
                          ? "border-gray-800"
                          : "border-gray-200"
                      }`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link key={subIndex} to={subItem.slug}>
                          <div
                            className={`block px-4 py-3 transition-all duration-200 ${
                              isDarkMode
                                ? "text-gray-300 hover:bg-green-500/10 hover:text-white"
                                : "text-gray-700 hover:bg-green-100 hover:text-black"
                            }`}
                          >
                            <div className="font-medium text-sm">
                              {subItem.name}
                            </div>

                            {subItem.desc && (
                              <div className="text-xs opacity-70 mt-0.5">
                                {subItem.desc}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              />

              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`fixed top-0 right-0 w-full max-w-sm h-full z-50 shadow-2xl lg:hidden ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between p-4 border-b">
                  <h2
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Menu
                  </h2>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiX
                      size={24}
                      className={
                        isDarkMode ? "text-white" : "text-black"
                      }
                    />
                  </button>
                </div>

                <div className="p-4 overflow-y-auto">
                  {menudata.map((item, index) => (
                    <div key={index} className="mb-2">
                      <button
                        onClick={() =>
                          toggleMobileDropdown(index)
                        }
                        className={`w-full flex items-center justify-between p-3 rounded-lg ${
                          isDarkMode
                            ? "hover:bg-gray-900 text-white"
                            : "hover:bg-gray-100 text-black"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-green-500">
                            {item.icon}
                          </span>

                          <span>{item.name}</span>
                        </div>

                        <FiChevronDown />
                      </button>

                      <AnimatePresence>
                        {openDropdown === index &&
                          item.dropdown && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="ml-8 mt-1 space-y-1"
                            >
                              {item.dropdown.map(
                                (subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.slug}
                                    onClick={() =>
                                      setIsMobileMenuOpen(false)
                                    }
                                  >
                                    <div
                                      className={`p-3 rounded-lg ${
                                        isDarkMode
                                          ? "hover:bg-gray-900 text-gray-300"
                                          : "hover:bg-gray-100 text-gray-600"
                                      }`}
                                    >
                                      <div className="text-sm font-medium">
                                        {subItem.name}
                                      </div>

                                      <div className="text-xs opacity-70">
                                        {subItem.desc}
                                      </div>
                                    </div>
                                  </Link>
                                )
                              )}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t space-y-2">
                  <Link to="/account">
                    <button
                      className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-black"
                      }`}
                    >
                      <FiUser size={18} />
                      <span>My Account</span>
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500 text-white">
                      <FiLogIn size={18} />
                      <span>Login / Register</span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <ThemeProvider>
      <NavbarContent />
    </ThemeProvider>
  );
}