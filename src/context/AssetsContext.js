import React, { useContext, createContext, useState, useEffect } from "react";
import { client } from "../lib/apolloClient";
import { gql } from "@apollo/client";

const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [mainMenu, setMainMenu] = useState([]);
  const [isLoadingMainMenu, setIsLoadingMainMenu] = useState(false);
  const [errorMainMenu, setErrorMainMenu] = useState(false);
  const [globals, setGlobals] = useState([]);
  const [isLoadingGlobals, setIsLoadingGlobals] = useState(false);
  const [errorGlobals, setErrorGlobals] = useState(false);

  const getMainMenu = async () => {
    setIsLoadingMainMenu(true);
    const response = await client.query({
      query: GET_MAIN_MENU,
    });
    const menuItems = response?.data?.menu?.menuItems?.nodes;
    if (!menuItems) {
      setErrorMainMenu(true);
      setIsLoadingMainMenu(false);
      return;
    }

    const menuItemsPaths = [];
    menuItems.forEach((item) => {
      if (!item.path.includes("/v-player1")) return menuItemsPaths.push(item);
      const newPath = item.path.replace("/v-player1", "");
      const newItem = { ...item };
      newItem.path = newPath;
      return menuItemsPaths.push(newItem);
    });
    setMainMenu(menuItemsPaths);
    setIsLoadingMainMenu(false);
  };

  const getGlobals = async () => {
    setIsLoadingGlobals(true);
    const response = await client.query({
      query: GET_GLOBALS,
    });
    const globals = response?.data?.globals;

    if (!globals) {
      setErrorGlobals(true);
      setIsLoadingGlobals(false);
      return;
    }
    setGlobals(globals);
    setIsLoadingGlobals(false);
  };

  useEffect(() => {
    getMainMenu();
    getGlobals();
  }, []);

  return (
    <AssetsContext.Provider
      value={{
        mainMenu,
        isLoadingMainMenu,
        errorMainMenu,
        globals,
        isLoadingGlobals,
        errorGlobals,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

const useAssetsContext = () => useContext(AssetsContext);
export default useAssetsContext;

const GET_GLOBALS = gql`
  query getGlobals {
    globals {
      socials {
        facebook
        instagram
        psn
        steam
      }
      logos {
        logo
        logoBlue
      }
      contactDetails {
        contactAddress
        contactEmail
        contactPhone
        contactPostcode
      }
    }
  }
`;

const GET_MAIN_MENU = gql`
  query getMainMenu {
    menu(id: "Main Menu", idType: NAME) {
      menuItems {
        nodes {
          path
          label
          cssClasses
        }
      }
    }
  }
`;
