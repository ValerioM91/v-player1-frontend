import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Block from "../../utils/Blocks";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import Heading from "../../components/Heading";
import IntroAnimation from "../../components/IntroAnimation";
import { motion } from "framer-motion";

const Component = ({ className, blocks, title, excerpt, reviewFields }) => {
  return (
    <>
      <Head
        title={title}
        description={excerpt ? excerpt : "Review"}
        image={reviewFields?.hero?.sourceUrl ? reviewFields.hero.sourceUrl : ""}
      />
      <IntroAnimation />
      <motion.div
        key={title}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Header />
        <main className={className}>
          <Container>
            <div className="col-left">
              <Heading
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
      </motion.div>
    </>
  );
};

export default Component;
