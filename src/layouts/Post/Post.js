import parse from "html-react-parser";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Block from "../../utils/Blocks";
import Container from "../../components/Container";
import Head from "../../components/Head";
import Heading from "../../components/Heading";

const Component = ({ className, blocks, title, excerpt }) => {
  return (
    <>
      <Head title={title} description={excerpt ? parse(excerpt) : "Post"} />
      <Header />
      <main className={className}>
        <Container>
          <Heading
            color="textColor"
            heading={title}
            headingType="h1"
            size="headingMedium"
            alignment="center"
            borderBottom
            afterLine
          />
          {blocks &&
            blocks.map((block, index) => <Block block={block} key={index} />)}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Component;
