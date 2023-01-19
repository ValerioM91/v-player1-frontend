import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Head from "../../components/Head";
import Heading from "../../components/Heading";
import IntroAnimation from "../../components/IntroAnimation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { TBlock, TImage } from "../../types";
import SocialsShare from "../../components/SocialShare";
import { useEffect, useRef, useState, useCallback } from "react";
import { trackArticleView, trackEndContent } from "../../utils/MixPanel";
import { useHistory } from "../../store/HistoryProvider";

const Block = dynamic(() => import("../../utils/Blocks"), { ssr: false });

export type TReviewProps = {
  id: string;
  className?: string;
  slug: string;
  title?: string;
  excerpt?: string;
  reviewFields?: {
    hero?: TImage;
    vote?: number;
    description?: string;
  };
  blocks?: TBlock[];
};

const Component = ({ className, id, slug, blocks, title, excerpt, reviewFields }: TReviewProps) => {
  const { history = [] } = useHistory();
  const cameFrom = history[history.length - 2];

  useEffect(() => {
    trackArticleView({ title, id }, document.referrer || cameFrom || "");
  }, [title, id]);

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
            <Rev
              id={id}
              className={className}
              title={title}
              blocks={blocks}
              reviewFields={reviewFields}
              slug={slug}
            />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Component;

const Rev = ({ title, blocks, reviewFields, slug, id, className }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const [endContent, setEndContent] = useState(false);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest === 1) {
        setEndContent(true);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    if (endContent) {
      trackEndContent({ title, id });
    }
  }, [endContent, title, id]);

  return (
    <Container className="container">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        key={`progress-bar-${title}`}
      />
      <motion.div className="col-left" ref={ref}>
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
        <SocialsShare url={`https://v-player1-frontend.vercel.app/reviews/${slug}`} title={title} />
      </motion.div>
      <div className="col-right">
        <Sidebar title={title} />
      </div>
    </Container>
  );
};
