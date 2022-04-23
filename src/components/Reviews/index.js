import styled from "styled-components";
import Component from "./Reviews";

export const ReviewsQuery = `
... on AcfReviews001Block {
  attributes: reviews001 {
    first
    latest
    headingType
    heading
    buttonType
    label
    linkUrl
  }
}`;

const Reviews = styled(Component)`
  background: ${({ theme }) => theme.colors.lightBackground};
  padding-top: ${({ first }) => (first ? "9rem" : "5rem")};
  @media ${({ theme }) => theme.device.mdUp} {
    padding-top: ${({ first }) => (first ? "12rem" : "5rem")};
  }
  padding-bottom: 5rem;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${({ first }) => (first ? "100vh" : "60rem")};
  }

  .review-row:first-child {
    padding-top: 2rem;
  }

  .btn-container {
    padding-top: 3rem;
    text-align: center;
    margin: auto;
  }
`;

export default Reviews;
