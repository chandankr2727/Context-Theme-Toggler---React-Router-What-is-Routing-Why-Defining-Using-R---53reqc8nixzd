import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { globalTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(globalTheme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`bg-${localTheme}`} style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box">
      <p
        className={`txt-${globalTheme} ${localTheme === 'light' ? 'txt-light' : 'txt-dark'}`}
        id="local-themed-text-container"
      >
        Some Text
      </p>
      <button
        className={`btn-${localTheme} ${globalTheme === 'light' ? 'btn-light' : 'btn-dark'}`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
