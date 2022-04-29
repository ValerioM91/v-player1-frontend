import Link from "next/link";
import useAssetsContext from "../../context/AssetsContext";
import Heading from "../Heading";

const Component = ({ className, title }) => {
  const { reviews } = useAssetsContext();

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
