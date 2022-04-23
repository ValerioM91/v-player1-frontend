import styled from "styled-components";
import Component from "./FinalComment";

export const FinalCommentQuery = `
... on AcfFinalComment1Block {
    attributes: finalComment1 {
      heading
      headingType
      content
    }
  }`;

const FinalComment = styled(Component)`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem;

  .content p {
    line-height: 1.5;
    ${({ theme }) => theme.fontSizes.contentLarge};
  }

  .content:not(:last-child) {
    margin-bottom: 3rem;
  }

  .final-score {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    text-align: center;
    font-size: 4rem;
    font-family: "Electrolize";
  }
  .score {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 0.5rem;
    padding: 0.3rem 2rem 0;
  }
`;

export default FinalComment;
