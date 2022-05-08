import styled from "styled-components";
import Component, { Props } from "./Socials";

const Socials: React.FunctionComponent<Props> = styled(Component)`
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5rem;
  animation: ${({ theme }) => theme.animations.fadeIn} 0.3s;

  li {
    margin-left: 2rem;
  }

  .social {
    max-height: 3rem;
    color: ${({ theme }) => theme.colors.grey200};
    transition: color 0.2s;
  }

  .psn:hover {
    color: #003087;
  }

  .steam:hover {
    color: #fff;
  }

  .facebook:hover {
    color: #4267b2;
  }

  .instagram:hover {
    color: #c13584;
  }
`;

export default Socials;
