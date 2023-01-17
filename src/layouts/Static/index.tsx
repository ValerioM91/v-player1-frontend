import styled from "styled-components";
import Component from "./Static";
import { isDarkTheme } from "../../store";
import { FC } from "react";

const Static = styled(Component)`
  background-color: ${({ theme }) => (isDarkTheme() ? theme.colors.grey700 : theme.colors.grey100)};
  min-height: 95vh;

  .container {
    padding-top: 9rem;
    padding-bottom: 5rem;
  }
`;

export default Static;
