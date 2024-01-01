import type { THeadingType } from "@/types"

const getHeadingType = (headingType?: string | null) => {
  return (["h1", "h2", "h3", "h4", "h5", "h6"].includes(headingType) ? headingType : "h2") as THeadingType
}
export default getHeadingType
