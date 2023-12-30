import Link, { type LinkProps } from "next/link"

type ButtonProps = (
  | (React.ComponentPropsWithoutRef<"button"> & { asLink?: false })
  | (LinkProps & { asLink: true; external?: boolean })
) & {
  children?: React.ReactNode
  className?: string
  label?: string
  variant?: "primary" | "secondary" | "tertiary" | "quaternary"
}

const Component = ({ className, label, ...rest }: ButtonProps) => {
  if (rest.asLink) {
    const { asLink: _, external, ...props } = rest

    return (
      <Link scroll={false} {...props} rel={external ? "noopener noreferrer" : ""} target={external ? "_blank" : ""}>
        <a className={className}>{label}</a>
      </Link>
    )
  }

  return (
    <button className={className} {...rest}>
      {label}
    </button>
  )
}

export default Component
