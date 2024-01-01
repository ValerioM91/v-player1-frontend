import styled from "styled-components"
import Component from "./About"
import { useIsDarkTheme } from "@/store"

const About = styled(Component)`
  padding-top: 3rem;
  padding-bottom: 5rem;
  ${({ theme }) => theme.fontSizes.contentLarge};
  background-color: ${({ theme }) => useIsDarkTheme() && theme.colors.grey600};
  color: ${({ theme }) => useIsDarkTheme() && theme.colors.white};

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .figure,
  .content {
    max-width: 100%;
    flex: 0 0 100%;
  }

  .image {
    aspect-ratio: 1;
  }

  @media ${({ theme }) => theme.device.mdUp} {
    .figure {
      max-width: calc(100% / 3);
      flex: 0 0 calc(100% / 3);
      padding-right: 2rem;
    }
    .content {
      max-width: calc(200% / 3);
      flex: 0 0 calc(200% / 3);
      padding-left: 2rem;
    }
  }

  .btn-container {
    padding-top: 3rem;
    text-align: center;
    margin: auto;
  }

  .figure {
    max-width: 25rem;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    img {
      border-radius: 50%;
    }
  }
`

export default About
