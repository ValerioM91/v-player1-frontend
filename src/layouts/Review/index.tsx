import styled from "styled-components";
import Component, { TReviewProps } from "./Review";
import { isDarkTheme } from "../../store";

const Review: React.FunctionComponent<TReviewProps> = styled(Component)`
  background-color: ${({ theme }) =>
    isDarkTheme() ? theme.colors.grey700 : theme.colors.grey100};

  .container {
    padding-top: 9rem;
    padding-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .col-left,
  .col-right {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media ${({ theme }) => theme.device.lgDown} {
    .col-right {
      margin-top: 3rem;
    }
  }

  @media ${({ theme }) => theme.device.lgUp} {
    .col-left {
      flex: 0 0 75%;
      max-width: 75%;
      padding-right: 2rem;
    }

    .col-right {
      flex: 0 0 25%;
      max-width: 25%;
      padding-left: 2rem;
    }
  }
`;

export default Review;
