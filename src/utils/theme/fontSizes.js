const fontSizes = {
  headingExtraLarge: {
    null: "3rem",
    sm: "3rem",
    md: "4rem",
    lg: "6rem",
    xl: "8rem",
  },
  headingLarge: {
    null: "2.6rem",
    sm: "2.6rem",
    md: "3.6rem",
    lg: "4.6rem",
    xl: "6rem",
  },
  headingMedium: {
    null: "2.6rem",
    sm: "2.6rem",
    md: "3.6rem",
    lg: "4.6rem",
    xl: "5rem",
  },
  headingSmall: {
    null: "2.4rem",
    sm: "2.4rem",
    md: "3rem",
    lg: "3.6rem",
    xl: "4rem",
  },
  headingExtraSmall: {
    null: "2rem",
    sm: "2rem",
    md: "2.4rem",
    lg: "2.8rem",
    xl: "3rem",
  },
  contentLarge: {
    null: "2rem",
    md: "2.2rem",
    xl: "2.4rem",
  },
  contentMedium: {
    null: "1.8rem",
    md: "2rem",
  },
  contentSmall: {
    null: "1.4rem",
    md: "1.8rem",
  },
};

export default fontSizes;

const fontSizeOptions = {};
for (const key in fontSizes) {
  if (fontSizes.hasOwnProperty(key)) {
    fontSizeOptions[key] = key;
  }
}

export { fontSizeOptions };
