import styled from "styled-components";
import Component from "./HeadingContent";

const HeadingContent = styled(Component)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;

  .heading {
    padding-bottom: 1rem;

    + .content {
      margin-top: 2rem;
    }
  }

  .content p {
    line-height: 1.5;
    ${({ theme }) => theme.fontSizes.contentLarge};
  }

  .content:not(:last-child) {
    margin-bottom: 3rem;
  }

  .image {
    position: relative;
    float: left;
    width: 50%;
    height: unset;
    margin: 0.5rem 2rem 0.5rem 0;
  }
`;

export default HeadingContent;
