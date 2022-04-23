import Head from "next/head";
import Block from "../../utils/Blocks";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IntroAnimation from "../../components/IntroAnimation";

const Component = ({ className, blocks, title, pageFields }) => {
  const description = pageFields?.description;

  return (
    <>
      <Head title={title} description={description} />
      <IntroAnimation />
      <Header />
      <main className={className}>
        {blocks &&
          blocks.map((block, index) => <Block block={block} key={index} />)}
      </main>
      <Footer />
    </>
  );
};

export default Component;
