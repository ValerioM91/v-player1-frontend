import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const Component = ({ className, title, slug, excerpt, reviewFields }) => {
  const imageUrl = reviewFields?.hero?.sourceUrl;
  const altText = reviewFields?.hero?.altText;
  const vote = reviewFields?.vote;

  return (
    <article className={className}>
      {imageUrl && (
        <Link href={`/reviews/${slug}`}>
          <a className="col-left">
            <figure>
              <Image
                src={imageUrl}
                alt={altText || "V-Player1"}
                placeholder="blur"
                blurDataURL={imageUrl}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />

              {vote && <span className="vote">V-score {vote.toFixed(1)}</span>}
            </figure>
          </a>
        </Link>
      )}
      <div className="col-right">
        {title && (
          <div className="title h3">
            <Link href={`/reviews/${slug}`}>
              <a className="underline">{title}</a>
            </Link>
          </div>
        )}
        {excerpt && <div className="content content--md">{parse(excerpt)}</div>}
      </div>
    </article>
  );
};

export default Component;
