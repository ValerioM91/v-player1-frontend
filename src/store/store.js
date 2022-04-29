import create from "zustand";

const useStore = create((set) => ({
  reviews: [],
  globals: [],
  mainMenu: [],
  introCompleted: false,
  setReviews: (reviews) => set((state) => ({ ...state, reviews })),
  setGlobals: (globals) => set((state) => ({ ...state, globals })),
  setMainMenu: (mainMenu) => set((state) => ({ ...state, mainMenu })),
  setIntroCompleted: (bool) =>
    set((state) => ({ ...state, introCompleted: bool })),
}));

export default useStore;
