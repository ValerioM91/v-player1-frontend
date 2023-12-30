import Link from "next/link"

export type Props = {
  className?: string
  label?: string
  url?: string
  type?: "primary" | "secondary" | "tertiary" | "quaternary"
  onClick?: (any: any) => any
}

const Component = ({ className, label, url, onClick }: Props) => {
  if (!url)
    return (
      <button className={className} onClick={onClick}>
        {label}
      </button>
    )

  return (
    <Link href={url} scroll={false}>
      <a className={className}>{label}</a>
    </Link>
  )
}

export default Component
