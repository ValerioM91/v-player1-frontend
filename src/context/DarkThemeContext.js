import React, { useContext, createContext, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((currentTheme) => !currentTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

const useDarkThemeContext = () => useContext(DarkThemeContext);
export default useDarkThemeContext;
