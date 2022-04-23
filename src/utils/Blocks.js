import { gql } from "@apollo/client";
import Hero, { HeroQuery } from "../components/Hero";
import Reviews, { ReviewsQuery } from "../components/Reviews";
import About, { AboutQuery } from "../components/About";
import FullImage, { FullImageQuery } from "../components/FullImage";
import HeadingContent, {
  HeadingContentQuery,
} from "../components/HeadingContent";
import FinalComment, { FinalCommentQuery } from "../components/FinalComment";

const BlockQuery = `
  ${HeroQuery}
  ${AboutQuery}
  ${ReviewsQuery}
  ${FullImageQuery}
  ${HeadingContentQuery}
  ${FinalCommentQuery}
`;

export const BLOCKS_FIELD = gql`
  fragment PageBlocksField on Page {
    blocks {
      name
      ${BlockQuery}
    }
  }
`;

export const REVIEWS_BLOCKS_FIELD = gql`
  fragment ReviewBlocksFields on Review {
    blocks {
      name
      ${BlockQuery}
    }
  }
`;

export const POSTS_BLOCKS_FIELD = gql`
  fragment PostBlocksFields on Post {
    blocks {
      name
      ${BlockQuery}
    }
  }
`;

const Block = ({ block, vote }) => {
  const { attributes, name } = block;

  switch (name) {
    case "acf/hero-image-001":
      return <Hero {...attributes} />;

    case "acf/reviews-001":
      return <Reviews {...attributes} />;

    case "acf/about-001":
      return <About {...attributes} />;

    case "acf/full-image-1":
      return <FullImage {...attributes} />;

    case "acf/heading-content-1":
      return <HeadingContent {...attributes} />;

    case "acf/final-comment-1":
      return <FinalComment {...attributes} vote={vote} />;

    default:
      return null;
  }
};

export default Block;
