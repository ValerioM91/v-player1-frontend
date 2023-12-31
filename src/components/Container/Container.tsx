export type Props = React.ComponentPropsWithoutRef<"div">

const Component = ({ className, children, ...rest }: Props) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export default Component
