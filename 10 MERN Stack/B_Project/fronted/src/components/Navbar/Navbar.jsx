import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiMenu, FiX, FiChevronDown, FiSun, FiMoon, FiLogIn, FiUserPlus } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import {menudata} from '../Data/data.jsx'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State for authentication

  // Check for saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
    
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(userLoggedIn)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    // Add any other logout logic here (clear tokens, etc.)
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 
          ${scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
          }
          border-b border-gray-200 dark:border-gray-700
        `}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            
            {/* Logo Section */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="WBA Logo" 
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" 
              />
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                <span className="hidden sm:inline">WORLD BOXING </span>
                ASSOCIATION
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
              {menudata.map((item, index) => (
                <li key={index} className="relative dropdown-container">
                  {item.dropdownmenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                        className={`
                          flex items-center gap-1 px-3 py-2 rounded-lg
                          text-gray-700 dark:text-gray-200 
                          hover:text-red-600 dark:hover:text-red-400
                          hover:bg-red-50 dark:hover:bg-red-900/20
                          transition-all duration-200 text-sm xl:text-base font-medium
                          ${openDropdown === index ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' : ''}
                        `}
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: openDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="text-xs xl:text-sm" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10, scaleY: 0 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -10, scaleY: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 xl:w-72 2xl:w-80 
                                     bg-white dark:bg-gray-800 
                                     rounded-lg shadow-xl 
                                     border border-gray-200 dark:border-gray-700
                                     overflow-hidden origin-top z-50"
                          >
                            {item.dropdownmenu.map((subItem, subIndex) => (
                              <motion.li 
                                key={subIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03 }}
                                whileHover={{ x: 5 }}
                                className="hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                              >
                                <a
                                  href={subItem.slug}
                                  target={subItem.slug.includes('.pdf') ? '_blank' : '_self'}
                                  rel={subItem.slug.includes('.pdf') ? 'noopener noreferrer' : ''}
                                  className="block px-4 py-3 text-sm xl:text-base 
                                           text-gray-700 dark:text-gray-200 
                                           hover:text-red-600 dark:hover:text-red-400"
                                >
                                  {subItem.name}
                                </a>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.slug}
                      className="block px-3 py-2 rounded-lg
                               text-gray-700 dark:text-gray-200 
                               hover:text-red-600 dark:hover:text-red-400
                               hover:bg-red-50 dark:hover:bg-red-900/20
                               transition-all duration-200 text-sm xl:text-base font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 
                         hover:text-red-600 dark:hover:text-red-400 
                         hover:bg-red-50 dark:hover:bg-red-900/20
                         transition-colors duration-200"
                aria-label="Search"
              >
                <FiSearch className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              {/* Auth Buttons - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                {!isLoggedIn ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/login'}
                      className="px-4 py-2 rounded-lg
                               text-gray-700 dark:text-gray-200 
                               hover:text-red-600 dark:hover:text-red-400
                               hover:bg-red-50 dark:hover:bg-red-900/20
                               transition-all duration-200 text-sm font-medium
                               flex items-center gap-2"
                    >
                      <FiLogIn className="w-4 h-4" />
                      Login
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/signup'}
                      className="px-4 py-2 rounded-lg
                               bg-red-600 hover:bg-red-700
                               text-white font-medium
                               transition-all duration-200 text-sm
                               flex items-center gap-2
                               shadow-md hover:shadow-lg"
                    >
                      <FiUserPlus className="w-4 h-4" />
                      Sign Up
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg text-gray-700 dark:text-gray-200 
                               hover:text-red-600 dark:hover:text-red-400 
                               hover:bg-red-50 dark:hover:bg-red-900/20
                               transition-colors duration-200"
                      aria-label="Profile"
                    >
                      <CgProfile className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg
                               text-gray-700 dark:text-gray-200 
                               hover:text-red-600 dark:hover:text-red-400
                               hover:bg-red-50 dark:hover:bg-red-900/20
                               transition-all duration-200 text-sm font-medium"
                    >
                      Logout
                    </motion.button>
                  </>
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 
                         hover:text-red-600 dark:hover:text-red-400 
                         hover:bg-red-50 dark:hover:bg-red-900/20
                         transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                ) : (
                  <FiMoon className="w-4 h-4 md:w-5 md:h-5" />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 
                         hover:text-red-600 dark:hover:text-red-400 
                         hover:bg-red-50 dark:hover:bg-red-900/20
                         transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 md:top-20 left-0 bottom-0 w-full max-w-md 
                       bg-white dark:bg-gray-900 
                       shadow-2xl z-40 lg:hidden
                       overflow-y-auto"
            >
              <div className="p-4 md:p-6">
                {/* Mobile Auth Buttons */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  {!isLoggedIn ? (
                    <div className="flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          window.location.href = '/login'
                          setMobileMenuOpen(false)
                        }}
                        className="flex-1 px-4 py-2 rounded-lg
                                 text-gray-700 dark:text-gray-200 
                                 hover:text-red-600 dark:hover:text-red-400
                                 hover:bg-red-50 dark:hover:bg-red-900/20
                                 transition-all duration-200 font-medium
                                 flex items-center justify-center gap-2"
                      >
                        <FiLogIn className="w-4 h-4" />
                        Login
                      </motion.button>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          window.location.href = '/signup'
                          setMobileMenuOpen(false)
                        }}
                        className="flex-1 px-4 py-2 rounded-lg
                                 bg-red-600 hover:bg-red-700
                                 text-white font-medium
                                 transition-all duration-200
                                 flex items-center justify-center gap-2"
                      >
                        <FiUserPlus className="w-4 h-4" />
                        Sign Up
                      </motion.button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // Handle profile click
                          setMobileMenuOpen(false)
                        }}
                        className="flex-1 px-4 py-2 rounded-lg
                                 text-gray-700 dark:text-gray-200 
                                 hover:text-red-600 dark:hover:text-red-400
                                 hover:bg-red-50 dark:hover:bg-red-900/20
                                 transition-all duration-200 font-medium
                                 flex items-center justify-center gap-2"
                      >
                        <CgProfile className="w-4 h-4" />
                        Profile
                      </motion.button>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          handleLogout()
                          setMobileMenuOpen(false)
                        }}
                        className="flex-1 px-4 py-2 rounded-lg
                                 text-red-600 hover:text-red-700
                                 hover:bg-red-50 dark:hover:bg-red-900/20
                                 transition-all duration-200 font-medium"
                      >
                        Logout
                      </motion.button>
                    </div>
                  )}
                </div>

                <ul className="space-y-2">
                  {menudata.map((item, index) => (
                    <li key={index}>
                      {item.dropdownmenu ? (
                        <>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                            className="flex items-center justify-between w-full 
                                     text-gray-700 dark:text-gray-200 
                                     hover:text-red-600 dark:hover:text-red-400
                                     transition-colors duration-200 py-3 px-3
                                     rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20
                                     font-medium"
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{ rotate: openDropdown === index ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FiChevronDown />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {openDropdown === index && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 mt-1 space-y-1 overflow-hidden"
                              >
                                {item.dropdownmenu.map((subItem, subIndex) => (
                                  <motion.li 
                                    key={subIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.02 }}
                                  >
                                    <a
                                      href={subItem.slug}
                                      target={subItem.slug.includes('.pdf') ? '_blank' : '_self'}
                                      rel={subItem.slug.includes('.pdf') ? 'noopener noreferrer' : ''}
                                      className="block py-2 px-3 text-sm 
                                               text-gray-600 dark:text-gray-300 
                                               hover:text-red-600 dark:hover:text-red-400
                                               rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20
                                               transition-all duration-200"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </a>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.slug}
                          className="block py-3 px-3 
                                   text-gray-700 dark:text-gray-200 
                                   hover:text-red-600 dark:hover:text-red-400
                                   hover:bg-red-50 dark:hover:bg-red-900/20
                                   rounded-lg transition-all duration-200 font-medium"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />
    </>
  )
}