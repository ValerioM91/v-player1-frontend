import { gql } from "@apollo/client"
import { client } from "../lib/apolloClient"
import { BLOCKS_FRAGMENT } from "../utils/Blocks"
import Dynamic from "../layouts/Dynamic"
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../lib/requests"
import createMenuItemArray from "../utils/createMenuItemArray"
import type { TReview, TMenuItem, TGlobals } from "@/types"
import type { TDynamicProps } from "@/layouts/Dynamic/Dynamic"
import usePageStore from "@/utils/usePageStore"

type Props = TDynamicProps & {
  reviews?: TReview[]
  menuItems?: TMenuItem[]
  globals?: TGlobals
}

export default function Home(props: Props) {
  usePageStore(props)

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
    revalidate: false,
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
