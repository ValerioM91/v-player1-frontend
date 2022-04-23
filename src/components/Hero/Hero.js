import Image from "next/image";
import Heading from "../Heading";
import Container from "../Container";
import TopMenu from "./child-components/TopMenu";

const Component = ({ className, backgroundImage, heading, headingType }) => {
  const sourceUrl = backgroundImage?.sourceUrl;
  const altText = backgroundImage?.altText;

  return (
    <div className={className}>
      <TopMenu className="hero__topmenu" />
      {sourceUrl && (
        <div className="hero__image">
          <Image
            className="hero-image"
            alt={altText || "V-Player1"}
            src={sourceUrl}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={sourceUrl}
          />
        </div>
      )}
      <Container>
        {heading && (
          <Heading
            headingType={headingType}
            heading={heading}
            alignment="center"
            color="white"
            size="headingLarge"
          />
        )}
      </Container>
    </div>
  );
};

export default Component;
