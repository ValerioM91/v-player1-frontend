import React, { useContext, createContext, useState, useEffect } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const initialTheme = window.localStorage.getItem("darkTheme");
    setDarkTheme(initialTheme === "true");
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "#393939";
      localStorage.setItem("darkTheme", true);
    } else {
      document.body.style.backgroundColor = "#fff";
      localStorage.setItem("darkTheme", false);
    }
  }, [darkTheme]);

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
