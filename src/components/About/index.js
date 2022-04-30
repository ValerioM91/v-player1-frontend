import styled from "styled-components";
import Component from "./About";
import { isDarkTheme } from "../../store";

export const AboutQuery = `
... on AcfAbout001Block {
  fields: aboutMe {
    content
    heading
    headingType
    image {
      sourceUrl
      altText
    }
  }
}`;

const StyledAbout = styled(Component)`
  padding-top: 3rem;
  padding-bottom: 5rem;
  ${({ theme }) => theme.fontSizes.contentLarge};
  background-color: ${({ theme }) => isDarkTheme() && theme.colors.grey600};
  color: ${({ theme }) => isDarkTheme() && theme.colors.white};

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .image,
  .content {
    max-width: 100%;
    flex: 0 0 100%;
  }

  @media ${({ theme }) => theme.device.mdUp} {
    .image {
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

  .image {
    max-width: 25rem;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    img {
      border-radius: 50%;
    }
  }
`;

export default StyledAbout;
