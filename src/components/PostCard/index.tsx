import styled from "styled-components";
import Component, { Props } from "./PostCard";

const PostCard: React.FunctionComponent<Props> = styled(Component)`
  text-align: center;
  padding: 3rem;
  border-radius: 1rem;

  .title {
    ${({ theme }) => theme.fontSizes.headingExtraSmall};
    margin-top: 1rem;
  }
`;

export default PostCard;
