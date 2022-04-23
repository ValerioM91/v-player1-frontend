import styled from "styled-components";
import Component from "./FullImage";

export const FullImageQuery = `
... on AcfFullImage1Block {
  attributes: fullImage {
    image {
      altText
      sourceUrl
    }
  }
}`;

const FullImage = styled(Component)`
  + .final-comment {
    margin-top: 3rem;
  }
  .image {
    width: 100%;
  }
`;

export default FullImage;
