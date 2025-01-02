"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-primary text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Rotating Logo */}
        <div className="text-2xl font-bold cursor-pointer flex items-center space-x-1">
          <span className="animate-vertical-spin-j">J</span>
          <span className="animate-vertical-spin-s">S</span>
          <span className="text-accent-yellow">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="hover:text-accent-yellow transition"
            >
              {item.name}
            </motion.a>
          ))}
          {/* Login/Logout Button */}
          <button
            onClick={handleLoginLogout}
            className="bg-accent-yellow text-black px-4 py-1 rounded-md hover:bg-accent-green transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "50%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full bg-secondary text-white w-1/2 shadow-lg"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2"
          >
            <HiX className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-start px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-lg"
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </ul>
          {/* Login/Logout Button */}
          <button
            onClick={handleLoginLogout}
            className="bg-accent-yellow text-black px-4 py-1 mt-4 ml-4 rounded-md hover:bg-accent-green transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
