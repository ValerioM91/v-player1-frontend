import React, { useContext, createContext, useState } from "react";

const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [mainMenu, setMainMenu] = useState([]);
  const [globals, setGlobals] = useState([]);
  const [reviews, setReviews] = useState([]);

  return (
    <AssetsContext.Provider
      value={{
        mainMenu,
        setMainMenu,
        globals,
        setGlobals,
        reviews,
        setReviews,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

const useAssetsContext = () => useContext(AssetsContext);
export default useAssetsContext;
