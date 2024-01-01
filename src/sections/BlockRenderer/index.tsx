import About from "@/sections/About"
import FinalComment from "@/sections/FinalComment"
import FullImage from "@/sections/FullImage"
import HeadingContent from "@/sections/HeadingContent"
import Hero from "@/sections/Hero"
import Reviews from "@/sections/Reviews"
import type { TBlock } from "@/types"

type Props = {
  block?: TBlock
  vote?: number
}

const BlockRenderer = ({ block, vote }: Props) => {
  if (!block || !("fields" in block)) return null

  const { fields, __typename } = block

  switch (__typename) {
    case "AcfHeroImage001Block":
      return <Hero {...fields} />

    case "AcfReviews001Block":
      return <Reviews {...fields} />

    case "AcfAbout001Block":
      return <About {...fields} />

    case "AcfFullImage1Block":
      return <FullImage {...fields} />

    case "AcfHeadingContent1Block":
      return <HeadingContent {...fields} />

    case "AcfFinalComment1Block":
      return <FinalComment {...fields} vote={vote} />

    default:
      return null
  }
}

export default BlockRenderer
