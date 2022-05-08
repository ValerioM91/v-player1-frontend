import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { TImage } from "../../types";

export type Props = {
  className?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  reviewFields?: {
    hero?: TImage;
    vote?: number;
  };
};

const Component = ({
  className,
  title,
  slug,
  excerpt,
  reviewFields,
}: Props) => {
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
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/shimmer.svg"
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
