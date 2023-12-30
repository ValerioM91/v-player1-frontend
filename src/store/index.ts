import { create } from "zustand"
import type { TReview, TGlobals, TMenuItem } from "../types"

type TStore = {
  reviews: TReview[]
  globals: TGlobals
  mainMenu: TMenuItem[]
  introCompleted: boolean
  darkTheme: boolean
  setReviews: (reviews: TReview[]) => void
  setGlobals: (globals: TGlobals) => void
  setMainMenu: (mainMenu: TMenuItem[]) => void
  setIntroCompleted: (bool: boolean) => void
  setDarkTheme: (bool: boolean) => void
  toggleTheme: () => void
}

const useStore = create<TStore>(set => ({
  reviews: [],
  globals: {},
  mainMenu: [],
  introCompleted: false,
  darkTheme: false,
  setReviews: reviews => set(state => ({ ...state, reviews })),
  setGlobals: globals => set(state => ({ ...state, globals })),
  setMainMenu: mainMenu => set(state => ({ ...state, mainMenu })),
  setIntroCompleted: bool => set(state => ({ ...state, introCompleted: bool })),
  setDarkTheme: bool => set(state => ({ ...state, darkTheme: bool })),
  toggleTheme: () => set(state => ({ ...state, darkTheme: !state.darkTheme })),
}))

export default useStore

export const isDarkTheme = () => useStore().darkTheme
