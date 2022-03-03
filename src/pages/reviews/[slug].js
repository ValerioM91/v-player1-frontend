import { gql } from "@apollo/client";
import { client } from "../../lib/apolloClient";
import ReviewLayout from "../../layouts/Review";
import { REVIEWS_BLOCKS_FIELD } from "../../utils/Blocks";

const Review = ({ review }) => {
  return <ReviewLayout {...review} />;
};

export default Review;

export const getStaticPaths = async () => {
  const response = await client.query({
    query: GET_REVIEWS,
  });
  const reviews = response?.data?.reviews?.nodes;
  const slugs = reviews.map((review) => review.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const response = await client.query({
    query: GET_REVIEW,
    variables: { slug },
  });
  const review = response?.data?.review;

  if (!review) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      review,
    },
    revalidate: 30,
  };
};

const GET_REVIEW = gql`
  query getReview($slug: ID!) {
    review(id: $slug, idType: SLUG) {
      title
      excerpt
      reviewFields {
        vote
      }
      ...ReviewBlocksFields
    }
  }
  ${REVIEWS_BLOCKS_FIELD}
`;

const GET_REVIEWS = gql`
  query allReviews {
    reviews {
      nodes {
        slug
      }
    }
  }
`;
