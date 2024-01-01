import { graphql } from "@/gql"

export const AboutSectionQuery = graphql(`
  fragment AboutSectionQuery on AcfAbout001Block {
    fields: aboutMe {
      content
      heading
      headingType
      image {
        sourceUrl
        altText
      }
    }
  }
`)
