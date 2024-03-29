import styled from "styled-components"
import Component from "./Hero"

const Hero = styled(Component)`
  position: relative;
  height: 100vh;
  min-height: 60rem;
  background-color: ${({ theme }) => theme.colors.primaryBlue};

  .hero__image {
    position: relative;
    height: 100%;
    width: 100%;

    &:after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.75);
    }
  }

  .hero__heading {
    z-index: 1;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }

  .hero__heading {
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.4;
    max-width: 100rem;
  }
`

export default Hero
