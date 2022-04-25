import { gql } from "@apollo/client";
import Hero, { HeroQuery } from "../components/Hero";
import Reviews, { ReviewsQuery } from "../components/Reviews";
import About, { AboutQuery } from "../components/About";
import FullImage, { FullImageQuery } from "../components/FullImage";
import HeadingContent, {
  HeadingContentQuery,
} from "../components/HeadingContent";
import FinalComment, { FinalCommentQuery } from "../components/FinalComment";

const BlocksQuery = `
  ${HeroQuery}
  ${AboutQuery}
  ${ReviewsQuery}
  ${FullImageQuery}
  ${HeadingContentQuery}
  ${FinalCommentQuery}
`;

export const BLOCKS_FRAGMENT = gql`
  fragment PageBlocksFields on Page {
    blocks {
      name
      ${BlocksQuery}
    }
  }
`;

export const REVIEWS_BLOCKS_FRAGMENT = gql`
  fragment ReviewBlocksFields on Review {
    blocks {
      name
      ${BlocksQuery}
    }
  }
`;

const Block = ({ block, vote }) => {
  const { fields, name } = block;

  switch (name) {
    case "acf/hero-image-001":
      return <Hero {...fields} />;

    case "acf/reviews-001":
      return <Reviews {...fields} />;

    case "acf/about-001":
      return <About {...fields} />;

    case "acf/full-image-1":
      return <FullImage {...fields} />;

    case "acf/heading-content-1":
      return <HeadingContent {...fields} />;

    case "acf/final-comment-1":
      return <FinalComment {...fields} vote={vote} />;

    default:
      return null;
  }
};

export default Block;
