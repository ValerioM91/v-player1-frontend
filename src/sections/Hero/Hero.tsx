import Image from "next/image"
import Heading from "@/components/Heading"
import Container from "@/components/Container"
import TopMenu from "@/components/TopMenu"
import type { HeroSectionQueryFragment } from "@/gql/graphql"
import getHeadingType from "@/utils/getHeadingType"

type Props = HeroSectionQueryFragment["fields"] & {
  className?: string
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
            fill
            className="image"
            priority
            placeholder="blur"
            blurDataURL="/images/shimmer.svg"
          />
        )}
        <Container className="container">
          {heading && (
            <Heading
              headingType={getHeadingType(headingType)}
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
