import styled from "styled-components";
import Component from "./PostsGrid";

const PostsGrid = styled(Component)`
  background: ${({ theme }) => theme.colors.lightBackground};
  min-height: 100vh;
  padding-bottom: 5rem;
  padding-top: ${({ first }) => (first ? "9rem" : "5rem")};
  @media ${({ theme }) => theme.device.mdUp} {
    padding-top: ${({ first }) => (first ? "12rem" : "5rem")};
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
  }

  .post {
    flex: 0 0 100%;
    max-width: 100%;
    @media ${({ theme }) => theme.device.mdUp} {
      flex: 0 0 33.333%;
      max-width: 33.333%;
    }
  }
`;

export default PostsGrid;
