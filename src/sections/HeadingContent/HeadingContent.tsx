import parse from "html-react-parser"
import Image from "next/image"
import Heading from "@/components/Heading"
import type { HeadingContentSectionQueryFragment } from "@/gql/graphql"
import getHeadingType from "@/utils/getHeadingType"

type Props = HeadingContentSectionQueryFragment["fields"] & {
  className?: string
}

const Component = ({ className, heading, headingType, contents }: Props) => {
  return (
    <div className={className}>
      {heading && (
        <Heading
          headingType={getHeadingType(headingType)}
          heading={heading}
          borderBottom
          size="headingSmall"
          className="heading"
        />
      )}
      {contents &&
        contents.map((item, i) => {
          const { content, image } = item

          const imageUrl = image?.sourceUrl
          const altText = image?.altText

          return (
            <div className="content" key={i}>
              {imageUrl && (
                <span className="image">
                  <Image
                    src={imageUrl}
                    width={400}
                    height={225}
                    style={{ objectFit: "cover" }}
                    className="img"
                    alt={altText || "V-Player1"}
                    placeholder="blur"
                    blurDataURL="/images/shimmer.svg"
                  />
                </span>
              )}
              {parse(content)}
            </div>
          )
        })}
    </div>
  )
}

export default Component
