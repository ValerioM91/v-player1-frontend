import { graphql } from "@/gql"

export const HeroSectionQuery = graphql(`
  fragment HeroSectionQuery on AcfHeroImage001Block {
    fields: heroImage001 {
      headingType
      heading
      backgroundImage {
        sourceUrl
        altText
      }
    }
  }
`)
