import parse from "html-react-parser";
import Image from "next/image";

import Heading from "../Heading";
import Container from "../Container";

const Component = ({ className, content, heading, headingType, image }) => {
  const sourceUrl = image?.sourceUrl;
  const altText = image?.altText;

  return (
    <section id="about" className={className}>
      <Container>
        {heading && (
          <Heading
            heading={heading}
            headingType={headingType}
            size="headingMedium"
            color="textColor"
            alignment="center"
            borderBottom
          />
        )}
        <div className="row">
          {sourceUrl && (
            <figure className="image">
              <Image
                src={sourceUrl}
                width={250}
                height={250}
                layout="responsive"
                objectFit="cover"
                alt={altText || "V-Player1"}
                placeholder="blur"
                blurDataURL="/images/shimmer.svg"
              />
            </figure>
          )}
          {content && <div className="content">{parse(content)}</div>}
        </div>
      </Container>
    </section>
  );
};

export default Component;
