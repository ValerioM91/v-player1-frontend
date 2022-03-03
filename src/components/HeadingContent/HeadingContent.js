import parse from "html-react-parser";
import Image from "next/image";

import Heading from "../Heading";

export const HeadingContentQuery = `
... on AcfHeadingContent1Block {
    attributes: headingContent1 {
        heading
        headingType
        contents {
            content
            image {
              altText
              sourceUrl
            }
        }
    }
}`;

const Component = ({ className, heading, headingType, contents }) => {
  return (
    <div className={className}>
      {heading && (
        <Heading
          headingType={headingType}
          heading={heading}
          borderBottom
          size="headingSmall"
          className="heading"
        />
      )}
      {contents &&
        contents.map((item, i) => {
          const { content, image } = item;

          const imageUrl = image?.sourceUrl;
          const altText = image?.altText;

          return (
            <div className="content" key={i}>
              {imageUrl && (
                <span className="image">
                  <Image
                    src={imageUrl}
                    layout="responsive"
                    width="16"
                    height="9"
                    objectFit="cover"
                    className="Img"
                    alt={altText || "V-Player1"}
                  />
                </span>
              )}
              {parse(content)}
            </div>
          );
        })}
    </div>
  );
};

export default Component;
