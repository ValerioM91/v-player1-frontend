import styled from "styled-components"
import Component from "./HeadingContent"
import { useIsDarkTheme } from "@/store"

const HeadingContent = styled(Component)`
  background-color: ${({ theme }) => (useIsDarkTheme() ? theme.colors.grey600 : theme.colors.white)};
  padding: 2rem;
  color: ${({ theme }) => useIsDarkTheme() && theme.colors.white};

  .heading {
    padding-bottom: 1rem;

    + .content {
      margin-top: 2rem;
    }
  }

  .content p {
    line-height: 1.5;
    ${({ theme }) => theme.fontSizes.contentMedium};
  }

  .content:not(:last-child) {
    margin-bottom: 2rem;
  }

  .img {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.mdDown} {
    .image {
      display: block;
      margin-bottom: 1rem;
    }
  }

  @media ${({ theme }) => theme.device.mdUp} {
    padding: 3rem;

    .content:not(:last-child) {
      margin-bottom: 3rem;
    }

    .image {
      position: relative;
      float: left;
      width: 50%;
      height: unset;
      margin: 0.5rem 2rem 0.5rem 0;
    }
  }
`

export default HeadingContent
