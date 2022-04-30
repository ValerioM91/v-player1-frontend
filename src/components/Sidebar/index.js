import styled from "styled-components";
import Component from "./Sidebar";
import { isDarkTheme } from "../../store";

const Sidebar = styled(Component)`
  position: sticky;
  top: 9rem;

  .articles {
    display: grid;
    column-gap: 0.5rem;
    align-items: center;
  }

  @media ${({ theme }) => theme.device.smUp} {
    .articles {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${({ theme }) => theme.device.mdUp} {
    .articles {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media ${({ theme }) => theme.device.lgUp} {
    .articles {
      display: block;
    }
  }

  article {
    display: flex;
    background-color: ${({ theme }) =>
      isDarkTheme() ? theme.colors.grey600 : theme.colors.white};
    padding: 0.5rem;
    &:not(:last-of-type) {
      border-bottom: 2px solid
        ${({ theme }) =>
          isDarkTheme() ? theme.colors.grey400 : theme.colors.grey200};
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

    .thumbnail {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
    }
  }
`;

export default Sidebar;
