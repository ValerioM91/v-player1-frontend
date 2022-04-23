import styled from "styled-components";
import Component from "./Footer";
import { device } from "../../utils/theme/responsive";

const Footer = styled(Component)`
  background: ${({ theme }) => theme.colors.darkBackground};
  .wrapper {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .logo {
    height: 4rem;
  }
  .copy {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fontSizes.contentMedium};
    grid-column: 1 / 3;
  }
  .socials {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: var(--transition);
  }

  @media ${device.mdUp} {
    .wrapper {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .socials {
      width: 100%;
      grid-row: auto;
      grid-column: auto;
    }

    .copy {
      grid-column: 2 / 3;
    }
  }
`;

export default Footer;
