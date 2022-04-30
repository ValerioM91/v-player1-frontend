import Head from "../../components/Head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IntroAnimation from "../../components/IntroAnimation";
import dynamic from "next/dynamic";

const Block = dynamic(() => import("../../utils/Blocks", { ssr: false }));

const Component = ({ className, blocks, title, pageFields, header }) => {
  const description = pageFields?.description;

  return (
    <>
      <Head title={title} description={description} />
      <IntroAnimation />
      {header && <Header />}
      <main className={className}>
        {blocks &&
          blocks.map((block, index) => <Block block={block} key={index} />)}
      </main>
      <Footer />
    </>
  );
};

export default Component;
