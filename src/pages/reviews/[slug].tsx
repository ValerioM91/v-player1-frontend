import { gql } from "@apollo/client"
import { client } from "../../lib/apolloClient"
import ReviewLayout from "../../layouts/Review"
import { REVIEWS_BLOCKS_FRAGMENT } from "../../utils/Blocks"
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../../lib/requests"
import createMenuItemArray from "../../utils/createMenuItemArray"
import type { TReview, TMenuItem, TGlobals } from "@/types"
import type { TReviewProps } from "@/layouts/Review/Review"
import usePageStore from "@/utils/usePageStore"

type Props = TReviewProps & {
  reviews?: TReview[]
  menuItems?: TMenuItem[]
  globals?: TGlobals
}

const Review = (props: Props) => {
  usePageStore(props)

  return <ReviewLayout {...props} />
}

export default Review

export const getStaticPaths = async () => {
  const response = await client.query({
    query: GET_REVIEWS_PATHS,
  })
  const reviews: TReview[] = response?.data?.reviews?.nodes
  const slugs = reviews.map(review => review.slug)
  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const slug = context.params.slug
  const response = await client.query({
    query: GET_REVIEW,
    variables: { slug },
  })

  const review: TReviewProps = response?.data?.review
  const reviews: TReview[] = response?.data?.reviews?.nodes
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes)
  const globals: TGlobals = response?.data?.globals

  const props = {
    ...review,
    reviews,
    menuItems,
    globals,
  }

  return {
    props,
    revalidate: false,
  }
}

const GET_REVIEW = gql`
  query getReview($slug: ID!) {
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
    ${GET_REVIEWS}
    ${GET_MAIN_MENU}
    ${GET_GLOBALS}
  }
  ${REVIEWS_BLOCKS_FRAGMENT}
`

const GET_REVIEWS_PATHS = gql`
  query allReviews {
    reviews {
      nodes {
        slug
      }
    }
  }
`
