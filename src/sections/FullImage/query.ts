import { graphql } from "@/gql"

export const FullImageSectionQuery = graphql(`
  fragment FullImageSectionQuery on AcfFullImage1Block {
    fields: fullImage {
      image {
        altText
        sourceUrl
      }
    }
  }
`)
