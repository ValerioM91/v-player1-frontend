import dynamic from "next/dynamic"
import type { TBlock } from "@/types"

const Hero = dynamic(() => import("@/sections/Hero").then(mod => mod.default))
const Reviews = dynamic(() => import("@/sections/Reviews").then(mod => mod.default))
const HeadingContent = dynamic(() => import("@/sections/HeadingContent").then(mod => mod.default))
const FullImage = dynamic(() => import("@/sections/FullImage").then(mod => mod.default))
const FinalComment = dynamic(() => import("@/sections/FinalComment").then(mod => mod.default))
const About = dynamic(() => import("@/sections/About").then(mod => mod.default))

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
