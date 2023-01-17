import styled from "styled-components";
import Component, { Props } from "./SocialsShare";

const SocialsShare: React.FunctionComponent<Props> = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  line-height: 1;
  margin-top: 3rem;
  flex-wrap: wrap;
  row-gap: 1rem;

  ul {
    margin: 0;
    padding: 0;
    margin-left: 1rem;
  }

  .social-icon {
    font-size: 3rem;
    margin-left: 1rem;
  }

  .facebook {
    color: #4267b2;
  }

  .reddit {
    color: #ff4500;
  }

  .telegram {
    color: #27a7e7;
  }

  .twitter {
    color: #1d9bf0;
  }

  .whatsapp {
    color: #25d366;
  }
`;

export default SocialsShare;
