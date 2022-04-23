import styled from "styled-components";
import Component from "./TopMenu";
import { device } from "../../../../utils/theme/responsive";

const TopMenu = styled(Component)`
  z-index: 10;
  position: absolute;
  width: 100%;
  padding-top: 5rem;
  .nav-center {
    z-index: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin-bottom: 3rem;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1.6rem;
      text-transform: uppercase;
      text-align: center;
      padding: 0 1rem;
    }

    .link {
      color: ${({ theme }) => theme.colors.white};
      padding-bottom: 0.3rem;
      cursor: pointer;
    }
  }

  @media ${device.mdUp} {
    .links li {
      font-size: 1.8rem;
      padding: 1rem 2rem;
    }
  }
`;

export default TopMenu;
