import Head from "../../components/Head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IntroAnimation from "../../components/IntroAnimation";
import dynamic from "next/dynamic";
import { TBlock } from "../../types";

const Block = dynamic(() => import("../../utils/Blocks"), { ssr: false });

export type TDynamicProps = {
  className?: string;
  title?: string;
  header?: boolean;
  pageFields?: {
    description?: string;
  };
  blocks?: TBlock[];
  children?: React.ReactNode;
};

const Component = ({ className, blocks, title, pageFields, header, children }: TDynamicProps) => {
  const description = pageFields?.description;

  return (
    <>
      <Head title={title} description={description} />
      <IntroAnimation />
      {header && <Header />}
      <main className={className}>
        {blocks && blocks.map((block, index) => <Block block={block} key={index} />)}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Component;
