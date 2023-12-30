import useStore from "@/store"
import type { TGlobals, TMenuItem, TReview } from "@/types"
import { useEffect } from "react"

type Props = {
  reviews?: TReview[]
  menuItems?: TMenuItem[]
  globals?: TGlobals
}

const usePageStore = ({ globals, menuItems, reviews }: Props) => {
  const { setReviews, setGlobals, setMainMenu } = useStore(state => state)

  useEffect(() => {
    setGlobals(globals)
    setMainMenu(menuItems)
    setReviews(reviews)
  }, [globals, menuItems, reviews, setGlobals, setMainMenu, setReviews])
}
export default usePageStore
