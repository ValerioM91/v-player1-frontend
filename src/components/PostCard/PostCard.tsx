import Link from "next/link"
import Image from "next/image"
import type { TImage } from "@/types"
import { imageShimmerPlaceholder } from "@/utils/imageShimmerPlaceholder"

export type Props = {
  className?: string
  title?: string
  uri?: string
  featuredImage?: { node?: TImage }
}

const Component = ({ className, title, uri, featuredImage }: Props) => {
  const imageUrl = featuredImage?.node?.sourceUrl
  const altText = featuredImage?.node?.altText

  return (
    <article className={className}>
      <div className="inner">
        <Link href={uri} scroll={false}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={altText || "V-Player1"}
              placeholder="blur"
              blurDataURL={imageShimmerPlaceholder}
              width={500}
              height={300}
              className="image"
            />
          )}
          <h5 className="title">{title}</h5>
        </Link>
      </div>
    </article>
  )
}

export default Component
