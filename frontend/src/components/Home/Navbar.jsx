import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar({ isVisible, tabChosen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <nav
      className={`bg-slate-400 border-gray-200 dark:bg-gray-900 transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0 z-10' : 'transform -translate-y-full z-0'
      } fixed top-0 left-0 right-0`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://www.iloilodenguewatch.live/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-2xl text-xl font-semibold whitespace-nowrap dark:text-white">
            Iloilo City Dengue Watch
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className={`block py-2 px-3 ${tabChosen === 'Home' ? 'bg-blue-700 text-white' :'text-black'} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}>
                Home
              </a>
            </li>
            <li>
              <a href="/data" className={` ${tabChosen === 'Data' ? 'bg-blue-700 text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}>
                Data
              </a>
            </li>
            <li>
              <a href="/general-information" className={` ${tabChosen === 'GenInfo' ? 'bg-blue-700 text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                General Information
              </a>
            </li>
            <li>
              <a href="/chat" className={` ${tabChosen === 'Chat With ChatGPT' ? 'bg-blue-700 text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                Chat With ChatGPT
              </a>
            </li>
            <li>
              <a href="/news" className={` ${tabChosen === 'News' ? 'bg-blue-700 text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                News
              </a>
            </li>
            <li>
              <a href="/feedback" className={` ${tabChosen === 'Feedback' ? '!bg-blue-700 text-white' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;