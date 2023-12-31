import Link from "next/link"
import Image from "next/image"
import type { TImage } from "@/types"

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
          <a>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={altText || "V-Player1"}
                placeholder="blur"
                blurDataURL="/images/shimmer.svg"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            )}
            <h5 className="title">{title}</h5>
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Component
