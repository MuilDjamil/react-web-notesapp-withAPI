import React from 'react';

const ThemeContext = React.createContext('light');

export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;

