import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import Block, { BLOCKS_FIELD } from "../utils/Blocks";
import Footer from "../components/Footer";
import Head from "../components/Head";
import IntroAnimation from "../components/IntroAnimation";

const HOMEPAGE_QUERY = gql`
  {
    page(id: "home", idType: URI) {
      slug
      title
      ...PageBlocksField
    }
  }
  ${BLOCKS_FIELD}
`;

export const getStaticProps = async () => {
  const homepage = await client.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      page: homepage?.data?.page,
    },
    revalidate: 30,
  };
};

export default function Home({ page }) {
  const blocks = page?.blocks;
  const title = page?.title;

  return (
    <>
      <Head title={title} />
      <IntroAnimation />
      {blocks &&
        blocks.map((block, index) => <Block block={block} key={index} />)}
      <Footer />
    </>
  );
}
