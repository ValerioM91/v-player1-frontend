import styled from "styled-components";
import Component from "./FinalComment";
import { getFontSize } from "../../utils/getFontSize";

const FinalComment = styled(Component)`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem;

  .content p {
    line-height: 1.5;
    ${({ theme }) => getFontSize(theme.fontSizeOptions.contentLarge)};
  }

  .content:not(:last-child) {
    margin-bottom: 3rem;
  }

  .final-score {
    text-align: center;
    font-size: 4rem;
    font-family: "Electrolize";
  }
  .score {
    background-color: ${({ theme }) => theme.colors.white};
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 0.5rem;
    padding: 0.3rem 2rem 0;
  }
`;

export default FinalComment;
