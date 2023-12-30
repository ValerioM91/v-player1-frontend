import styled from "styled-components"
import Component from "./Container"

const Container = styled(Component)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: ${({ theme }) => theme.maxWidth};
`

export default Container
