import parse from "html-react-parser"
import Image from "next/image"

import Heading from "@/components/Heading"
import Container from "@/components/Container"
import type { AboutSectionQueryFragment } from "@/gql/graphql"
import getHeadingType from "@/utils/getHeadingType"
import { imageShimmerPlaceholder } from "@/utils/imageShimmerPlaceholder"

type Props = AboutSectionQueryFragment["fields"] & {
  className?: string
}

const Component = ({ className, content, heading, headingType, image }: Props) => {
  const sourceUrl = image?.sourceUrl
  const altText = image?.altText

  return (
    <section id="about" className={className}>
      <Container>
        {heading && (
          <Heading
            heading={heading}
            headingType={getHeadingType(headingType)}
            size="headingMedium"
            color="textColor"
            alignment="center"
            borderBottom
          />
        )}
        <div className="row">
          {sourceUrl && (
            <figure className="figure">
              <Image
                src={sourceUrl}
                width={250}
                height={250}
                className="image"
                alt={altText || "V-Player1"}
                placeholder="blur"
                blurDataURL={imageShimmerPlaceholder}
              />
            </figure>
          )}
          {content && <div className="content">{parse(content)}</div>}
        </div>
      </Container>
    </section>
  )
}

export default Component
