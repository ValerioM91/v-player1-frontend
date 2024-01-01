import Link, { type LinkProps } from "next/link"

type ButtonProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { asElement?: "button" })
  | (LinkProps & { asElement: "link"; external?: boolean })
) & {
  children?: React.ReactNode
  className?: string
  label?: string
  variant?: "primary" | "secondary" | "tertiary" | "quaternary"
}

const Component = ({ className, label, ...rest }: ButtonProps) => {
  if (rest.asElement === "link") {
    const { asElement: _, variant: __, external, ...props } = rest

    return (
      <Link
        {...props}
        scroll={false}
        rel={external ? "noopener noreferrer" : ""}
        target={external ? "_blank" : ""}
        className={className}
      >
        {label}
      </Link>
    )
  }

  const { asElement: _, variant: __, ...props } = rest

  return (
    <button className={className} {...props}>
      {label}
    </button>
  )
}

export default Component
