import styled from "styled-components";
import Component, { Props } from "./FullImage";

export const FullImageQuery = `
... on AcfFullImage1Block {
  fields: fullImage {
    image {
      altText
      sourceUrl
    }
  }
}`;

const FullImage: React.FunctionComponent<Props> = styled(Component)`
  + .final-comment {
    margin-top: 3rem;
  }
  .image {
    width: 100%;
  }
`;

export default FullImage;
