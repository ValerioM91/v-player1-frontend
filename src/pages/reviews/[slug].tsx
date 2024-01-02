import { client } from "../../lib/apolloClient"
import ReviewLayout from "../../layouts/Review"
import createMenuItemArray from "../../utils/createMenuItemArray"
import type { TAllPagesProps } from "@/types"
import type { TReviewProps } from "@/layouts/Review/Review"
import usePageStore from "@/utils/usePageStore"
import { ReviewPageQuery, ReviewsPathsQuery } from "@/lib/queries"

type Props = TReviewProps & TAllPagesProps

const Review = (props: Props) => {
  usePageStore(props)

  return <ReviewLayout {...props} />
}

export default Review

export const getStaticPaths = async () => {
  const response = await client.query({
    query: ReviewsPathsQuery,
    fetchPolicy: "no-cache",
  })
  const reviews = response?.data?.reviews?.nodes
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
    query: ReviewPageQuery,
    variables: { slug },
    fetchPolicy: "no-cache",
  })

  const review = response?.data?.review
  const reviews = response?.data?.reviews?.nodes
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes)
  const globals = response?.data?.globals

  const props = {
    ...review,
    reviews,
    menuItems,
    globals,
  }

  return {
    props,
  }
}
