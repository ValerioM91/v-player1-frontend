import { graphql } from "@/gql"

export const HeadingContentSectionQuery = graphql(`
  fragment HeadingContentSectionQuery on AcfHeadingContent1Block {
    fields: headingContent1 {
      heading
      headingType
      contents {
        content
        image {
          altText
          sourceUrl
        }
      }
    }
  }
`)
