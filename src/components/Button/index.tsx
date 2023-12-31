import styled from "styled-components"
import Component from "./Button"

const Button = styled(Component)`
  background-color: ${({ theme, variant }) =>
    variant === "secondary"
      ? theme.colors.primaryGreen
      : variant === "tertiary"
        ? theme.colors.primaryYellow
        : variant === "quaternary"
          ? theme.colors.primaryRed
          : theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2rem;
  min-width: 15rem;
  padding: 1.5rem 2rem;
  display: inline-block;
  border-radius: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(90%);
  }
`

export default Button
