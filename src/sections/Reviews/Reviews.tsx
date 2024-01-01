import ReviewRow from "@/components/ReviewRow"
import Heading from "@/components/Heading"
import Container from "@/components/Container"
import Button from "@/components/Button"
import useStore from "@/store"
import type { ReviewsSectionQueryFragment } from "@/gql/graphql"
import getButtonVariant from "@/utils/getButtonVariant"
import getHeadingType from "@/utils/getHeadingType"

type Props = ReviewsSectionQueryFragment["fields"] & {
  className?: string
}

const Component = ({ className, buttonType, heading, headingType, label, linkUrl, latest }: Props) => {
  const { reviews } = useStore()

  if (!reviews) return null

  const buttonVariant = getButtonVariant(buttonType)

  return (
    <section id="reviews" className={className}>
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
        {reviews && (
          <div className="list">
            {reviews.slice(0, latest ? 3 : reviews.length).map((post, index) => {
              return <ReviewRow {...post} key={index} className="review-row" />
            })}
          </div>
        )}
        <div className="btn-container">
          {linkUrl && <Button asElement="link" label={label} href={linkUrl} variant={buttonVariant} />}
        </div>
      </Container>
    </section>
  )
}

export default Component
