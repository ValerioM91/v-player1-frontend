import { useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../../lib/apolloClient";
import ReviewLayout from "../../layouts/Review";
import { REVIEWS_BLOCKS_FRAGMENT } from "../../utils/Blocks";
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../../lib/requests";
import createMenuItemArray from "../../utils/createMenuItemArray";
import { isDarkTheme } from "../../store/store";

const Review = (props) => {
  const { setGlobals, setMainMenu, setReviews } = useStore();

  useEffect(() => {
    setGlobals(props.globals);
    setMainMenu(props.menuItems);
    setReviews(props.reviews);
  }, []);

  return <ReviewLayout {...props} />;
};

export default Review;

export const getStaticPaths = async () => {
  const response = await client.query({
    query: GET_REVIEWS_PATHS,
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
  const reviews = response?.data?.reviews?.nodes;
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes);
  const globals = response?.data?.globals;

  const props = {
    ...review,
    reviews,
    menuItems,
    globals,
  };

  return {
    props,
  };
};

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
`;

const GET_REVIEWS_PATHS = gql`
  query allReviews {
    reviews {
      nodes {
        slug
      }
    }
  }
`;
