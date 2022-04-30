import Image from "next/image";

const Component = ({ className, image }) => {
  const url = image?.sourceUrl;
  const altText = image?.altText;

  if (!url) return null;

  return (
    <figure className={className}>
      <Image
        className="image"
        src={url}
        alt={altText || `V-Player1`}
        placeholder="blur"
        blurDataURL="/images/shimmer.svg"
        layout="responsive"
        width="16"
        height="9"
        objectFit="cover"
      />
    </figure>
  );
};

export default Component;
