import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { globalTheme, setGlobalTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(globalTheme);

  useEffect(() => {
    setLocalTheme(globalTheme);
  }, [globalTheme]);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`bg-${localTheme}`} style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box">
      <p className={`txt-${localTheme}`} id="local-themed-text-container">
        Some Text
      </p>
      <button className={`btn-${localTheme}`} id="local-theme-toggler" onClick={toggleLocalTheme}>
        Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
