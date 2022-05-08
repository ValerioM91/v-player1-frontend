import breakpoints from "./breakpoints";

export const device = {
  smUp: `(min-width: ${breakpoints.sm}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,
  lgUp: `(min-width: ${breakpoints.lg}px)`,
  xlUp: `(min-width: ${breakpoints.xl}px)`,
  smDown: `(max-width: ${breakpoints.sm - 1}px)`,
  mdDown: `(max-width: ${breakpoints.md - 1}px)`,
  lgDown: `(max-width: ${breakpoints.lg - 1}px)`,
  xlDown: `(max-width: ${breakpoints.xl - 1}px)`,
};
