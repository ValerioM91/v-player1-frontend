import Image from "next/image"
import type { FullImageSectionQueryFragment } from "@/gql/graphql"
import { imageShimmerPlaceholder } from "@/utils/imageShimmerPlaceholder"

type Props = FullImageSectionQueryFragment["fields"] & {
  className?: string
  buttonType?: string
}

const Component = ({ className, image }: Props) => {
  const url = image?.sourceUrl
  const altText = image?.altText

  if (!url) return null

  return (
    <figure className={className}>
      <Image
        className="image"
        src={url}
        alt={altText || `V-Player1`}
        placeholder="blur"
        blurDataURL={imageShimmerPlaceholder}
        width={900}
        height={500}
      />
    </figure>
  )
}

export default Component
