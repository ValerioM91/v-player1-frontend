import ReviewRow from "../ReviewRow";
import Heading from "../Heading";
import Container from "../Container";
import Button from "../Button";
import useStore from "../../store/store";

const Component = ({
  className,
  buttonType,
  heading,
  headingType,
  label,
  linkUrl,
  latest,
}) => {
  const { reviews } = useStore();

  if (!reviews) return null;

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
            {reviews
              .slice(0, latest ? 3 : reviews.length)
              .map((post, index) => {
                return (
                  <ReviewRow {...post} key={index} className="review-row" />
                );
              })}
          </div>
        )}
        <div className="btn-container">
          {linkUrl && (
            <Button
              classes="btn"
              label={label}
              url={linkUrl}
              type={buttonType}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Component;
