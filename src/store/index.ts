import { create } from "zustand"
import type { TMenuItem } from "../types"
import type { GlobalsQueryFragment, ReviewQueryFragment } from "@/gql/graphql"

type TStore = {
  reviews: ReviewQueryFragment[]
  globals: GlobalsQueryFragment
  mainMenu: TMenuItem[]
  introCompleted: boolean
  darkTheme: boolean
  setReviews: (reviews: ReviewQueryFragment[]) => void
  setGlobals: (globals: GlobalsQueryFragment) => void
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

export const useIsDarkTheme = () => useStore().darkTheme
