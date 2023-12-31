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

export type TBlock = {
  // TODO - Refactor all queries (possibly using codegen to generate types) and remove this any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields?: any
  name?: string
}
