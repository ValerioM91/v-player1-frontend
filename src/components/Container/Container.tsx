export type Props = {
  className?: string;
  children?: JSX.Element | JSX.Element[];
};

const Component = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Component;
