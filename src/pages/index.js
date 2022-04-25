import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { BLOCKS_FIELD } from "../utils/Blocks";
import Dynamic from "../layouts/Dynamic";

export default function Home({ page }) {
  return <Dynamic {...page} />;
}

export const getStaticProps = async () => {
  const homepage = await client.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      page: homepage?.data?.page,
    },
  };
};

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
