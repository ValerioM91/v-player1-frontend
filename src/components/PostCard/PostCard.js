import Link from "next/link";
import Image from "next/image";

const Component = ({ className, title, uri, featuredImage }) => {
  const imageUrl = featuredImage?.node?.sourceUrl;
  const altText = featuredImage?.node?.altText;

  return (
    <article className={className}>
      <div className="inner">
        <Link href={uri}>
          <a>
            {imageUrl && (
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
            )}
            <h5 className="title">{title}</h5>
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Component;
