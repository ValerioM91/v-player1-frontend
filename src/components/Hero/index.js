import styled from "styled-components";
import Component from "./Hero";
import Container from "../Container";
import Heading from "../Heading";

const Hero = styled(Component)`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryBlue};

  .hero__image {
    position: absolute;
    height: 100%;
    width: 100%;

    &:after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.75);
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }

  ${Heading} {
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.4;
    max-width: 100rem;
  }
`;

export default Hero;
