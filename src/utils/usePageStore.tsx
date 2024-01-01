import useStore from "@/store"
import type { TAllPagesProps } from "@/types"
import { useEffect } from "react"

const usePageStore = ({ globals, menuItems, reviews }: TAllPagesProps) => {
  const { setReviews, setGlobals, setMainMenu } = useStore(state => state)

  useEffect(() => {
    setGlobals(globals)
    setMainMenu(menuItems)
    setReviews(reviews)
  }, [globals, menuItems, reviews, setGlobals, setMainMenu, setReviews])
}
export default usePageStore
