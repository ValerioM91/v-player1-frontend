import styled from "styled-components";
import Component from "./FullImage";

const FullImage = styled(Component)`
  + .final-comment {
    margin-top: 3rem;
  }
  .image {
    width: 100%;
  }
`;

export default FullImage;
