import ReviewRow from "../ReviewRow"
import Heading from "../Heading"
import Container from "../Container"
import Button from "../Button"
import useStore from "../../store"
import { THeadingType } from "../../types"

export type Props = {
  className?: string
  heading?: string
  headingType?: THeadingType
  buttonType?: "primary" | "secondary" | "tertiary" | "quaternary"
  label?: string
  linkUrl?: string
  latest?: boolean
  first?: boolean
}

const Component = ({ className, buttonType, heading, headingType, label, linkUrl, latest }: Props) => {
  const { reviews } = useStore()

  if (!reviews) return null

  return (
    <section id="reviews" className={className}>
      <Container>
        {heading && (
          <Heading
            heading={heading}
            headingType={headingType}
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
        <div className="btn-container">{linkUrl && <Button label={label} url={linkUrl} type={buttonType} />}</div>
      </Container>
    </section>
  )
}

export default Component
