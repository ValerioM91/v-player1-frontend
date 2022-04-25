import React, { useContext, createContext, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    if (darkTheme === false) {
      document.body.style.backgroundColor = "#393939";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
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
