import type { GlobalsQueryFragment, PageBlocksFieldsFragment, ReviewQueryFragment } from "@/gql/graphql"

export type THeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type TImage = {
  altText?: string
  sourceUrl?: string
}

export type TMenuItem = {
  path: string
  label: string
  cssClasses: string
}

export type TBlock = PageBlocksFieldsFragment["blocks"][number]

export type TAllPagesProps = {
  reviews?: ReviewQueryFragment[]
  menuItems?: TMenuItem[]
  globals?: GlobalsQueryFragment
}
