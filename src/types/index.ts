import type { GlobalsQueryFragment, PageBlocksFieldsFragment, ReviewQueryFragment } from "@/gql/graphql"

export type THeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type TTextSize =
  | "headingExtraSmall"
  | "headingSmall"
  | "headingMedium"
  | "headingLarge"
  | "headingExtraLarge"
  | "contentLarge"
  | "contentMedium"
  | "contentSmall"

export type TImage = {
  altText?: string
  sourceUrl?: string
}

export type TMenuItem = {
  path: string
  label: string
  cssClasses: string
}

export type TReview = {
  slug: string
  date: string
  excerpt?: string
  title: string
  reviewFields?: {
    vote?: number
    hero?: {
      sourceUrl: string
    }
  }
  featuredImage?: {
    node: {
      altText: string
      sourceUrl: string
    }
  }
}

export type TGlobals = {
  socials?: {
    facebook: string
    instagram: string
    psn: string
    steam: string
  }
}

export type TBlock = PageBlocksFieldsFragment["blocks"][number]

export type TAllPagesProps = {
  reviews?: ReviewQueryFragment[]
  menuItems?: TMenuItem[]
  globals?: GlobalsQueryFragment
}
