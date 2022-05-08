import breakpoints from "./theme/breakpoints";
import { fontSizesMap } from "./theme/fontSizes";
import { css } from "styled-components";
import { TTextSize } from "../types";

export const getFontSize = (size: string) => {
  const fontSizeObject = fontSizesMap[size];

  if (!fontSizeObject) return;

  return Object.keys(fontSizeObject).map((breakpoint) => {
    if (breakpoint === "null") {
      return css`
        font-size: ${fontSizeObject["null"]};
      `;
    } else {
      return css`
        @media (min-width: ${breakpoints[breakpoint]}px) {
          font-size: ${fontSizeObject[breakpoint]};
        } ;
      `;
    }
  });
};
