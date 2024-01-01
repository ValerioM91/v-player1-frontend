import { graphql } from "../gql"

export const AllPagesQuery = graphql(`
  fragment AllPagesQuery on RootQuery {
    globals {
      ...GlobalsQuery
    }
    reviews {
      nodes {
        ...ReviewQuery
      }
    }
    menu(id: "Main Menu", idType: NAME) {
      ...MainMenuQuery
    }
  }
`)

export const HomePageQuery = graphql(`
  query HomePageQuery {
    page(id: "/", idType: URI) {
      title
      ...PageBlocksFields
    }
    ...AllPagesQuery
  }
`)

export const PageQuery = graphql(`
  query PageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      slug
      title
      pageFields {
        description
      }
      ...PageBlocksFields
    }
    ...AllPagesQuery
  }
`)

export const ReviewPageQuery = graphql(`
  query ReviewPageQuery($slug: ID!) {
    review(id: $slug, idType: SLUG) {
      title
      excerpt
      reviewFields {
        vote
        hero {
          sourceUrl
        }
      }
      ...ReviewBlocksFields
    }
    ...AllPagesQuery
  }
`)

export const PagePathsQuery = graphql(`
  query PagePathsQuery {
    pages {
      nodes {
        uri
      }
    }
  }
`)

export const ReviewsPathsQuery = graphql(`
  query ReviewsPathsQuery {
    reviews {
      nodes {
        slug
      }
    }
  }
`)

export const GlobalsQuery = graphql(`
  fragment GlobalsQuery on Global {
    socials {
      facebook
      instagram
      psn
      steam
    }
  }
`)

export const MainMenuQuery = graphql(`
  fragment MainMenuQuery on Menu {
    menuItems {
      nodes {
        label
        path
        cssClasses
      }
    }
  }
`)

export const PageBlocksFields = graphql(`
  fragment PageBlocksFields on Page {
    blocks {
      ...BlocksQuery
    }
  }
`)

export const ReviewBlocksFields = graphql(`
  fragment ReviewBlocksFields on Review {
    blocks {
      ...BlocksQuery
    }
  }
`)

export const ReviewQuery = graphql(`
  fragment ReviewQuery on Review {
    slug
    date
    excerpt
    title
    reviewFields {
      vote
      hero {
        sourceUrl
      }
    }
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
  }
`)

export const BlocksQuery = graphql(`
  fragment BlocksQuery on Block {
    ...AboutSectionQuery
    ...FinalCommentSectionQuery
    ...FullImageSectionQuery
    ...HeadingContentSectionQuery
    ...HeroSectionQuery
    ...ReviewsSectionQuery
  }
`)
