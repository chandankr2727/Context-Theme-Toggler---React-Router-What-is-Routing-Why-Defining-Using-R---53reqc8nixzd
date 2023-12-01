import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
  const { globalTheme } = React.useContext(ThemeContext);

  return (
    <div className={`container bg-${globalTheme}`} id="themed-page">
      <p className={`txt-${globalTheme}`} id="themed-text-container">
        Lorem ipsum dolor iterit n stuff
      </p>
      <button className={`btn-${globalTheme} ${globalTheme === 'light' ? 'txt-light' : 'txt-dark'}`} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
