import React, { useContext } from 'react';
import ThemeContext from '../context/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-gray-200 dark:bg-gray-700 flex items-center px-4 py-2"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-500 dark:text-yellow-300 mr-2" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-gray-800 dark:text-gray-200 mr-2" />
      )}
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
