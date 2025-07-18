import React, { useEffect, useState } from 'react';
import MainHeading from '../heading/MainHeading';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-row justify-between items-center py-6 mx-auto max-w-screen-xl border-b border-gray-200 dark:border-gray-700">
      {/* Left: Main Heading */}
      <div>
        <MainHeading extraClass="font-bold" fontSize="text-xl" Text="Abdul Rehman" />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-6">
        {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white lg:text-lg md:text-md cursor-pointer font-medium transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right: Dark Mode Toggle */}
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
