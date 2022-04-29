import create from "zustand";

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
