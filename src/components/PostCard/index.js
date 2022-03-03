import styled from "styled-components";
import { getFontSize } from "../../utils/getFontSize";
import { device } from "../../utils/theme/responsive";
import Component from "./PostCard";

const PostCard = styled(Component)`
  text-align: center;
  padding: 3rem;
  border-radius: 1rem;

  .title {
    ${getFontSize("headingExtraSmall")};
    margin-top: 1rem;
  }
`;

export default PostCard;
