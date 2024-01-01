import { client } from "../lib/apolloClient"
import Dynamic from "../layouts/Dynamic"
import createMenuItemArray from "../utils/createMenuItemArray"
import type { TAllPagesProps } from "@/types"
import usePageStore from "@/utils/usePageStore"
import { HomePageQuery } from "@/lib/queries"
import type { TDynamicProps } from "@/layouts/Dynamic/Dynamic"

type Props = TDynamicProps & TAllPagesProps

export default function Home(props: Props) {
  usePageStore(props)

  return <Dynamic {...props} />
}

export const getStaticProps = async () => {
  const response = await client.query({
    query: HomePageQuery,
    fetchPolicy: "no-cache",
  })

  const reviews = response?.data?.reviews?.nodes
  const menuItems = createMenuItemArray(response?.data?.menu.menuItems.nodes)
  const globals = response?.data?.globals

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
