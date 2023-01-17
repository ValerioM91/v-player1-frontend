export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Component = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Component;
