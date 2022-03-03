import Image from "next/image";
import Link from "next/link";
import useReviewsContext from "../../context/ReviewsContext";
import Heading from "../Heading";

const Component = ({ className, title }) => {
  const { reviews } = useReviewsContext();

  const latest = reviews.filter((rev, i) => {
    if (i > 3) return;
    return rev.title !== title;
  });

  return (
    <div className={className}>
      <Heading
        color="textColor"
        heading="read also"
        headingType="h5"
        size="headingMedium"
        className="review-heading"
        alignment="center"
        borderBottom
        afterLine
      />
      {latest.map((review, i) => {
        const { title, slug, reviewFields } = review;

        return (
          <article key={i}>
            <Link href={`/reviews/${slug}`}>
              <a className="link">
                <Image
                  src={reviewFields?.hero?.sourceUrl}
                  alt={reviewFields?.hero?.altText || "V-Player1"}
                  width={80}
                  height={80}
                  objectFit="cover"
                />
                <div className="title heading-font">{title}</div>
              </a>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Component;
