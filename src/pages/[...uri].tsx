import { client } from "../lib/apolloClient"
import Dynamic from "../layouts/Dynamic"
import createMenuItemArray from "../utils/createMenuItemArray"

import type { TDynamicProps } from "@/layouts/Dynamic/Dynamic"
import type { TAllPagesProps } from "@/types"
import usePageStore from "@/utils/usePageStore"
import { PagePathsQuery, PageQuery } from "@/lib/queries"

type Props = TDynamicProps & TAllPagesProps

export default function Page(props: Props) {
  usePageStore(props)

  return <Dynamic {...props} header />
}

export const getStaticProps = async context => {
  const uri = context.params.uri.join("/")
  const response = await client.query({
    query: PageQuery,
    variables: { uri },
    fetchPolicy: "no-cache",
  })

  const reviews = response?.data?.reviews?.nodes
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes)
  const globals = response?.data?.globals

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

export const getStaticPaths = async () => {
  const response = await client.query({
    query: PagePathsQuery,
  })

  const pages: { uri: string }[] = response?.data?.pages?.nodes.map(page => ({ uri: page.uri }))

  const uris = pages.map(page => page.uri.split("/").filter(Boolean)).filter(uri => uri.length)
  const paths = uris.map(uri => ({ params: { uri } }))

  return {
    paths,
    fallback: false,
  }
}
