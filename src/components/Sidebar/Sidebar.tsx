import Link from "next/link"
import useStore from "@/store"
import Heading from "../Heading"
import Image from "next/image"

type Props = {
  className?: string
  title?: string
}

const Component = ({ className, title }: Props) => {
  const { reviews } = useStore()

  const latest = reviews.filter(rev => rev.title !== title).slice(0, 3)

  return (
    <div className={className}>
      <Heading
        color="textColor"
        heading="read also"
        headingType="h3"
        size="headingMedium"
        className="review-heading"
        alignment="center"
        borderBottom
        afterLine
      />
      <div className="articles">
        {latest.map((review, i) => {
          const { title, slug, featuredImage } = review

          return (
            <article key={i}>
              <Link href={`/reviews/${slug}`} scroll={false} className="link">
                {featuredImage?.node?.sourceUrl && (
                  <Image
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                    className="thumbnail"
                    src={featuredImage.node.sourceUrl}
                    alt={featuredImage.node.altText || "V-Player1"}
                  />
                )}
                <div className="title heading-font">{title}</div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Component
