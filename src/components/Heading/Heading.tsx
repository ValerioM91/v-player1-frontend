import type { THeadingType } from "@/types"

export type Props = {
  heading: string
  className?: string
  headingType?: THeadingType | string
  size?: "headingExtraSmall" | "headingSmall" | "headingMedium" | "headingLarge" | "headingExtraLarge"
  color?: string
  alignment?: string
  borderBottom?: boolean
  afterLine?: boolean
}

const Component = ({ headingType = "h2", heading, className }: Props) => {
  if (!heading) {
    return null
  }

  const Element = (["h1", "h2", "h3", "h4", "h5", "h6"].includes(headingType) ? headingType : "h2") as THeadingType

  return <Element className={className}>{heading}</Element>
}

export default Component
