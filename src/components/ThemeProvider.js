import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [globalTheme, setGlobalTheme] = useState('light');

  const toggleGlobalTheme = () => {
    setGlobalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ globalTheme, toggleGlobalTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
