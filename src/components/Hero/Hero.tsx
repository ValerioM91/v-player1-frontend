import Image from "next/image"
import Heading from "../Heading"
import Container from "../Container"
import TopMenu from "./child-components/TopMenu"
import type { THeadingType, TImage } from "@/types"

type Props = {
  className?: string
  backgroundImage?: TImage
  heading?: string
  headingType?: THeadingType
}

const Component = ({ className, backgroundImage, heading, headingType }: Props) => {
  const sourceUrl = backgroundImage?.sourceUrl
  const altText = backgroundImage?.altText

  return (
    <div className={className}>
      <TopMenu className="hero__topmenu" />
      <div className="hero__image">
        {sourceUrl && (
          <Image
            alt={altText || "V-Player1"}
            src={sourceUrl}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL="/images/shimmer.svg"
          />
        )}
        <Container className="container">
          {heading && (
            <Heading
              headingType={headingType}
              heading={heading}
              alignment="center"
              color="white"
              size="headingLarge"
              className="hero__heading"
            />
          )}
        </Container>
      </div>
    </div>
  )
}

export default Component
