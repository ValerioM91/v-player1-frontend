const Component = ({ headingType = "h2", heading, className }) => {
  if (!heading) {
    return null;
  }

  switch (headingType) {
    case "h1":
      return <h1 className={className}>{heading}</h1>;

    case "h2":
      return <h2 className={className}>{heading}</h2>;

    case "h3":
      return <h3 className={className}>{heading}</h3>;

    case "h4":
      return <h4 className={className}>{heading}</h4>;

    case "h5":
      return <h5 className={className}>{heading}</h5>;

    case "h6":
      return <h6 className={className}>{heading}</h6>;

    default:
      return <h2 className={className}>{heading}</h2>;
  }
};

export default Component;
