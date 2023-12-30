import styled from "styled-components"
import Component, { Props } from "./ReviewRow"
import { isDarkTheme } from "../../store"

const Review: React.FunctionComponent<Props> = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  position: relative;
  color: ${({ theme }) => isDarkTheme() && theme.colors.white};

  .col-left,
  .col-right {
    flex: 0 0 100%;
    max-width: 100%;
  }

  &:not(:last-of-type):after {
    content: "";
    position: absolute;
    height: 2px;
    width: calc(100% - 4rem);
    background-color: ${({ theme }) => theme.colors.grey300};
    bottom: 0;
  }
  figure {
    cursor: pointer;
    margin-bottom: 2rem;

    img {
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.075);
      }
    }
  }

  .title {
    font-family: "Electrolize";
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryBlue};
    margin-bottom: 2rem;
    ${({ theme }) => theme.fontSizes.headingSmall}
  }

  .content {
    line-height: 1.5;
    ${({ theme }) => theme.fontSizes.contentMedium}
  }

  .vote {
    position: absolute;
    top: 0;
    right: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    border-bottom-left-radius: 1rem;
    padding: 3px 5px 3px 7px;
    text-transform: uppercase;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.device.mdUp} {
    &:not(:last-of-type):after {
      width: calc(10 / 12 * 100% - 4rem);
    }

    .col-left {
      flex: 0 0 40%;
      max-width: 40%;
      padding-right: 2rem;
    }

    .col-right {
      flex: 0 0 60%;
      max-width: 60%;
      padding-left: 2rem;
    }

    .title {
      text-align: left;
    }

    figure {
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.device.xlUp} {
    .col-left {
      flex: 0 0 35%;
      max-width: 35%;
    }

    .col-right {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`

export default Review
