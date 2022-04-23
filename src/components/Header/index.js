import styled from "styled-components";
import Component from "./Header";
import Container from "../Container";

const Header = styled(Component)`
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};

  ${Container} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 4rem;
  }

  .links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    .link {
      margin-left: 1rem;
      ${({ theme }) => theme.fontSizes.contentMedium};
      font-family: "Electrolize";
      color: ${({ theme }) => theme.colors.primaryBlue};
      cursor: pointer;
      @media ${({ theme }) => theme.device.mdUp} {
        margin-left: 2rem;
      }
    }
  }
`;

export default Header;
