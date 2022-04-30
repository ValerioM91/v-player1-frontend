import { gql } from "@apollo/client";
import { HeroQuery } from "../components/Hero";
import { ReviewsQuery } from "../components/Reviews";
import { AboutQuery } from "../components/About";
import { FullImageQuery } from "../components/FullImage";
import { HeadingContentQuery } from "../components/HeadingContent";
import { FinalCommentQuery } from "../components/FinalComment";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero", { ssr: false }));
const Reviews = dynamic(() => import("../components/Reviews", { ssr: false }));
const About = dynamic(() => import("../components/About", { ssr: false }));
const FullImage = dynamic(() =>
  import("../components/FullImage", { ssr: false })
);
const HeadingContent = dynamic(() =>
  import("../components/HeadingContent", { ssr: false })
);
const FinalComment = dynamic(() =>
  import("../components/FinalComment", { ssr: false })
);

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
