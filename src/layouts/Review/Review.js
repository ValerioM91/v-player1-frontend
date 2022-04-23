import parse from "html-react-parser";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Block from "../../utils/Blocks";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import Heading from "../../components/Heading";
import IntroAnimation from "../../components/IntroAnimation";

const Component = ({ className, blocks, title, excerpt, reviewFields }) => {
  return (
    <>
      <Head title={title} description={excerpt ? parse(excerpt) : "Review"} />
      <IntroAnimation />
      <Header />
      <main className={className}>
        <Container>
          <div className="col-left">
            <Heading
              color="textColor"
              heading={title}
              headingType="h1"
              size="headingMedium"
              alignment="center"
              className="review-heading"
              borderBottom
              afterLine
            />
            {blocks &&
              blocks.map((block, index) => (
                <Block block={block} key={index} vote={reviewFields?.vote} />
              ))}
          </div>
          <div className="col-right">
            <Sidebar title={title} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Component;
