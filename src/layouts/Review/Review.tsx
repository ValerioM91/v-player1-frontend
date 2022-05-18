import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import Heading from "../../components/Heading";
import IntroAnimation from "../../components/IntroAnimation";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { TBlock, TImage } from "../../types";

const Block = dynamic(() => import("../../utils/Blocks"), { ssr: false });

export type TReviewProps = {
  className?: string;
  title?: string;
  excerpt?: string;
  reviewFields?: {
    hero?: TImage;
    vote?: number;
    description?: string;
  };
  blocks?: TBlock[];
};

const Component = ({
  className,
  blocks,
  title,
  excerpt,
  reviewFields,
}: TReviewProps) => {
  return (
    <>
      <Head
        title={title}
        description={excerpt ? excerpt : "Review"}
        image={reviewFields?.hero?.sourceUrl ? reviewFields.hero.sourceUrl : ""}
      />
      <IntroAnimation />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <main className={className}>
            <Container className="container">
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
                    <Block
                      block={block}
                      key={index}
                      vote={reviewFields?.vote}
                    />
                  ))}
              </div>
              <div className="col-right">
                <Sidebar title={title} />
              </div>
            </Container>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Component;
