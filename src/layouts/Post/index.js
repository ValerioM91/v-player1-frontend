import styled from "styled-components";
import Component from "./Post";
import Container from "../../components/Container";

const Post = styled(Component)`
  background-color: ${({ theme }) => theme.colors.lightBackground};

  ${Container} {
    padding-top: 9rem;
    padding-bottom: 5rem;
    max-width: 80rem;
  }
`;

export default Post;
