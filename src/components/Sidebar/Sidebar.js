import Link from "next/link";
import useStore from "../../store/store";
import Heading from "../Heading";

const Component = ({ className, title }) => {
  const { reviews } = useStore();

  const latest = reviews.filter((rev) => rev.title !== title).slice(0, 3);

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
      <div className="articles">
        {latest.map((review, i) => {
          const { title, slug, featuredImage } = review;

          return (
            <article key={i}>
              <Link href={`/reviews/${slug}`}>
                <a className="link">
                  {featuredImage?.node?.sourceUrl && (
                    <img
                      className="thumbnail"
                      src={featuredImage.node.sourceUrl}
                      alt={featuredImage.node.altText || "V-Player1"}
                    />
                  )}
                  <div className="title heading-font">{title}</div>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
