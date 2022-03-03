import Image from "next/image";

export const FullImageQuery = `
... on AcfFullImage1Block {
  attributes: fullImage {
    image {
      altText
      sourceUrl
    }
  }
}`;

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
        blurDataURL={url}
        layout="responsive"
        width="16"
        height="9"
        objectFit="cover"
      />
    </figure>
  );
};

export default Component;
