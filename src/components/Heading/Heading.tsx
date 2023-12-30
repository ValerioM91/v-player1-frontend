import { createElement } from "react"
import { THeadingType } from "../../types"

export type Props = {
  heading: string
  className?: string
  headingType?: THeadingType
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

  return createElement(headingType, { className }, heading)
}

export default Component
