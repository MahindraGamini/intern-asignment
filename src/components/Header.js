import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Group from '../Group.png';
import ThemeToggle from './ToggleTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 font-display">
      <div className="flex items-center font-display">
        <Link to="/" className="text-gray-800 dark:text-white flex items-center hover:text-red-500 hover:dark:text-red-500 active:text-red-700 active:dark:text-red-700">
          <img src={Group} alt="Illustration" className="h-8 mx-2" />
          <div className="text-xl font-bold">uifry</div>
        </Link>
        <nav className="hidden md:flex space-x-4 font-display">
          <Link to='/Home' className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Home</Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">About Us</Link>
          <Link to="/pricing" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Pricing</Link>
          <Link to="/features" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Features</Link>
        </nav>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white hover:text-red-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2 font-display">
          <Link to='/Home' className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Home</Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">About Us</Link>
          <Link to="/pricing" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Pricing</Link>
          <Link to="/features" className="text-gray-800 dark:text-white hover:text-red-500 active:text-red-700">Features</Link>
        </div>
      )}
      <button className="px-4 py-2 bg-black text-white rounded hidden md:block">Download</button>

      <ThemeToggle />
    </header>
  );
};

export default Header;
