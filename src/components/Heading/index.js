import styled, { css } from "styled-components";
import Component from "./Heading";

const Heading = styled(Component)`
  color: ${({ color, theme }) =>
    theme.colors[color] || theme.colors.primaryBlue};
  text-align: ${({ alignment }) => alignment || "left"};
  text-transform: uppercase;
  font-family: "Electrolize";
  font-weight: 300;
  ${({ theme, size }) =>
    theme.fontSizes[size] || theme.fontSizes.headingMedium};

  ${({ borderBottom }) =>
    borderBottom &&
    css`
      padding-bottom: 2rem;
      border-bottom: 3px solid ${({ theme }) => theme.colors.mediumGrey};
      margin-bottom: 2rem;
      letter-spacing: -1px;
    `}

  ${({ afterLine }) =>
    afterLine &&
    css`
      &::after {
        display: block;
        content: "";
        background-color: ${({ theme }) => theme.colors.primaryBlue};
        height: 2px;
        width: 10rem;
        margin: 2rem auto 0;
      }
    `}
`;

export default Heading;
