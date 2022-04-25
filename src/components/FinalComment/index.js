import styled from "styled-components";
import Component from "./FinalComment";

export const FinalCommentQuery = `
... on AcfFinalComment1Block {
    fields: finalComment1 {
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
    ${({ theme }) => theme.fontSizes.contentMedium};
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
    font-family: "Electrolize";
    font-size: 3.2rem;
    @media ${({ theme }) => theme.device.mdUp} {
      font-size: 4.6rem;
    }
  }
  .score {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 0.5rem;
    padding: 0.2rem 2rem 0;
  }
`;

export default FinalComment;
