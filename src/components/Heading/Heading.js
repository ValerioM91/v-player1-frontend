import { createElement } from "react";

const Component = ({ headingType = "h2", heading, className }) => {
  if (!heading) {
    return null;
  }

  return createElement(headingType, { className }, heading);
};

export default Component;
