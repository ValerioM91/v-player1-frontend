import styled from "styled-components";
import Component from "./Sidebar";

const Sidebar = styled(Component)`
  position: sticky;
  top: 9rem;

  article {
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem;
    &:not(:last-of-type) {
      border-bottom: 2px solid ${({ theme }) => theme.colors.lightBackground2};
    }

    .link {
      display: flex;
      align-items: center;
    }

    .title {
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.primaryBlue};
      font-size: 1.8rem;
    }
  }
`;

export default Sidebar;
