import { graphql } from "@/gql"

export const ReviewsSectionQuery = graphql(`
  fragment ReviewsSectionQuery on AcfReviews001Block {
    fields: reviews001 {
      first
      latest
      headingType
      heading
      buttonType
      label
      linkUrl
    }
  }
`)
