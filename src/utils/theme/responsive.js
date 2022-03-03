import breakpoints from "./breakpoints";

export const device = {
  smUp: `(min-width: ${breakpoints.sm})`,
  mdUp: `(min-width: ${breakpoints.md})`,
  lgUp: `(min-width: ${breakpoints.lg})`,
  xlUp: `(min-width: ${breakpoints.xl})`,
  smDown: `(max-width: ${breakpoints.sm})`,
  mdDown: `(max-width: ${breakpoints.md})`,
  lgDown: `(max-width: ${breakpoints.lg})`,
  xlDown: `(max-width: ${breakpoints.xl})`,
};
