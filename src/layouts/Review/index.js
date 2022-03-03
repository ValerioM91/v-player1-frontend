import styled from "styled-components";
import Component from "./Review";
import Container from "../../components/Container";
import { device } from "../../utils/theme/responsive";

const Review = styled(Component)`
  background-color: ${({ theme }) => theme.colors.lightBackground};

  ${Container} {
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

  @media ${device.mdUp} {
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
