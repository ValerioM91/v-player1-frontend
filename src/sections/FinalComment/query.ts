import { graphql } from "@/gql"

export const FinalCommentSectionQuery = graphql(`
  fragment FinalCommentSectionQuery on AcfFinalComment1Block {
    fields: finalComment1 {
      heading
      headingType
      content
    }
  }
`)
