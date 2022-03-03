import breakpoints from "./theme/breakpoints";
import fontSizes from "./theme/fontSizes";
import { css } from "styled-components";

export const getFontSize = (size) => {
  const fontSizeObject = fontSizes[size];
  if (!fontSizeObject) return;
  return Object.keys(fontSizeObject).map((breakpoint) => {
    if (breakpoint === "null") {
      return css`
        font-size: ${fontSizeObject[breakpoint]};
      `;
    } else {
      return css`
        @media (min-width: ${breakpoints[breakpoint]}) {
          font-size: ${fontSizeObject[breakpoint]};
        } ;
      `;
    }
  });
};
