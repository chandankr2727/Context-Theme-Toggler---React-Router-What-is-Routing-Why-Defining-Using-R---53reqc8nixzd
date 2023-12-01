import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { globalTheme, toggleGlobalTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn ${globalTheme === 'light' ? 'btn-light txt-light' : 'btn-dark txt-dark'}`}
      id="global-theme-toggler"
      onClick={toggleGlobalTheme}
    >
      {globalTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export { ThemeToggleButton };
