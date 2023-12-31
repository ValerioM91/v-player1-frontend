import Image from "next/image"
import type { TImage } from "@/types"

export type Props = React.ComponentPropsWithoutRef<"figure"> & {
  image?: TImage
}

const Component = ({ className, image, ...rest }: Props) => {
  const url = image?.sourceUrl
  const altText = image?.altText

  if (!url) return null

  return (
    <figure className={className} {...rest}>
      <Image
        className="image"
        src={url}
        alt={altText || `V-Player1`}
        placeholder="blur"
        blurDataURL="/images/shimmer.svg"
        layout="responsive"
        width="160"
        height="90"
        objectFit="cover"
      />
    </figure>
  )
}

export default Component
