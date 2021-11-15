import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#231f20',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );