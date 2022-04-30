import create from "zustand";
import { client } from "../lib/apolloClient";

import createMenuItemArray from "../utils/createMenuItemArray";

const useStore = create((set) => ({
  reviews: [],
  globals: [],
  mainMenu: [],
  introCompleted: false,
  darkTheme: false,
  setReviews: (reviews) => set((state) => ({ ...state, reviews })),
  setGlobals: (globals) => set((state) => ({ ...state, globals })),
  setMainMenu: (mainMenu) => set((state) => ({ ...state, mainMenu })),
  setIntroCompleted: (bool) =>
    set((state) => ({ ...state, introCompleted: bool })),
  setDarkTheme: (bool) => set((state) => ({ ...state, darkTheme: bool })),
  toggleTheme: () =>
    set((state) => ({ ...state, darkTheme: !state.darkTheme })),
}));

export default useStore;

export const isDarkTheme = () => useStore().darkTheme;

export const useGetStaticProps = async (query) => {
  const response = await client.query({
    query,
  });

  const page = response?.data?.page;
  const reviews = response?.data?.reviews?.nodes;
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes);
  const globals = response?.data?.globals;

  const props = {
    ...page,
    reviews,
    menuItems,
    globals,
  };

  return {
    props,
  };
};
