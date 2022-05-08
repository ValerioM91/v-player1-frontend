import parse from "html-react-parser";
import Image from "next/image";

import Heading from "../Heading";
import { THeadingType, TImage } from "../../types";

export type Props = {
  className?: string;
  heading?: string;
  headingType?: THeadingType;
  contents: {
    content?: string;
    image?: TImage;
  }[];
};

const Component = ({ className, heading, headingType, contents }: Props) => {
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
                    width="160"
                    height="90"
                    objectFit="cover"
                    className="Img"
                    alt={altText || "V-Player1"}
                    placeholder="blur"
                    blurDataURL="/images/shimmer.svg"
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
