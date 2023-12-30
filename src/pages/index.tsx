import { useEffect } from "react"
import { gql } from "@apollo/client"
import { client } from "../lib/apolloClient"
import { BLOCKS_FRAGMENT } from "../utils/Blocks"
import Dynamic from "../layouts/Dynamic"
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../lib/requests"
import createMenuItemArray from "../utils/createMenuItemArray"
import useStore from "../store"
import { TReview, TMenuItem, TGlobals } from "../types"
import { TDynamicProps } from "../layouts/Dynamic/Dynamic"

type Props = TDynamicProps & {
  reviews?: TReview[]
  menuItems?: TMenuItem[]
  globals?: TGlobals
}

export default function Home(props: Props) {
  const { setReviews, setGlobals, setMainMenu } = useStore(state => state)

  useEffect(() => {
    setGlobals(props.globals)
    setMainMenu(props.menuItems)
    setReviews(props.reviews)
  }, [])

  return <Dynamic {...props} />
}

export const getStaticProps = async () => {
  const response = await client.query({
    query: HOMEPAGE_QUERY,
  })

  const reviews: TReview[] = response?.data?.reviews?.nodes
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes)
  const globals: TGlobals = response?.data?.globals

  const props: Props = {
    ...response?.data?.page,
    reviews,
    menuItems,
    globals,
  }

  return {
    props,
  }
}

const HOMEPAGE_QUERY = gql`
  {
    page(id: "/", idType: URI) {
      title
      ...PageBlocksFields
    }
    ${GET_REVIEWS}
    ${GET_MAIN_MENU}
    ${GET_GLOBALS}
  }
  ${BLOCKS_FRAGMENT}
`
