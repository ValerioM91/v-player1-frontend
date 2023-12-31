import { gql } from "@apollo/client"
import { client } from "../lib/apolloClient"
import { BLOCKS_FRAGMENT } from "../utils/Blocks"
import Dynamic from "../layouts/Dynamic"
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../lib/requests"
import createMenuItemArray from "../utils/createMenuItemArray"
import type { TReview, TMenuItem, TGlobals } from "../types"
import type { TDynamicProps } from "@/layouts/Dynamic/Dynamic"
import usePageStore from "@/utils/usePageStore"

type Props = TDynamicProps & {
  reviews?: TReview[]
  menuItems?: TMenuItem[]
  globals?: TGlobals
}

export default function Page(props: Props) {
  usePageStore(props)

  return <Dynamic {...props} header />
}

export const getStaticProps = async context => {
  const uri = context.params.uri.join("/")
  const response = await client.query({
    query: GET_PAGE,
    variables: { uri },
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

export const getStaticPaths = async () => {
  const response = await client.query({
    query: GET_PAGES,
  })

  const pages: { uri: string }[] = response?.data?.pages?.nodes

  const uris = pages.map(page => page.uri.split("/").filter(Boolean)).filter(uri => uri.length)
  const paths = uris.map(uri => ({ params: { uri } }))

  return {
    paths,
    fallback: false,
  }
}

const GET_PAGES = gql`
  query allPages {
    pages {
      nodes {
        uri
      }
    }
  }
`

const GET_PAGE = gql`
  query getPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      slug
      title
      pageFields {
        description
      }
      ...PageBlocksFields
    }
    ${GET_REVIEWS}
    ${GET_MAIN_MENU}
    ${GET_GLOBALS}
  }
  ${BLOCKS_FRAGMENT}
`